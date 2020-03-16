<?php
session_start();
try{
    require_once("./connectDB.php");

    $sql= "delete from `message` where msgNo='{$_REQUEST["delMsgNo"]}';";
    $del= $pdo->exec($sql);
    
}catch(PDOException $e){
    echo "錯誤訊息: ".$e->getMessage()."<br>";
}
?>