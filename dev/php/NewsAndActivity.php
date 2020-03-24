<?php
try {
    require_once("./connectDB.php");
    $sql = "select * from `newsandactivity` ;";
    $activity  = $pdo->prepare($sql);
    $activity->execute();

    $activityRow = $activity->fetchAll(PDO::FETCH_ASSOC);
    $msg = json_encode($activityRow);
    echo $msg ;
    // echo gettype($msg);

} catch (PDOException $e) {
    echo "錯誤行號 : " . $e->getLine() . "<br>";
    echo "錯誤訊息 : " . $e->getMessage() . "<br>";
}
