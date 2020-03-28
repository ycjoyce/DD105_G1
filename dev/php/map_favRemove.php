<?php

session_start();
$memno = $_SESSION["memNo"];

try{
    require_once("./connectDB.php");
    $sql= "delete from `petfriendlyfav` where memNo ='$memno' and friendlyNo = '{$_REQUEST["friendlyNo"]}';";
    $removeFav= $pdo->exec($sql);

    if(isset($removeFav)){
        echo "ok";
    }else{
        echo "wrong";
    }
}catch(PDOException $e){
    echo "錯誤訊息: ".$e->getMessage();
}
?>