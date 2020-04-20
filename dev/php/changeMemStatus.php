<?php
try{
    require_once("./connectDB.php");

    $sql= "update `meminfo` set memstatus= if(memstatus=1,0,1) where memno='{$_REQUEST["memNo"]}';";
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