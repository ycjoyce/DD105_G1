<?php

try{
    require_once('./connectDB.php');

    $sql= "select * from `lostpetreport` where lostPetRpNo=:lostPetRpNo";    
    $lostRp = $pdo->prepare($sql);
    $lostRp->bindValue(":lostPetRpNo", $_POST["lostPetRpNo"]);
    $lostRp->execute();

    $lostRpRow = $lostRp->fetch(PDO::FETCH_ASSOC);
    echo json_encode($lostRpRow);
    // echo ($result);

}catch(PDOException $e){
    echo "錯誤訊息:". $e->getMessage();
}
?>