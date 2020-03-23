<?php
try{
    require_once('connectDB.php');
    $sql = "update `meminfo` set memPoint=:memPoint where memNo=:memNo";
    $pdoStatement = $pdo->prepare($sql);
    $pdoStatement->bindValue(":memPoint",$_POST["memPoint"]);
    $pdoStatement->bindValue(":memNo",$_POST["memNo"]);
    $pdoStatement->execute();

}catch (PDOException $e) {
    echo "錯誤行號 : " . $e->getLine() . "<br>";
    echo "錯誤訊息 : " . $e->getMessage() . "<br>";
    // echo "系統暫時連不上請聯絡維護人員";
}
?>