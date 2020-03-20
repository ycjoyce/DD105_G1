<?php
session_start();
try{
    require_once("./connectDB.php");
    $sql= "delete from `blacklist` where blackmemno='{$_POST["blackMemNo"]}' ".
          "and memno='{$_SESSION["memNo"]}';";
    $cancelrow= $pdo->exec($sql);
    
    if($cancelrow===false){
        echo "error";
    }else{
        echo "success";
    }
}catch(PDOException $e){
    echo "錯誤訊息: ".$e->getMessage();
}
?>