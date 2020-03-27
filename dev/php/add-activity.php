<?php 

try {
    require_once("./connectDB.php");
    $sql = "insert into `newsandactivity`(inforNo , inforName , inforContent , inforPic , inforType ,inforStatus) values(:activity_num , :activity_name , :activity_Introduction , :act_img , :activity_type , :activity_status);";
    $activity  = $pdo->prepare($sql);
    $activity->bindValue(":activity_num", $_POST["activity_num"]);
    $activity->bindValue(":activity_name", $_POST["activity_name"]);
    $activity->bindValue(":activity_Introduction", $_POST["activity_Introduction"]);
    $activity->bindValue(":act_img", $_FILES['act_img']['name']);
    $activity->bindValue(":activity_type", $_POST["activity_type"]);
    $activity->bindValue(":activity_status", 1);
    $activity->execute();




} catch (PDOException $e) {
    echo "錯誤行號 : " . $e->getLine() . "<br>";
    echo "錯誤訊息 : " . $e->getMessage() . "<br>";
}


?>