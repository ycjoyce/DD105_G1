<?php
session_start();
$sendMemNo= $_REQUEST["sendMemNo"];

try{
    require_once("./connectDB.php");
    //找此會員跟此寄件人的所有信件
    $sql= "select * from `message` where `sendMemNo` in ('{$sendMemNo}','{$_SESSION["memNo"]}') and `getMemNo` in ('{$_SESSION["memNo"]}','{$sendMemNo}') and (msgText is not null or msgPic is not null) order by `msgNo`;";
    
    $msg= $pdo->query($sql);

    $msgRows= $msg->fetchAll(PDO::FETCH_ASSOC);

    $allMsg=[];
    foreach($msgRows as $i => $msgRow){

        $sql= "select * from `memInfo` where memNo='{$msgRow['sendMemNo']}'";
        $sendMem= $pdo->query($sql);
        $sendMemRow= $sendMem->fetch(PDO::FETCH_ASSOC);

        $allMsg[]=array("msgNo"=>$msgRow['msgNo'] , "myMemNo"=>$_SESSION["memNo"] , "sendMemNo"=>$msgRow['sendMemNo'] , "getMemNo"=>$msgRow['getMemNo'] , "readOrNot"=>$msgRow['readOrNot']  , "msgTime"=>$msgRow['msgTime'] ,"msgText"=>$msgRow['msgText'] , "msgPic"=>$msgRow['msgPic'] , "sendMemName"=>$sendMemRow['memName'] , "sendMemPic"=>$sendMemRow['memPic']);
    }
    echo json_encode($allMsg);

}catch(PDOException $e){
    echo "錯誤訊息:". $e->getMessage();
}
?>