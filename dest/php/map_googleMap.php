<?php

session_start();

try{
    require_once('./connectDB.php');

    $types = implode(',', $_REQUEST['friendtypes']);
    $sql= "select * from `petfriendly` where 
    `friendlyTypeNo` in :friendlyTypes and 
    `friendlyLocNo`= :friendlyLocNo;";
        
    $friendtypes = $pdo->prepare($sql);
    $friendtypes->execute($data1);

    $result = $friendtypes->fetchAll();
    print_r(var_dump($va));

}catch(PDOException $e){
    echo "錯誤訊息:". $e->getMessage();
}
?>