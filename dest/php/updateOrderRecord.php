<?php
try{
    require_once('connectDB.php');
    $sql = "update `orderrecord` set orderStatus=:orderStatus where orderNo=:orderNo";
    $pdoStatement = $pdo->prepare($sql);
    $pdoStatement->bindValue(":orderStatus",$_POST["orderStatus"]);
    $pdoStatement->bindValue(":orderNo",$_POST["orderNo"]);
    $pdoStatement->execute();

}catch (PDOException $e) {
    echo "錯誤行號 : " . $e->getLine() . "<br>";
    echo "錯誤訊息 : " . $e->getMessage() . "<br>";
    // echo "系統暫時連不上請聯絡維護人員";
}
?>