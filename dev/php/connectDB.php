<?php
    $dbname='dd105';
    $dsn= "mysql:host=localhost;port=3306;dbname=$dbname;charset=utf8";
    $user= "root";
    $password= "942jongkey";
    $options= array(PDO::ATTR_ERRMODE=>PDO::ERRMODE_EXCEPTION, PDO::ATTR_CASE=>PDO::CASE_NATURAL);
    $pdo= new PDO($dsn, $user, $password, $options);
?> 