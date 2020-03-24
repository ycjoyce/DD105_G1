<?php
session_start();

try{
    require_once("./connectDB.php");
    $sql= "select count(*) amt from `message` where ".
    "`getMemNo`={$_SESSION["memNo"]} and `readOrNot` = 0 ".
    " and (msgText is not null or msgPic is not null) ".
    "and sendmemno not in ".
    "(select blackmemno from blacklist where memno='{$_SESSION["memNo"]}') ;";
    
    $unReadAmt= $pdo->query($sql);
    $unReadNo= $unReadAmt->fetch(PDO::FETCH_ASSOC);
    echo $unReadNo["amt"];
}catch(PDOException $e){
    echo "錯誤訊息:". $e->getMessage();
}
?>