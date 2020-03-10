<?php
session_start();
require_once("./connectDB.php");

//找此會員跟此寄件人的所有信件
$sql= "select * from `message` where `sendMemNo` in ('{$_REQUEST["sendMemNo"]}','{$_SESSION["memNo"]}') and `getMemNo` in ('{$_SESSION["memNo"]}','{$_REQUEST["sendMemNo"]}') order by `msgTime`;";

$msg= $pdo->query($sql);

$xml='<?xml version="1.0"?>';
    $xml.= "<messages>";//根元素
    while($msgRow= $msg->fetch(PDO::FETCH_ASSOC)){
        $xml.= "<message>";
            $xml.= "<myMemNo>{$_SESSION["memNo"]}</myMemNo>";
            $xml.= "<sendMemNo>{$msgRow['sendMemNo']}</sendMemNo>";
            $xml.= "<getMemNo>{$msgRow['getMemNo']}</getMemNo>";
            $xml.= "<msgTime>{$msgRow['msgTime']}</msgTime>";
            $xml.= "<msgText>{$msgRow['msgText']}</msgText>";
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
// echo $msg->rowCount();
?>