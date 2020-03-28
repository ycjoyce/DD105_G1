<?php
try{
    require_once('connectDB.php');
    $sql = "insert into `customizedtag`(`tagName`,`tagSrc1`,`tagSrc2`,`tagPoint`,`tagStatus`,) values ('$_POST[tagName]','','','$_POST[tagPoint]','1')";
    $pdoStatement = $pdo->prepare($sql);
    $pdoStatement->execute();
    $last_id = $pdo->lastInsertId();  //取得當前psn
    $path_parts1 = pathinfo($_FILES['tagSrc1']['name']);
    $path_parts2 = pathinfo($_FILES['tagSrc2']['name']);
    $newName1 = $last_id . "_1." . $path_parts1['extension'];
    $newName2 = $last_id . "_2." . $path_parts2['extension'];
    $filepath = '../img/customized_collar/new1';
    if (file_exists($filepath) === false) {
        mkdir($filepath);
    }
    $from = $_FILES['tagSrc1']['tmp_name'];
    $to = "../img/customized_collar/new1/{$newName1}";
    if(copy($from,$to)){
        $sql = "update `customizedtag` set tagSrc1=:tagSrc1 where tagNo=:tagNo";
        $pdoStatement = $pdo->prepare($sql);
        $pdoStatement->bindValue(":tagNo", $last_id);
        $pdoStatement->bindValue(":tagSrc1", $newName1);
        $pdoStatement->execute();
    }else {
    }
    $from = $_FILES['tagSrc2']['tmp_name'];
    $to = "../img/customized_collar/new1/{$newName2}";
    if(copy($from,$to)){
        $sql = "update `customizedtag` set tagSrc2=:tagSrc2 where tagNo=:tagNo";
        $pdoStatement = $pdo->prepare($sql);
        $pdoStatement->bindValue(":tagNo", $last_id);
        $pdoStatement->bindValue(":tagSrc2", $newName2);
        $pdoStatement->execute();
    }else {
    }
}catch (PDOException $e) {
    echo "錯誤行號 : " . $e->getLine() . "<br>";
    echo "錯誤訊息 : " . $e->getMessage() . "<br>";
    // echo "系統暫時連不上請聯絡維護人員";
}
?>
