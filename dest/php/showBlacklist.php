<?php
session_start();
try{
    require_once("./connectDB.php");
    $sql= "select m.memno memNo,m.memname memName,m.mempic memPic from `blacklist` b join `meminfo` m ".
          "on (b.blackmemno=m.memno) ".
          "where b.memno={$_SESSION['memNo']};";
    $blacklists= $pdo->query($sql);
    

    if($blacklists->rowCount()==0){
        echo "notFound";
    }else{
        $blackMem= [];
        while($blacklist= $blacklists->fetch(PDO::FETCH_ASSOC)){
            $blackMem[]= array("memName" => $blacklist["memName"] , "memPic" => $blacklist["memPic"] , "memNo" => $blacklist["memNo"]) ;
        }
        echo json_encode($blackMem);

    }
}catch(PDOException $e){
    echo "錯誤訊息: ".$e->getMessage();
}
?>