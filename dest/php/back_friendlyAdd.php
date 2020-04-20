<?php

$errMsg = "";

try{
    require_once("connectDB.php");
    
    if( $_FILES["friendlyPic"]["error"] == UPLOAD_ERR_OK){
    $sql= "INSERT INTO `petfriendly` (
    friendlyNo, friendlyName, friendlyTypeNo, friendlyLocNo, friendlyTel, friendlyAddress, friendlylat, friendlylng,
    friendlyIntro_1, friendlyIntro_2, friendlyIntro_3, friendlyIntro_4, friendlyStatus, friendlyTypeName) values(
    :friendlyNo, :friendlyName, :friendlyTypeNo, :friendlyLocNo,:friendlyTel, :friendlyAddress, :friendlylat, :friendlylng,
    :friendlyIntro_1, :friendlyIntro_2, :friendlyIntro_3, :friendlyIntro_4, 1, :friendlyTypeName)";
   
	$friend= $pdo->prepare($sql);
    $friend->bindValue(":friendlyNo", $_POST["friendlyNo"]);
    $friend->bindValue(":friendlyName", $_POST["friendlyName"]);
    $friend->bindValue(":friendlyTypeNo", $_POST["friendlyTypeNo"]);
    $friend->bindValue(":friendlyLocNo", $_POST["friendlyLocNo"]);
    $friend->bindValue(":friendlyTel", $_POST["friendlyTel"]);
    $friend->bindValue(":friendlyAddress", $_POST["friendlyAddress"]);
    $friend->bindValue(":friendlylat", $_POST["friendlylat"]);
    $friend->bindValue(":friendlylng", $_POST["friendlylng"]);
	$friend->bindValue(":friendlyIntro_1", $_POST["friendlyIntro_1"]);
	$friend->bindValue(":friendlyIntro_2", $_POST["friendlyIntro_2"]);
	$friend->bindValue(":friendlyIntro_3", $_POST["friendlyIntro_3"]);
    $friend->bindValue(":friendlyIntro_4", $_POST["friendlyIntro_4"]);
    // $friend->bindValue(":friendlyStatus", 1);
    $friend->bindValue(":friendlyTypeName", $_POST["friendlyTypeName"]);
    $friend->execute();

    //取得自動創號的key值
    // $lostPetRpNo = $pdo->lastInsertId();
    $friendlyNo = $_POST["friendlyNo"];

    //先檢查images資料夾存不存在
	if( file_exists("../img/map_friendly/")==false){
		mkdir("../img/map_friendly/");
	}
		//將檔案copy到要放的路徑
		$fileInfoArr = pathinfo($_FILES["friendlyPic"]["name"]);
		$fileName = "{$friendlyNo}.{$fileInfoArr["extension"]}";

		$from = $_FILES["friendlyPic"]["tmp_name"];
		$to = "../img/map_friendly/$fileName";
		if(copy( $from, $to)===true){
			//將檔案名稱寫回資料庫
			$sql = "update petfriendly set friendlyPic = :friendlyPic where friendlyNo = $friendlyNo";
			$friend = $pdo->prepare($sql);
			$friend -> bindValue(":friendlyPic", $fileName);
			$friend -> execute();
			echo "新增成功!";
		}
	}else{
		echo "錯誤代碼 : {$_FILES["friendlyPic"]["error"]} <br>";
		echo "新增失敗<br>";
    }

}
catch(PDOException $e) {
	$errMsg .= "錯誤原因 : ".$e -> getMessage(). "<br>";
	$errMsg .= "錯誤行號 : ".$e -> getLine(). "<br>";	
}
echo $errMsg;
?>