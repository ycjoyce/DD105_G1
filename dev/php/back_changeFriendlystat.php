<?php
try{
    require_once("./connectDB.php");

    $sql= "update `petfriendly` set
    friendlyStatus = if(friendlyStatus=1,0,1)
    where friendlyNo= '{$_REQUEST["friendlyNo"]}';";
    $update= $pdo->exec($sql);

    if($update===false){
        echo "error";
    }else{
        echo "ok";
    }
}catch(PDOException $e){
    echo "錯誤訊息: ".$e->getMessage();
}
?>