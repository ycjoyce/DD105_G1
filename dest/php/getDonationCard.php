<?php
try{
    require_once("./connectDB.php");
    $sql="select * from `fundraising` order by (fundNowAmount / fundGoal) desc limit 0,3;";
    $leftCards=$pdo->query($sql);
    
    $content=[];
    while($leftCard= $leftCards->fetch(PDO::FETCH_ASSOC)){
        $content[]=array("fundNo"=>$leftCard["fundNo"],"fundTitle"=>$leftCard["fundTitle"],"fundImg"=>$leftCard["fundImg"],"fundStartDate"=>$leftCard["fundStartDate"],"fundGoal"=>$leftCard["fundGoal"],"fundNowAmount"=>$leftCard["fundNowAmount"]);
    }
    echo json_encode($content);
}catch(PDOException $e){
    echo "錯誤訊息：".$e->getMessage();
}
?>