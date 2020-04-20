<?php

session_start();
$memno = $_SESSION["memNo"];

try{
    require_once("./connectDB.php");
    $sql= "insert into `petfriendlyfav` (memNo, friendlyNo) values ('$memno','{$_REQUEST["friendlyNo"]}');";
    $addFav= $pdo->exec($sql);

    if(isset($addFav)){
        echo "ok";
    }else{
        echo "wrong";
    }
    
}catch(PDOException $e){
    echo "錯誤訊息: ".$e->getMessage();
}
?>