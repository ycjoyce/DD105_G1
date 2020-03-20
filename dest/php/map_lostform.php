<?php

$errMsg = "";

try{
    require_once("connectDB.php");
    $pdo->beginTransaction();
    //.......確定是否上傳成功
    
    if( $_FILES["lostPetRpImg"]["error"] == UPLOAD_ERR_OK){

    $sql= "INSERT INTO `lostpetreport` (lostPetRpName, lostPetRpCh, lostPetRpLoc, lostPetRpLDate, lostPetRpType, lostPetRpStat, lostPetRpImg) values(:lostPetRpName, :lostPetRpCh, :lostPetRpLoc, :lostPetRpLDate, :lostPetRpType,:lostPetRpStat, null)";
   
    $lostRp= $pdo->prepare($sql);
    $lostRp->bindValue(":lostPetRpName", $_POST["lostPetRpName"]);
    $lostRp->bindValue(":lostPetRpCh", $_POST["lostPetRpCh"]);
    $lostRp->bindValue(":lostPetRpLoc", $_POST["lostPetRpLoc"]);
    $lostRp->bindValue(":lostPetRpLDate", $_POST["lostPetRpLDate"]);
    $lostRp->bindValue(":lostPetRpType", $_POST["lostPetRpType"]);    
    $lostRp->bindValue(":lostPetRpStat", $_POST["lostPetRpStat"]);
    // $lostRp->bindValue(":lostPetRpImg", $_FILES["lostPetRpImg"]["name"]);
    $lostRp->execute();

    //取得自動創號的key值
    $lostPetRpNo = $pdo->lastInsertId();

    //先檢查images資料夾存不存在
	if( file_exists("../img/lostrp/")==false){
		mkdir("../img/lostrp/");
	}
		//將檔案copy到要放的路徑
		$fileInfoArr = pathinfo($_FILES["lostPetRpImg"]["name"]);
		$fileName = "{$lostPetRpNo}.{$fileInfoArr["extension"]}";

		$from = $_FILES["lostPetRpImg"]["tmp_name"];
		$to = "../img/lostrp/$fileName";
		if(copy( $from, $to)===true){
			//將檔案名稱寫回資料庫
			$sql = "update lostpetreport set lostPetRpImg = :lostPetRpImg where lostPetRpNo = $lostPetRpNo";
			$lostRp = $pdo->prepare($sql);
			$lostRp -> bindValue(":lostPetRpImg", $fileName);
			$lostRp -> execute();
			echo "新增成功!";
			$pdo->commit();
		}else{
			$pdo->rollBack();
		}

	}else{
		echo "錯誤代碼 : {$_FILES["lostPetRpImg"]["error"]} <br>";
		echo "新增失敗<br>";
    }
}
catch(PDOException $e) {
	$pdo->rollBack();
	$errMsg .= "錯誤原因 : ".$e -> getMessage(). "<br>";
	$errMsg .= "錯誤行號 : ".$e -> getLine(). "<br>";	
}
echo $errMsg;

?>