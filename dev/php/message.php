<?php
session_start();
require_once("./connectDB.php");

//找所有收件者為此會員的信件
$sql= "select * from `message` where getMemNo='{$_SESSION["memNo"]}'";
$msg= $pdo->query($sql);
$msgRows= $msg->fetchAll(PDO::FETCH_ASSOC);
foreach($msgRows as $i => $msgRow){
    echo "$i|";
    echo "{$msgRow['sendMemNo']}|";
    echo "{$msgRow['msgTime']}|";
    echo "{$msgRow['msgText']}|";
    echo "{$msgRow['msgPic']}|";
    $sql= "select * from `memInfo` where memNo='{$msgRow['sendMemNo']}'";
    $sendMem= $pdo->query($sql);
    $sendMemRow= $sendMem->fetch(PDO::FETCH_ASSOC);
    echo "{$sendMemRow['memName']}|";
    echo "{$sendMemRow['memPic']}";
    if($i==count($msgRows)-1){
        echo "|last";
    }
}


?>