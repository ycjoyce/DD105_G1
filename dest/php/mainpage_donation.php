

<?php

session_start();
    $memNo = $_SESSION['memNo'];
    $errMsg = "";
   

try{

    require_once("connectDB.php");
    $sql = "Select * From fundraising ORDER BY `fundraising`.`fundNo` DESC LIMIT 3";
    $fundraising = $pdo->query($sql);
    $fundraising->execute();


    $fundraisingrows =  $fundraising->fetchall(PDO::FETCH_ASSOC);
        
        echo json_encode($fundraisingrows);

    
       

} catch (PDOException $e){

    echo "錯誤行號 : " . $e->getLine() . "<br>";
	echo "錯誤訊息 : " . $e->getMessage() . "<br>";

}



?>