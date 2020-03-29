<?php

session_start();
$memno = $_SESSION["memNo"];

try{
    require_once("./connectDB.php");
    $sql= "select * from petfriendlyfav F, petfriendly P where F.friendlyNo = P.friendlyNo and memNo ='$memno'";
    $showFav = $pdo->query($sql);
    $showFav->execute();

    $showFavRow = $showFav->fetchAll(PDO::FETCH_ASSOC);
    $result = json_encode($showFavRow);
    echo ($result);

}catch(PDOException $e){
    echo "錯誤訊息: ".$e->getMessage();
}
?>