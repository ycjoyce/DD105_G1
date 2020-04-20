<?php
try{
    require_once("./connectDB.php");
    $sql= "select * from `postinfo` order by pino desc limit 0,8;";
    $latestPosts= $pdo->query($sql);

    if($latestPosts->rowCount()!=0){
        $postList=[];
        while($latestPost= $latestPosts->fetch(PDO::FETCH_ASSOC)){
            $postList[]= array("piNo" => $latestPost["piNo"] ,"piTitle" => $latestPost["piTitle"] , "piGeneralContent" => $latestPost["piGeneralContent"] , "piTime" => $latestPost["piTime"] , "piTitlePic" => $latestPost["piTitlePic"]) ;
        }
        echo json_encode($postList);
    }else{
        echo "error";
    }
}catch(PDOException $e){
    echo "錯誤訊息: ".$e->getMessage();
}
?>