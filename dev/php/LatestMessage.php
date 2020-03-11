<?php
session_start();
require_once("./connectDB.php");

//找此會員跟所有寄件人的最新一筆
$sql= "select * from (select * from message order by msgtime desc limit 100) `tmp` where getmemno='{$_SESSION["memNo"]}' group by sendmemno order by msgtime;";

$msg= $pdo->query($sql);
$msgRows= $msg->fetchAll(PDO::FETCH_ASSOC);
if($msg->rowCount()==0){
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
            $xml.= "<readOrNot>{$msgRow['readOrNot']}</readOrNot>";
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