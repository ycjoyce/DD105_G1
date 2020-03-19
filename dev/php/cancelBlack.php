<?php
session_start();
try{
    require_once("./connectDB.php");
    $sql= "delete from `blacklist` where blackmemno='{$_REQUEST["blackMemNo"]}' ".
          "and memno='{$_SESSION["memNo"]}'";
    $cancel= $pdo->exec($sql);
    
    // if($cancel==false){
    //     echo "error";
    // }else{
    //     echo "success";
    // }
}catch(PDOException $e){
    echo "錯誤訊息: ".$e->getMessage();
}
?>