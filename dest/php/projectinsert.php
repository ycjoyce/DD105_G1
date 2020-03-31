<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <?php
    session_start();
    $memNo = $_SESSION['memNo'];
    $errMsg = "";
    try{

        require_once("connectDB.php");
        // $pdo->beginTransaction();
        // 確定是否上傳成功

        if($_FILES["upFile"]["error"] == UPLOAD_ERR_OK){
            
            // $sql = "INSERT INTO `fundraising` (`fundNo`, `fundTitle`, `fundImg`) values(null, :fundTitle, '' )";
            $sql = "INSERT INTO `fundraising` (`fundName`, `memNo`, `fundTitle`, `fundImg`, `fundArticleImg1`, `fundArticleImg2`, `fundArticleImg3`, `fundStartDate`, `fundEndDate`, `fundGoal`, `fundNowAmount`, `fundAttendPeople`,`fundStatus`) 
            values(:fundName, :memNo,:fundTitle, ' ', ' ', ' ', ' ', now(),  DATE_ADD(now(), INTERVAL 100 DAY)   , :fundGoal, 0, 0, 1)";
            $fundraising = $pdo -> prepare( $sql );
            // $fundraising -> bindValue(":fundContent", $_POST["fundContent"]);
            $fundraising -> bindValue(":fundName", $_REQUEST["fundName"]);
            $fundraising -> bindValue(":memNo", $memNo);
            $fundraising -> bindValue(":fundTitle", $_REQUEST["fundTitle"]);
            $fundraising -> bindValue(":fundGoal", $_REQUEST["fundGoal"]);
            $fundraising -> execute();

            //取得自動創號的key值
            $fundNo = $pdo->lastInsertId();
            // $memNo = $pdo->lastInsertId();
            
            //檢查img資料夾是否存在
            if(file_exists("../img/donation/projectImg") === false){
                mkdir("../img/donation/projectImg");
            }
            //將檔案複製到存放的路徑
            $fileInfoArr = pathinfo($_FILES["upFile"]["name"]);           
            $fileName = "{$fundNo}_fundImg.{$fileInfoArr["extension"]}"; 
            
            
            $from = $_FILES["upFile"]["tmp_name"];
            $to = "../img/donation/projectImg/$fileName";
            
            if(copy($from, $to) === true){
                //將檔案名稱寫回資料庫
                $sql = "update fundraising set fundImg = :fundImg where fundNo = $fundNo";
                $fundraising = $pdo->prepare($sql);
                $fundraising -> bindValue(":fundImg", $fileName);
                $fundraising -> execute();
                // echo "新增成功~";
                // $pdo->commit();

            // }else{
            //     $pdo->rollBack();
            }

        }else{
            echo "錯誤代碼 : {$_FILES["upFile"]["error"]} <br>";
            echo "新增失敗<br>";
        }

        if($_FILES["upFile1"]["error"] == UPLOAD_ERR_OK && $_FILES["upFile2"]["error"] == UPLOAD_ERR_OK && $_FILES["upFile3"]["error"] == UPLOAD_ERR_OK){
            if(file_exists("../img/donation/projectImg") === false){
                mkdir("../img/donation/projectImg");
            }
            $from1 = $_FILES["upFile1"]["tmp_name"];
            $from2 = $_FILES["upFile2"]["tmp_name"];
            $from3 = $_FILES["upFile3"]["tmp_name"];

            $fileInfoArr1 = pathinfo($_FILES["upFile1"]["name"]);   
            $fileInfoArr2 = pathinfo($_FILES["upFile2"]["name"]);   
            $fileInfoArr3 = pathinfo($_FILES["upFile3"]["name"]); 
            $fileName1 = "{$fundNo}_fundArticleImg1.{$fileInfoArr1["extension"]}"; 
            $fileName2 = "{$fundNo}_fundArticleImg2.{$fileInfoArr2["extension"]}"; 
            $fileName3 = "{$fundNo}_fundArticleImg3.{$fileInfoArr3["extension"]}"; 
            
            $to1 = "../img/donation/projectImg/$fileName1";
            $to2 = "../img/donation/projectImg/$fileName2";
            $to3 = "../img/donation/projectImg/$fileName3";

            copy($from1,$to1);
            copy($from2,$to2);
            copy($from3,$to3);


            $sql = "update fundraising set fundArticleImg1 = :fundArticleImg1 , fundArticleImg2 = :fundArticleImg2, fundArticleImg3 = :fundArticleImg3 where fundNo = $fundNo";
                $fundraising = $pdo->prepare($sql);
                $fundraising -> bindValue(":fundArticleImg1", $fileName1);
                $fundraising -> bindValue(":fundArticleImg2", $fileName2);
                $fundraising -> bindValue(":fundArticleImg3", $fileName3);
                $fundraising -> execute();
                
                header("Location: http://140.115.236.71/demo-projects/DD105/DD105G1/raisedonation.html"); 
                
                // $pdo->commit();
        }else{
            echo "錯誤代碼 : {$_FILES["upFile1"]["error"]}<br>";
            echo "新增失敗<br>";
        }

        // if(isset($memNo)){
        //     $sql = "update meminfo set memPoint = :memPoint + 300  where memNo = $memNo";
        //     $fundraising  = $pdo->prepare($sql);
        //     $fundraising -> bindValue(":memNo", $memNo);
        //     $fundraising -> bindValue(":memPoint", $_REQUEST["memPoint"]);
        //     $fundraising -> execute();
        // }else{
        //     echo "錯誤代碼 :<br>";
        // }

    
        

    } catch (PDOException $e) {
        // $pdo->rollBack();
        $errMsg .= "錯誤原因 : ".$e -> getMessage(). "<br>";
        $errMsg .= "錯誤行號 : ".$e -> getLine(). "<br>";	
    }
    echo $errMsg;
    ?>

    <?php 

    
    exit;
    ?>


}
    
    
</body>
</html>