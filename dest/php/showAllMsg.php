<?php
session_start();
$sendMemNo= $_REQUEST["sendMemNo"];

try{
    require_once("./connectDB.php");
    //找此會員跟此寄件人的所有信件
    $sql= "select * from `message` where `sendMemNo` in ('{$sendMemNo}','{$_SESSION["memNo"]}') and `getMemNo` in ('{$_SESSION["memNo"]}','{$sendMemNo}') order by `msgNo`;";
    
    $msg= $pdo->query($sql);

    $xml='<?xml version="1.0"?>';
        $xml.= "<messages>";//根元素
        while($msgRow= $msg->fetch(PDO::FETCH_ASSOC)){
            $xml.= "<message>";
                $xml.= "<msgNo>{$msgRow['msgNo']}</msgNo>";
                $xml.= "<myMemNo>{$_SESSION["memNo"]}</myMemNo>";
                $xml.= "<sendMemNo>{$msgRow['sendMemNo']}</sendMemNo>";
                $xml.= "<getMemNo>{$msgRow['getMemNo']}</getMemNo>";
                $xml.= "<readOrNot>{$msgRow['readOrNot']}</readOrNot>";
                $xml.= "<msgTime>{$msgRow['msgTime']}</msgTime>";
                $xml.= "<msgText>{$msgRow["msgText"]}</msgText>";
                $xml.= "<msgPic>{$msgRow['msgPic']}</msgPic>";
                    $sql= "select * from `memInfo` where memNo='{$msgRow['sendMemNo']}'";
                    $sendMem= $pdo->query($sql);
                    $sendMemRow= $sendMem->fetch(PDO::FETCH_ASSOC);
                $xml.= "<sendMemName>{$sendMemRow['memName']}</sendMemName>";
                $xml.= "<sendMemPic>{$sendMemRow['memPic']}</sendMemPic>";
            $xml.= "</message>";
        }
        $xml.= "</messages>";
    header("Content-Type:text/xml");
    echo $xml;
}catch(PDOException $e){
    echo "錯誤訊息:". $e->getMessage();
}
?>