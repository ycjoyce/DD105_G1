<?php
try {
    require_once('connectDB.php');
    $sql = "select *
    from `orderrecord` o join `memInfo` m on (o.memNo = m.memNo) where o.memNo=:memNo;";
    $pdoStatement = $pdo->prepare($sql);
    $pdoStatement->bindValue(":memNo",$_REQUEST["memNo"]);
    $pdoStatement->execute();

    //如果找得資料，取回資料，送出JSON字串
    if($pdoStatement->rowCount() == 0){
        echo "{}";
    }else{
        $tagRow = $pdoStatement->fetchAll(PDO::FETCH_ASSOC);
        echo json_encode($tagRow);
    }
} catch (PDOException $e) {
    echo "錯誤行號 : " . $e->getLine() . "<br>";
    echo "錯誤訊息 : " . $e->getMessage() . "<br>";
    // echo "系統暫時連不上請聯絡維護人員";
}
?>