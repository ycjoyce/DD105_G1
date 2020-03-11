<?php
session_start();
require_once("./connectDB.php");

$sql= "update `message` set readOrNot = 1 where sendMemNo='{$_REQUEST["sendMemNo"]}' and getMemNo='{$_SESSION["memNo"]}';";
$update= $pdo->exec($sql);
echo $update;
?>