<?php
try{
    require_once('connectDB.php');
    
    $sql = "DELETE FROM `customizedtag` WHERE `tagNo`=:tagNo";
    $pdoStatement = $pdo->prepare($sql);
    $pdoStatement->execute();
    
    }
}catch (PDOException $e) {
    echo "錯誤行號 : " . $e->getLine() . "<br>";
    echo "錯誤訊息 : " . $e->getMessage() . "<br>";
    // echo "系統暫時連不上請聯絡維護人員";
}
?>