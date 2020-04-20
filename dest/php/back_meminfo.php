<?php
try{
  require_once("./connectDB.php");
  $sql= "select * from `memInfo`;";
  $member= $pdo->query($sql);
  
    if($member->rowCount()==0){
    echo "notFound";
    }else{
        $memList= [];
        while($memRow= $member->fetch(PDO::FETCH_ASSOC)){
            $memList[]= array("memNo" => $memRow["memNo"] , "memId" => $memRow["memId"] , "memName" => $memRow["memName"] , "memPic" => $memRow["memPic"] , "memPoint" => $memRow["memPoint"] , "memStatus" => $memRow["memStatus"] , "memTagNo" => $memRow["memTagNo"]) ;
        }
        echo json_encode($memList);

    }
}catch(PDOException $e){
  echo "錯誤行號: ".$e->getline()."<br>";
  echo "錯誤訊息: ".$e->getMessage()."<br>";
  echo "系統無法連線";
}
?>