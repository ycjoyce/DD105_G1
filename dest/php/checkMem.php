<?php
session_start();
if(isset($_SESSION["memId"])){
    $member= ["memNo"=>$_SESSION["memNo"],"memId"=>$_SESSION["memId"],"memName"=>$_SESSION["memName"],"memPsw"=>$_SESSION["memPsw"],"memPic"=>$_SESSION["memPic"],"memPoint"=>$_SESSION["memPoint"],"memStatus"=>$_SESSION["memStatus"],"memTagNo"=>$_SESSION["memTagNo"]];
    echo json_encode($member);
}else{
    echo "{}";
}
?>