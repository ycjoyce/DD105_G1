<?php
session_start();
try{
    require_once("./connectDB.php");

    $sql="select memno from `lostpetreport` where lostpetrpno= {$_REQUEST['lostNo']};";
    
    $msg= $pdo->query($sql);
    

    if($msg->rowCount()==0){
        echo "error";
    }else{
        $theMem= $msg->fetch(PDO::FETCH_ASSOC);
        echo $theMem["memno"];
    }

}catch(PDOException $e){
    echo "錯誤訊息: ".$e->getMessage()."<br>";
}
?>