<?php
try{
    require_once('connectDB.php');
    $sql = "insert into `orderrecord`(`memNo`,`orderPic`,`orderDate`,`orderName`,`orderPhone`,`orderAddress`,`orderQty`,`orderPrice`,`orderStatus`)
     values (:memNo,'',:orderDate,:orderName,:orderPhone,:orderAddress,:orderQty,:orderPrice, '0')";
    $pdoStatement = $pdo->prepare($sql);
    $pdoStatement->bindValue(":memNo",$_POST["memNo"]);
    $pdoStatement->bindValue(":orderDate",$_POST["orderDate"]);
    $pdoStatement->bindValue(":orderName",$_POST["orderName"]);
    $pdoStatement->bindValue(":orderPhone",$_POST["orderPhone"]);
    $pdoStatement->bindValue(":orderAddress",$_POST["orderAddress"]);
    $pdoStatement->bindValue(":orderQty",$_POST["orderQty"]);
    $pdoStatement->bindValue(":orderPrice",$_POST["orderPrice"]);
    $pdoStatement->execute();

    $filepath = '../img/customized_collar/orderRecord/';
    if (file_exists($filepath) === false) {
        mkdir($filepath);
    }

    $imgDataStr = $_POST['image'];
    $imgDataStr = explode(";", $imgDataStr)[1];
    $imgDataStr = explode(",", $imgDataStr)[1];
    $imgDataStr = str_replace(" ", "+", $imgDataStr);

    $data = base64_decode($imgDataStr);
    $last_id = $pdo->lastInsertId();  //取得當前psn
    $newName = $last_id.".png";
    
    $file = $filepath . $newName . ".png";
    $success = file_put_contents($file,$data);

    if($success){
        $sql = "update `orderrecord` set orderPic=:orderPic where orderNo=:orderNo";
        $pdoStatement = $pdo->prepare($sql);
        $pdoStatement->bindValue(":orderNo", $last_id);
        $pdoStatement->bindValue(":orderPic", $newName);
        $pdoStatement->execute();
    }
}catch (PDOException $e) {
    echo "錯誤行號 : " . $e->getLine() . "<br>";
    echo "錯誤訊息 : " . $e->getMessage() . "<br>";
    // echo "系統暫時連不上請聯絡維護人員";
}
?>
