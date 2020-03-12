<?php
try{
    require_once('./connectDB.php');

    $sql= "select * from `memInfo` where memId=:memId and memPsw=:memPsw;";
    $member= $pdo->prepare($sql);
    $member->bindValue(':memId',$_REQUEST["signInAccount"]);
    $member->bindValue(':memPsw',$_REQUEST["signInPsw"]);
    $member->execute();

    if($member->rowCount()==0){
        echo "notFound";
    }else{
        $memRow = $member->fetch(PDO::FETCH_ASSOC);
        session_start();
        $_SESSION["memNo"]= $memRow["memNo"];
        $_SESSION["memId"]= $memRow["memId"];
        $_SESSION["memName"]= $memRow["memName"];
        $_SESSION["memPsw"]= $memRow["memPsw"];
        $_SESSION["memPic"]= $memRow["memPic"];
        $_SESSION["memPoint"]= $memRow["memPoint"];
        $_SESSION["memStatus"]= $memRow["memStatus"];
        $_SESSION["memTagNo"]= $memRow["memTagNo"];

        $member= ["memNo"=>$_SESSION["memNo"],"memId"=>$_SESSION["memId"],"memName"=>$_SESSION["memName"],"memPsw"=>$_SESSION["memPsw"],"memPic"=>$_SESSION["memPic"],"memPoint"=>$_SESSION["memPoint"],"memStatus"=>$_SESSION["memStatus"],"memTagNo"=>$_SESSION["memTagNo"]];
        echo json_encode($member);
    }
}catch(PDOException $e){
    echo "錯誤行號: ".$e->getLine()."<br>";
    echo "錯誤訊息: ".$e->getMessage()."<br>";
    echo "系統無法連線<br>";
}
?> 