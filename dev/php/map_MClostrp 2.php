<?php

session_start();
$memno = $_SESSION["memNo"];

try{
    require_once('./connectDB.php');

    $sql= "select * from `lostpetreport` where memNo = $memno ORDER BY `lostPetRpNo` DESC";    
    $lostRp = $pdo->query($sql);
    $lostRp->execute();

    $lostRpRow = $lostRp->fetchAll(PDO::FETCH_ASSOC);
    $result = json_encode($lostRpRow);
    echo ($result);

}catch(PDOException $e){
    echo "錯誤訊息:". $e->getMessage();
}
?>