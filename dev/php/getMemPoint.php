<?php

session_start();
$memNo = $_SESSION["memNo"];

try{
    require_once('connectDB.php');
    $sql = "select `memPoint` from `memInfo` where memNo=$memNo";
    $pdoStatement = $pdo->prepare($sql);
    // $pdoStatement->bindValue(":memNo",$_POST["memNo"]);
    $pdoStatement->execute();

    //如果找得資料，取回資料，送出JSON字串
    if($pdoStatement->rowCount() == 0){
        echo "{}";
    }else{
        $memRow = $pdoStatement->fetchAll(PDO::FETCH_ASSOC);
        echo json_encode($memRow);
    }

}catch (PDOException $e) {
    echo "錯誤行號 : " . $e->getLine() . "<br>";
    echo "錯誤訊息 : " . $e->getMessage() . "<br>";
    // echo "系統暫時連不上請聯絡維護人員";
}
?>