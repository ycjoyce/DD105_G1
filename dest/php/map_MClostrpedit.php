<?php

try{
    require_once("./connectDB.php");

    $sql= "update `lostpetreport` set
    lostPetRpName = :lostPetRpName,
    lostPetRpCh = :lostPetRpCh,
    lostPetRpLoc = :lostPetRpLoc,
    lostPetRpLDate = :lostPetRpLDate,
    lostPetRpType = :lostPetRpType,
	lostPetRpStat = :lostPetRpStat,
	lostPetRpLoclat = :lostPetRpLoclat,
	lostPetRpLoclng = :lostPetRpLoclng,
	lostPetRpLocAdd = :lostPetRpLocAdd
	where lostPetRpNo= :lostPetRpNo";
	
	// 
    // ,lostPetRpImg = null
	$lostRp= $pdo->prepare($sql);
    $lostRp->bindValue(":lostPetRpName", $_POST["lostPetRpName"]);
    $lostRp->bindValue(":lostPetRpCh", $_POST["lostPetRpCh"]);
    $lostRp->bindValue(":lostPetRpLoc", $_POST["lostPetRpLoc"]);
    $lostRp->bindValue(":lostPetRpLDate", $_POST["lostPetRpLDate"]);
    $lostRp->bindValue(":lostPetRpType", $_POST["lostPetRpType"]);
	$lostRp->bindValue(":lostPetRpStat", $_POST["lostPetRpStat"]);
	$lostRp->bindValue(":lostPetRpLoclat", $_POST["lostPetRpLoclat"]);
	$lostRp->bindValue(":lostPetRpLoclng", $_POST["lostPetRpLoclng"]);
	$lostRp->bindValue(":lostPetRpLocAdd", $_POST["lostPetRpLocAdd"]);	
	$lostRp->bindValue(":lostPetRpNo", $_POST["lostPetRpNo"]);
	// $lostRp->bindValue(":lostPetRpImg", null);
    $lostRp->execute();


    //先檢查images資料夾存不存在
		// if( file_exists("../img/lostrp/")==false){
		// 	mkdir("../img/lostrp/");
		// }
		// //將檔案copy到要放的路徑
		// $fileInfoArr = pathinfo($_FILES["lostPetRpImg"]["name"]);
		// $fileName = "{$lostPetRpNo}.{$fileInfoArr["extension"]}";

		// $from = $_FILES["lostPetRpImg"]["tmp_name"];
		// $to = "../img/lostrp/$fileName";
		// if(copy( $from, $to)===true){
		// 	//將檔案名稱寫回資料庫
		// 	$sql = "update lostpetreport set lostPetRpImg = :lostPetRpImg where lostPetRpNo = $lostPetRpNo";
		// 	$lostRp = $pdo->prepare($sql);
		// 	$lostRp -> bindValue(":lostPetRpImg", $fileName);
		// 	$lostRp -> execute();
		// 	echo "新增成功!";
		// 	$pdo->commit();
		// }else{
		// 	$pdo->rollBack();
		// }

		// }else{
		// 	echo "錯誤代碼 : {$_FILES["lostPetRpImg"]["error"]} <br>";
		// 	echo "新增失敗<br>";
		// }
    if(!isset($lostRp)){
        echo "error";
    }else{
        echo "ok";
    }
}catch(PDOException $e){
	echo "錯誤訊息: ".$e->getMessage();
	echo "錯誤行號 : " . $e->getLine() . "<br>";
	
}
?>
