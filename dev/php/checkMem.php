<?php
session_start();
if(session_id()!=null){
    echo "true|";
    echo $_SESSION["memNo"]."|";
    echo $_SESSION["memId"]."|";
    echo $_SESSION["memName"]."|";
    echo $_SESSION["memPsw"]."|";
    echo $_SESSION["memPic"]."|";
    echo $_SESSION["memPoint"]."|";
    echo $_SESSION["memStatus"]."|";
    echo $_SESSION["memTagNo"]."|";
}else{
    echo "notFound";
}
?>