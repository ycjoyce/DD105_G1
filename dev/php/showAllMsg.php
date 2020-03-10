<?php
session_start();
require_once("./connectDB.php");

//找此會員跟此寄件人的所有信件
$sql= "select * from `message` where sendMemNo='{$_REQUEST["sendMemNo"]}' and getMemNo='{$_SESSION["memNo"]}';";

$msg= $pdo->query($sql);
echo $msg->rowCount();
$msgRows= $msg->fetchAll(PDO::FETCH_ASSOC);
?>