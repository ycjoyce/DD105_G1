<?php
session_start();
try{
    require_once("./connectDB.php");

    $sql="select * from `blacklist` where memno='{$_SESSION["memNo"]}' and blackmemno=(select memno from `meminfo` where memId='bringlovehome@gmail.com');";
    $myBlack= $pdo->query($sql);

    if($myBlack->rowCount()!=0){
        echo "error";
    }else{
        echo "success";
    }

}catch(PDOException $e){
    echo "錯誤訊息: ".$e->getMessage();
}
?>