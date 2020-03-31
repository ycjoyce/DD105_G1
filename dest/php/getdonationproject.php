<?php

try{
    require_once('./connectDB.php');

    $sql= "select * from `fundraising`";    
    $fundraising = $pdo->query($sql);
    $fundraising->execute();

    $fundraisingrow = $fundraising->fetchAll(PDO::FETCH_ASSOC);
    $result = json_encode($fundraisingrow);
    echo ($result);

}catch(PDOException $e){
    echo "錯誤訊息:". $e->getMessage();
}
?>