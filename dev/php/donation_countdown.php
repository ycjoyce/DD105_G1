<?php
   

try{

    require_once("connectDB.php");
    $sql = "SELECT f.fundNo, f.memNo, f.fundTitle, f.fundImg, f.fundName, f.fundStatus, f.fundStartDate, f.fundEndDate, f.fundGoal, f.fundNowAmount ,f.fundAttendPeople, m.memPic from fundraising f join meminfo m on f.memNo = m.memNo WHERE (to_days(f.fundEndDate)-to_days(CURRENT_DATE()) between 1 and 30) and f.fundStatus = 1";
    $fundraising = $pdo->query($sql);
    $fundraising->execute();


    $fundraisingrows =  $fundraising->fetchall(PDO::FETCH_ASSOC);
        
        echo json_encode($fundraisingrows);

    
       

} catch (PDOException $e){

    echo "錯誤行號 : " . $e->getLine() . "<br>";
	echo "錯誤訊息 : " . $e->getMessage() . "<br>";

}



?>