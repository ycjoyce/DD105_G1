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


    // $sql_update = "update`newsandactivity` set inforName =  :activity_name , inforContent = :activity_Introduction, inforPic = :act_img, inforType = :activity_type,inforStatus = :activity_status where inforNo = :inforNo ;";
    // $activity  = $pdo->prepare($sql_update);
    // $activity->bindValue(":inforNo", $_POST["id"]);
    // $activity->bindValue(":activity_name", $_GET["activity_name"]);
    // $activity->bindValue(":activity_Introduction", $_GET["activity_Introduction"]);
    // $activity->bindValue(":act_img", $_FILES['act_img']['name']);
    // $activity->bindValue(":activity_type", $_GET["activity_type"]);
    // $activity->bindValue(":activity_status", 1);
    // $activity->execute();
    // if(isset($_POST["id"])){echo "YES";} else{echo "NO";};
} catch (PDOException $e) {
    echo "錯誤行號 : " . $e->getLine() . "<br>";
    echo "錯誤訊息 : " . $e->getMessage() . "<br>";
}

?>
