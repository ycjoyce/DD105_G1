<?php
    $dbname='dd105';
    $dsn= "mysql:host=localhost;port=3306;dbname=$dbname;charset=utf8";
    $user= "root";
<<<<<<< HEAD
    $password= "root";
=======
    $password= "0000";
>>>>>>> 02bf0ba3ee70c8db161864b5020e0c5978b5eea6
    $options= array(PDO::ATTR_ERRMODE=>PDO::ERRMODE_EXCEPTION, PDO::ATTR_CASE=>PDO::CASE_NATURAL);
    $pdo= new PDO($dsn, $user, $password, $options);
?>