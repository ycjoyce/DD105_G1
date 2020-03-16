<?php
session_start();

try{
    require_once("./connectDB.php");
    $sql= "select count(*) amt from `message` where `getMemNo`={$_SESSION["memNo"]} and `readOrNot` = 0;";
    $unReadAmt= $pdo->query($sql);
    $unReadNo= $unReadAmt->fetch(PDO::FETCH_ASSOC);
    echo $unReadNo["amt"];
}catch(PDOException $e){
    echo "錯誤訊息:". $e->getMessage();
}
?>