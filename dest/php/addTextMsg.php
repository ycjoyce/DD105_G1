<?php
session_start();
try{
    require_once("./connectDB.php");

    $sql= "insert into `message` (sendMemNo, getMemNo, msgTime, msgText, msgPic) values ('{$_SESSION["memNo"]}', :getMemNo, date_format(now(),'%Y.%m.%d  %H:%i'), :msgText, null);";
    $msg= $pdo->prepare($sql);
    $msg->bindValue(":getMemNo", $_REQUEST["getMemNo"]);


    $msg->bindValue(":msgText",$_REQUEST["msgText"]);

    echo "特殊字元".$_REQUEST["msgText"];
    // $msg->execute();

}catch(PDOException $e){
    echo "錯誤訊息: ".$e->getMessage()."<br>";
}
?>