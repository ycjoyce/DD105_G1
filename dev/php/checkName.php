<?php
try{
    require_once('./connectDB.php');

    $sql= "select * from `memInfo` where memName=:memName;";
    $checkName= $pdo->prepare($sql);
    $checkName->bindValue(':memName',$_REQUEST["memName"]);
    $checkName->execute();

    if($checkName->rowCount()!=0){
        echo "此暱稱已被使用";
    }else{
        echo "ok";
    }

}catch(PDOException $e){
    echo "錯誤行號: ".$e->getLine()."<br>";
    echo "錯誤訊息: ".$e->getMessage()."<br>";
    echo "系統無法連線<br>";
}
?> 