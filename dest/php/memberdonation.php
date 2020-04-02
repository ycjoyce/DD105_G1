
<?php

   session_start();
   $memNo = $_SESSION['memNo'];
   $errMsg = "";
   

   try{
   
       require_once("./connectDB.php");
       $sql = "SELECT f.fundNo, f.fundImg, f.fundTitle, f.fundName, f.fundStartDate, f.fundEndDate, f.fundGoal, a.atFundDate, a.fundNowAmount, a.memNo 
       from `fundraising` f join `attend_fundraising` a on f.fundNo = a.fundNo WHERE a.memNo = $memNo;";
       $fundraising = $pdo->query($sql);
       $fundraising->bindValue(":memNo",$_SESSION['memNo']);
       $fundraising->execute();
   
   
       $fundraisingrows =  $fundraising->fetchall(PDO::FETCH_ASSOC);
           
           echo json_encode($fundraisingrows);
   
       
          
   
   } catch (PDOException $e){
   
       echo "錯誤行號 : " . $e->getLine() . "<br>";
       echo "錯誤訊息 : " . $e->getMessage() . "<br>";
   
   }
   
   
   
   ?>