<?php
session_start();

try{
    require_once("./connectDB.php");
    $sql= "select count(*) amt from `message` where `sendMemNo` = '{$_REQUEST["sendMemNo"]}' and `getMemNo`={$_SESSION["memNo"]} and (msgText is not null or msgPic is not null) and `readOrNot` = 0;";
    $unReadAmt= $pdo->query($sql);
    $unReadNo= $unReadAmt->fetch(PDO::FETCH_ASSOC);
    echo $unReadNo["amt"];
}catch(PDOException $e){
    echo "錯誤訊息:". $e->getMessage();
}
?>