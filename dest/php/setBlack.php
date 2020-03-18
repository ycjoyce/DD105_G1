<?php
session_start();
try{
    require_once("./connectDB.php");
    $sql= "insert into `blacklist` (memNo, blackMemNo) values ('{$_SESSION["memNo"]}','{$_REQUEST["blackMemNo"]}');";
    $setting= $pdo->exec($sql);

    if(isset($setting)){
        echo "ok";
    }else{
        echo "wrong";
    }
}catch(PDOException $e){
    echo "錯誤訊息: ".$e->getMessage();
}
?>