<?php
session_start();
require_once("./connectDB.php");

//找所有收件者為此會員的信件
$sql= "select * from `message` where getMemNo='{$_SESSION["memNo"]}'";
$msg= $pdo->query($sql);
$msgRows= $msg->fetchAll(PDO::FETCH_ASSOC);
if($msgRows->rowCount()==0){
    echo "notFound";
}else{
    $xml='<?xml version="1.0"?>';
    $xml.= "<members>";//根元素
    foreach($msgRows as $i => $msgRow){
        $xml.= "<member>";
            $xml.= "<msgOrder>{$i}</msgOrder>";
            $xml.= "<sendMemNo>{$msgRow['sendMemNo']}</sendMemNo>";
            $xml.= "<msgTime>{$msgRow['msgTime']}</msgTime>";
            $xml.= "<msgText>{$msgRow['msgText']}</msgText>";
            $xml.= "<msgPic>{$msgRow['msgPic']}</msgPic>";
                $sql= "select * from `memInfo` where memNo='{$msgRow['sendMemNo']}'";
                $sendMem= $pdo->query($sql);
                $sendMemRow= $sendMem->fetch(PDO::FETCH_ASSOC);
            $xml.= "<sendMemName>{$sendMemRow['memName']}</sendMemName>";
            $xml.= "<sendMemPic>{$sendMemRow['memPic']}</sendMemPic>";
        $xml.= "</member>";
    }
    $xml.= "</members>";
    header("Content-Type:text/xml");
    echo $xml;
}
?>