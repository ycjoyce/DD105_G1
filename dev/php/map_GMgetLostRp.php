<?php

try{
    require_once('./connectDB.php');

    $sql= "select * from lostpetreport L, meminfo M  where L.memNo = M.memNo and lostPetRpStat = 0";
    $types = $pdo->query($sql);
    $types->execute();

    $typesRow = $types->fetchAll(PDO::FETCH_ASSOC);
    $result = json_encode($typesRow);
    echo ($result);

}catch(PDOException $e){
    echo "錯誤訊息:". $e->getMessage();
}
?>