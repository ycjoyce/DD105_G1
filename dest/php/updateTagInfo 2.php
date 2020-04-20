<?php
try{
    require_once('connectDB.php');
    $sql = "update `customizedtag` set tagName=:tagName, tagPoint=:tagPoint where tagNo=:tagNo";
    $pdoStatement = $pdo->prepare($sql);
    $pdoStatement->bindValue(":tagName",$_POST["tagName"]);
    $pdoStatement->bindValue(":tagPoint",$_POST["tagPoint"]);
    $pdoStatement->bindValue(":tagNo",$_POST["tagNo"]);
    $pdoStatement->execute();

}catch (PDOException $e) {
    echo "錯誤行號 : " . $e->getLine() . "<br>";
    echo "錯誤訊息 : " . $e->getMessage() . "<br>";
    // echo "系統暫時連不上請聯絡維護人員";
}
?>