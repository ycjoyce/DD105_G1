<?php
   

try{

    require_once("./connectDB.php");
    $sql = "SELECT f.fundNo, f.memNo, f.fundTitle, f.fundImg, f.fundStartDate, f.fundEndDate, f.fundGoal, f.fundNowAmount ,f.fundAttendPeople, m.memPic from fundraising f join meminfo m on f.memNo = m.memNo WHERE datediff(f.fundEndDate, f.fundStartDate)<20";
    $fundraising = $pdo->query($sql);
    $fundraising->execute();


    $fundraisingrows =  $fundraising->fetchall(PDO::FETCH_ASSOC);
        
        echo json_encode($fundraisingrows);

    
       

} catch (PDOException $e){

    echo "錯誤行號 : " . $e->getLine() . "<br>";
	echo "錯誤訊息 : " . $e->getMessage() . "<br>";

}



?>