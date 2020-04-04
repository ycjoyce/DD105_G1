<?php
    $dbname='dd105g1';
    $dsn= "mysql:host=localhost;port=3306;dbname=$dbname;charset=utf8";
    $user= "dd105g1";
    $password= "dd105g1";
    $options= array(PDO::ATTR_ERRMODE=>PDO::ERRMODE_EXCEPTION, PDO::ATTR_CASE=>PDO::CASE_NATURAL);
    $pdo= new PDO($dsn, $user, $password, $options);
?> 