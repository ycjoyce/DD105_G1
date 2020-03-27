<?php
    $filepath = '../img/customized_collar/orderRecord/';
    if (file_exists($filepath) === false) {
        mkdir($filepath);
    }
    $imgDataStr = $_POST['image'];
    // $imgDataStr = str_replace('data:image/png;base64,', '', $imgDataStr);
    // $imgDataStr = str_replace(' ', '+', $imgDataStr);
    // $data = base64_decode($imgDataStr);

    $imgDataStr = explode(";", $imgDataStr)[1];
    $imgDataStr = explode(",", $imgDataStr)[1];
    $imgDataStr = str_replace(" ", "+", $imgDataStr);

    $data = base64_decode($imgDataStr);
    $newName = date("Ymd");  //或time()
    $file = $filepath . $newName . ".png";
    $success = file_put_contents($file,$data);
?>