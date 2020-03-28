<?php

try{
    require_once("./connectDB.php");

    //如果有圖片
    if(isset($_FILES["lostPetRpImg"])){
        switch($_FILES["lostPetRpImg"]["error"]){
			case 0:
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
		
				$update= $pdo->prepare($sql);
				$update->bindValue(":lostPetRpName", $_POST["lostPetRpName"]);
				$update->bindValue(":lostPetRpCh", $_POST["lostPetRpCh"]);
				$update->bindValue(":lostPetRpLoc", $_POST["lostPetRpLoc"]);
				$update->bindValue(":lostPetRpLDate", $_POST["lostPetRpLDate"]);
				$update->bindValue(":lostPetRpType", $_POST["lostPetRpType"]);
				$update->bindValue(":lostPetRpStat", $_POST["lostPetRpStat"]);
				$update->bindValue(":lostPetRpLoclat", $_POST["lostPetRpLoclat"]);
				$update->bindValue(":lostPetRpLoclng", $_POST["lostPetRpLoclng"]);
				$update->bindValue(":lostPetRpLocAdd", $_POST["lostPetRpLocAdd"]);	
				$update->bindValue(":lostPetRpNo", $_POST["lostPetRpNo"]);
                $updateLost= $update->execute();

                if(isset($updateLost)){
                    //取出遺失編號
                    $updateNo= $_POST["lostPetRpNo"];
                    //把圖存起來，用會員編號命名
                    if(file_exists("../img/lostrp/")==false){
                        mkdir("../img/lostrp/");
                    }
                    $from= $_FILES["lostPetRpImg"]["tmp_name"];
                    //取得檔案副檔名
                    $info= pathinfo($_FILES["lostPetRpImg"]["name"]);
                    $ext= $info["extension"];
                    $to= "../img/lostrp/$updateNo.$ext";
                    copy($from,$to);
                    //把新的命名存入資料庫
                    $newName= "$updateNo.$ext";
                    $sql= "update `lostpetreport` set lostPetRpImg = '$newName' where lostPetRpNo = '$updateNo';";
                    $imgName= $pdo->prepare($sql);
                    $imgName->execute();
                }
                // $_SESSION["memPic"]= $newName;
                // $_SESSION["memName"]= $_REQUEST["memName"];
                // $_SESSION["memPsw"]= $_REQUEST["memPsw"];
                echo "ok";
                break;
            case 1:
                echo "檔案太大，上傳檔案大小不可超過2M";
                break;
            case 3:
                echo "檔案不完整，請重新上傳";
                break;
            case 4:
                echo "未選檔案，請重新上傳";
                break;
            default: 
                echo "上傳失敗，請重新上傳";
        }    
    }
    //如果沒有圖片
		else{
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
		
		$update= $pdo->prepare($sql);
		$update->bindValue(":lostPetRpName", $_POST["lostPetRpName"]);
		$update->bindValue(":lostPetRpCh", $_POST["lostPetRpCh"]);
		$update->bindValue(":lostPetRpLoc", $_POST["lostPetRpLoc"]);
		$update->bindValue(":lostPetRpLDate", $_POST["lostPetRpLDate"]);
		$update->bindValue(":lostPetRpType", $_POST["lostPetRpType"]);
		$update->bindValue(":lostPetRpStat", $_POST["lostPetRpStat"]);
		$update->bindValue(":lostPetRpLoclat", $_POST["lostPetRpLoclat"]);
		$update->bindValue(":lostPetRpLoclng", $_POST["lostPetRpLoclng"]);
		$update->bindValue(":lostPetRpLocAdd", $_POST["lostPetRpLocAdd"]);	
		$update->bindValue(":lostPetRpNo", $_POST["lostPetRpNo"]);
		$fine= $update->execute();
        if(isset($fine)){
            echo "ok";
        }else{
            echo "error";
        }        
    }
}catch(PDOException $e){
    echo "錯誤訊息: ".$e->getMessage()."<br>";
}







// try{
//     require_once("./connectDB.php");

//     $sql= "update `lostpetreport` set
//     lostPetRpName = :lostPetRpName,
//     lostPetRpCh = :lostPetRpCh,
//     lostPetRpLoc = :lostPetRpLoc,
//     lostPetRpLDate = :lostPetRpLDate,
//     lostPetRpType = :lostPetRpType,
// 	lostPetRpStat = :lostPetRpStat,
// 	lostPetRpLoclat = :lostPetRpLoclat,
// 	lostPetRpLoclng = :lostPetRpLoclng,
// 	lostPetRpLocAdd = :lostPetRpLocAdd
// 	where lostPetRpNo= :lostPetRpNo";
	
// 	$lostRp= $pdo->prepare($sql);
//     $lostRp->bindValue(":lostPetRpName", $_POST["lostPetRpName"]);
//     $lostRp->bindValue(":lostPetRpCh", $_POST["lostPetRpCh"]);
//     $lostRp->bindValue(":lostPetRpLoc", $_POST["lostPetRpLoc"]);
//     $lostRp->bindValue(":lostPetRpLDate", $_POST["lostPetRpLDate"]);
//     $lostRp->bindValue(":lostPetRpType", $_POST["lostPetRpType"]);
// 	$lostRp->bindValue(":lostPetRpStat", $_POST["lostPetRpStat"]);
// 	$lostRp->bindValue(":lostPetRpLoclat", $_POST["lostPetRpLoclat"]);
// 	$lostRp->bindValue(":lostPetRpLoclng", $_POST["lostPetRpLoclng"]);
// 	$lostRp->bindValue(":lostPetRpLocAdd", $_POST["lostPetRpLocAdd"]);	
// 	$lostRp->bindValue(":lostPetRpNo", $_POST["lostPetRpNo"]);
//     $lostRp->execute();


//     //先檢查images資料夾存不存在
// 		// if( file_exists("../img/lostrp/")==false){
// 		// 	mkdir("../img/lostrp/");
// 		// }
// 		// //將檔案copy到要放的路徑
// 		// $fileInfoArr = pathinfo($_FILES["lostPetRpImg"]["name"]);
// 		// $fileName = "{$lostPetRpNo}.{$fileInfoArr["extension"]}";

// 		// $from = $_FILES["lostPetRpImg"]["tmp_name"];
// 		// $to = "../img/lostrp/$fileName";
// 		// if(copy( $from, $to)===true){
// 		// 	//將檔案名稱寫回資料庫
// 		// 	$sql = "update lostpetreport set lostPetRpImg = :lostPetRpImg where lostPetRpNo = $lostPetRpNo";
// 		// 	$lostRp = $pdo->prepare($sql);
// 		// 	$lostRp -> bindValue(":lostPetRpImg", $fileName);
// 		// 	$lostRp -> execute();
// 		// 	echo "新增成功!";
// 		// 	$pdo->commit();
// 		// }else{
// 		// 	$pdo->rollBack();
// 		// }

// 		// }else{
// 		// 	echo "錯誤代碼 : {$_FILES["lostPetRpImg"]["error"]} <br>";
// 		// 	echo "新增失敗<br>";
// 		// }
//     if(!isset($lostRp)){
//         echo "error";
//     }else{
//         echo "ok";
//     }
// }catch(PDOException $e){
// 	echo "錯誤訊息: ".$e->getMessage();
// 	echo "錯誤行號 : " . $e->getLine() . "<br>";
	
// }
?>
