<?php

try{
    // require("phpsqlajax_dbinfo.php");
    require_once('./connectDB.php');

    $sql= "select * from `petfriendly`";
    // where `friendlyTypeNo` in :friendlyTypes
    // and   `friendlyLocNo` = :friendlyLocNo"
    
    // $types = $pdo->prepare($sql);
    $types = $pdo->query($sql);

    // $types->bindValue(":friendlyTypes", implode(',', $_REQUEST['friendtypes']);
    // $types->bindValue(":friendlyLocNo", $_REQUEST['fr_area']);
    $types->execute();

    $typesRow = $types->fetchAll(PDO::FETCH_ASSOC);
    $result = json_encode($typesRow);
    echo ($result);
    //  var_dump

}catch(PDOException $e){
    echo "錯誤訊息:". $e->getMessage();
}
?>