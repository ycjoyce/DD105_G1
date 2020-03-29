<?php
session_start();
require_once("./connectDB.php");

//找此會員跟所有寄件人的最新一筆
$sql = "select * from message ".
       "where msgno in ".
       "( select max(msgNo) from message where sendmemno='{$_SESSION["memNo"]}' or getmemno='{$_SESSION["memNo"]}' ".
       "group by ".
       "concat(if(sendmemno='{$_SESSION["memNo"]}',sendmemno,getmemno),',',if(getmemno='{$_SESSION["memNo"]}',sendmemno,getmemno)) ) ".
       "and sendmemno not in ".
       "(select blackmemno from blacklist where memno='{$_SESSION["memNo"]}') ".
       "and getmemno not in ".
       "(select blackmemno from blacklist where memno='{$_SESSION["memNo"]}');";


$msg= $pdo->query($sql);
$msgRows= $msg->fetchAll(PDO::FETCH_ASSOC);

if($msg->rowCount()==0){
    echo "notFound";
}else{
    $latestMsg=[];
    foreach($msgRows as $i => $msgRow){
        //是別人寄給我的話
        $sql= "select * from `memInfo` where memNo='{$msgRow['sendMemNo']}'";
        $sendMem= $pdo->query($sql);
        $sendMemRow= $sendMem->fetch(PDO::FETCH_ASSOC);

        //是我寄給別人的話
        $sql= "select * from `memInfo` where memNo='{$msgRow['getMemNo']}'";
        $getMem= $pdo->query($sql);
        $getMemRow= $getMem->fetch(PDO::FETCH_ASSOC);

        $latestMsg[]=array("myMemNo"=>$_SESSION["memNo"] , "sendMemNo"=>$msgRow['sendMemNo'] , "getMemNo"=>$msgRow['getMemNo'] , "msgTime"=>$msgRow['msgTime'] , "msgText"=>$msgRow['msgText'] , "msgPic"=>$msgRow['msgPic'] , "readOrNot"=>$msgRow['readOrNot'] , "sendMemName"=>$sendMemRow['memName'] , "sendMemPic"=>$sendMemRow['memPic'] , "getMemName"=>$getMemRow['memName'] , "getMemPic"=>$getMemRow['memPic']);
    }
    echo json_encode($latestMsg);
}
?>