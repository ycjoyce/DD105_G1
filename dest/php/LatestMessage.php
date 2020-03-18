<?php
session_start();
require_once("./connectDB.php");

//找此會員跟所有寄件人的最新一筆
$sql= "select * from message where msgNo in (select max(msgNo) from message where getmemno='{$_SESSION["memNo"]}' or sendmemno='{$_SESSION["memNo"]}' group by concat(if(sendmemno='{$_SESSION["memNo"]}',sendmemno,getmemno),',',if(getmemno='{$_SESSION["memNo"]}',sendmemno,getmemno))) order by msgNo;";
$msg= $pdo->query($sql);
$msgRows= $msg->fetchAll(PDO::FETCH_ASSOC);

if($msg->rowCount()==0){
    echo "notFound";
}else{
    $xml='<?xml version="1.0"?>';
    $xml.= "<members>";//根元素
    foreach($msgRows as $i => $msgRow){
        $xml.= "<member>";
            $xml.= "<myMemNo>{$_SESSION["memNo"]}</myMemNo>";
            $xml.= "<sendMemNo>{$msgRow['sendMemNo']}</sendMemNo>";
            $xml.= "<getMemNo>{$msgRow['getMemNo']}</getMemNo>";
            $xml.= "<msgTime>{$msgRow['msgTime']}</msgTime>";
            $xml.= "<msgText>{$msgRow['msgText']}</msgText>";
            $xml.= "<msgPic>{$msgRow['msgPic']}</msgPic>";
            $xml.= "<readOrNot>{$msgRow['readOrNot']}</readOrNot>";
                //是別人寄給我的話
                $sql= "select * from `memInfo` where memNo='{$msgRow['sendMemNo']}'";
                $sendMem= $pdo->query($sql);
                $sendMemRow= $sendMem->fetch(PDO::FETCH_ASSOC);
            $xml.= "<sendMemName>{$sendMemRow['memName']}</sendMemName>";
            $xml.= "<sendMemPic>{$sendMemRow['memPic']}</sendMemPic>";
                //是我寄給別人的話
                $sql= "select * from `memInfo` where memNo='{$msgRow['getMemNo']}'";
                $getMem= $pdo->query($sql);
                $getMemRow= $getMem->fetch(PDO::FETCH_ASSOC);
            $xml.= "<getMemName>{$getMemRow['memName']}</getMemName>";
            $xml.= "<getMemPic>{$getMemRow['memPic']}</getMemPic>";
        $xml.= "</member>";
    }
    $xml.= "</members>";
    header("Content-Type:text/xml");
    echo $xml;    
}
?>