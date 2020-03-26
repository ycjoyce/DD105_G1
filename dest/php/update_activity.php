<?php
try {
    require_once("./connectDB.php");
    $sql = "select * from `newsandactivity` where inforNo = :inforNo;";
    $activity  = $pdo->prepare($sql);
    $activity->bindValue(":inforNo", $_GET["id"]);
    $activity->execute();
    
    // if(isset($_GET["id"])){echo "YES";} else{echo "NO";};

    $activityRow = $activity->fetch(PDO::FETCH_ASSOC);
    $msg = json_encode($activityRow);
    echo $msg;
    // echo gettype($msg);
   
} catch (PDOException $e) {
    echo "錯誤行號 : " . $e->getLine() . "<br>";
    echo "錯誤訊息 : " . $e->getMessage() . "<br>";
}