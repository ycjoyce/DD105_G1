<?php
try{
    require_once("./connectDB.php");

    $sql= "update `fundraising` set
    fundStatus = if(fundStatus=1,0,1)
    where fundNo= '{$_REQUEST["fundNo"]}';";
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