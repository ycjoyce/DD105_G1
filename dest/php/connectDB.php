<?php
    $host='localhost';
    $dbname='test';
    $dsn= "mysql:host=$host;port=3306;dbname=$dbname;charset=utf8";
    $user= "root";
    $password= "0000";
    $options= array(PDO::ATTR_ERRMODE=>PDO::ERRMODE_EXCEPTION, PDO::ATTR_CASE=>PDO::CASE_NATURAL);
    $pdo= new PDO($dsn, $user, $password, $options);
?>