<?php
try {
	require_once("./connectDB.php");
	
	$sql = "select * from `manager` where managerAccount = :managerAccount and managerPsw = :managerPsw;";
	$manager = $pdo->prepare($sql);
	$manager->bindValue(":managerAccount", $_POST["managerAccount"]);
	$manager->bindValue(":managerPsw", $_POST["managerPsw"]);
	$manager->execute();
// if(isset($_POST["managerAccount"])){echo "true";}else{echo "NO";}
if( $manager->rowCount() == 0){
	$manage = "沒查詢到該帳號密碼";
	echo json_encode($manage);

}else{
	 $managerRow = $manager->fetch(PDO::FETCH_ASSOC);
	 session_start();
	 $_SESSION["managerNo"] = $managerRow["managerNo"] ;
	 $_SESSION["managerAccount"] = $managerRow["managerAccount"] ;
	 $_SESSION["managerPsw"] = $managerRow["managerPsw"] ;
	 $_SESSION["managerName"] = $managerRow["managerName"] ;
	 $_SESSION["managerStatus"] = $managerRow["managerStatus"] ;
	
$manage = ["managerNo" => $_SESSION["managerNo"] , "managerAccount" => $_SESSION["managerAccount"] , "managerPsw" => $_SESSION["managerPsw"] , "managerName" => $_SESSION["managerName"] , "managerStatus" => $_SESSION["managerStatus"]];
echo json_encode($manage) ;
}


} catch (PDOException $e) {
	echo "錯誤行號 : " . $e->getLine() . "<br>";
	echo "錯誤訊息 : " . $e->getMessage() . "<br>";
}
?>
