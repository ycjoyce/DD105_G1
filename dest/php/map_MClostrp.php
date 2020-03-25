<?php

try{
    require_once('./connectDB.php');

    $sql= "select * from `lostpetreport` ORDER BY `lostPetRpNo` DESC";    
    $lostRp = $pdo->query($sql);
    $lostRp->execute();

    $lostRpRow = $lostRp->fetchAll(PDO::FETCH_ASSOC);
    $result = json_encode($lostRpRow);
    echo ($result);

}catch(PDOException $e){
    echo "錯誤訊息:". $e->getMessage();
}
?>