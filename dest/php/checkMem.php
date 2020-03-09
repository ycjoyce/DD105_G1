<?php
session_start();
if(session_id()!=null){
    echo "true|";
    echo $_SESSION["memId"];
}else{
    echo "notFound";
}
?>