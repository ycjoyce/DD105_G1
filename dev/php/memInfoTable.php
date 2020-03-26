<?php
session_start();
try{
    require_once("./connectDB.php");
    $sql= "select * from `meminfo` where memno='{$_SESSION["memNo"]}';";
    $member= $pdo->query($sql);

    $memInfo=$member->fetch(PDO::FETCH_ASSOC);

    if(isset($memInfo)){
        $memberRow=["memNo"=>$memInfo["memNo"],"memId"=>$memInfo["memId"],"memName"=>$memInfo["memName"],"memPsw"=>$memInfo["memPsw"],"memPic"=>$memInfo["memPic"],"memPoint"=>$memInfo["memPoint"],"memStatus"=>$memInfo["memStatus"],"memTagNo"=>$memInfo["memTagNo"]];
        echo json_encode($memberRow);
    }else{
        echo "error";
    }
}catch(PDOException $e){
    echo "錯誤訊息: ".$e->getMessage();
}
?>