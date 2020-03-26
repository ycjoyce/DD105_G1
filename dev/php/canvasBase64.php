<?php

$filepath = '../img/customized_collar/canvas';
if (file_exists($filepath) === false) {
    mkdir($filepath);
}

$imgDataStr = $_POST['hidden_data'];
$imgDataStr = str_replace('data:image/png;base64,', '',$imgDataStr);
$data = base64_decode($imgDataStr);

$fileName = data("Ymd");

$file = $filepath . $fileName. ".png";
$success = file_put_contents($file,$data);

echo $success ? $file : 'error';
?>