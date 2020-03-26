<?php
try{
    require_once('./connectDB.php');

    $sql= "select * from `memInfo` where memId=:memId;";
    $checkMem= $pdo->prepare($sql);
    $checkMem->bindValue(':memId',$_REQUEST["signUpAccount"]);
    $checkMem->execute();

    $sql= "select * from `memInfo` where memName=:memName;";
    $checkName= $pdo->prepare($sql);
    $checkName->bindValue(':memName',$_REQUEST["signUpName"]);
    $checkName->execute();

    if($checkMem->rowCount()!=0){
        echo "此帳號已註冊";
    }else if($checkName->rowCount()!=0){
        echo "此暱稱已被使用";
    }else{
        $sql= "insert into `memInfo` (memId, memName, memPsw) values (:memId, :memName, :memPsw);";
        $addMem= $pdo->prepare($sql);
        $addMem->bindValue(':memId',$_REQUEST["signUpAccount"]);
        $addMem->bindValue(':memName',$_REQUEST["signUpName"]);
        $addMem->bindValue(':memPsw',$_REQUEST["signUpPsw"]);
        $addMem->execute();
    }

}catch(PDOException $e){
    echo "錯誤行號: ".$e->getLine()."<br>";
    echo "錯誤訊息: ".$e->getMessage()."<br>";
    echo "系統無法連線<br>";
}
?> 