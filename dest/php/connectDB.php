<?php
    $dbname='dd105';
    $dsn= "mysql:host=localhost;port=3306;dbname=$dbname;charset=utf8";
    $user= "root";
<<<<<<< HEAD
    $password= "root";
=======
    $password= "ss890307";
>>>>>>> 45f9d0226123e8c07e1e46957e6088b878c9212c
    $options= array(PDO::ATTR_ERRMODE=>PDO::ERRMODE_EXCEPTION, PDO::ATTR_CASE=>PDO::CASE_NATURAL);
    $pdo= new PDO($dsn, $user, $password, $options);
?> 