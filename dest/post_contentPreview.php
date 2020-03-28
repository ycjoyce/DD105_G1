<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <!-- 頁籤標題 -->
    <title>毛孩交流區</title>
<link rel="icon" href="img/logo.ico" type="image/x-icon">

<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.4.1/jquery.js"></script>

    <!-- title: 本頁名稱 -->
    <link rel="stylesheet" href="./css/post_contentPreview.css">
</head>
<body>
    <?php
    session_start();
    if(isset($_SESSION["memId"])){
        $errMsg = "";
        try {
            require_once("./php/connectDB.php");
            $pdo->beginTransaction();
            // 取得上傳檔案數量
            $fileCount = count($_FILES['upFile']['name']);
            echo "fileCount = ", $fileCount, "<br>";
            // INSERT INTO postinfo ( memNo, piTitle,  piGeneralContent,
    		// 	   piTitlePic, piTitleContent, piFloatLeftPic, piFloatLeftContent, piFloatRightPic, piFloatRightContent,
            //        piTime, piStatus)
            // values('2', '測試title2', '',
            //        '', 'block1內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容',
            //        '', 'block2內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容',
            //        '', 'block3內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容',
            //        now(), '0' );
            $sql = "INSERT INTO postinfo ( memNo, piTitle, piGeneralContent,
    			   piTitlePic, piTitleContent, piFloatLeftPic, piFloatLeftContent, piFloatRightPic, piFloatRightContent,
                   piTime, piStatus)
            values('{$_SESSION["memNo"]}', :piTitle, :piGeneralContent,
                   '', :piTitleContent, '', :piFloatLeftContent, '', :piFloatRightContent,
                   now(), '0' )";  // :piGeneralContent,
            // $sql = "INSERT INTO `products` (`psn`, `pname`, `price`, `author`, `pages`, `image`) values(null, :pname, :price, :author, :pages, '' )";
            $products = $pdo->prepare( $sql );
            $products -> bindValue(":piTitle", $_POST["piTitle"]);
            $products -> bindValue(":piGeneralContent", $_POST["piGeneralContent"]);
            $products -> bindValue(":piTitleContent", $_POST["piTitleContent"]);
            $products -> bindValue(":piFloatLeftContent", $_POST["piFloatLeftContent"]);
            $products -> bindValue(":piFloatRightContent", $_POST["piFloatRightContent"]);
            $products -> execute();
                //取得自動創號的key值
            $piNo = $pdo->lastInsertId();

            foreach ($_FILES["upFile"]["error"] as $i => $errorCode) {
           //.......確定是否上傳成功
            if( $_FILES["upFile"]["error"][$i] == UPLOAD_ERR_OK){
                //先檢查images資料夾存不存在
                if( file_exists("img") === false){
                    mkdir("img");
                }
                //將檔案copy到要放的路徑
                // $fileInfoArr = pathinfo($_FILES["upFile"]["name"][$i]);
                // $fileName = "{$psn}.{$fileInfoArr["extension"]}";  //8.gif
                $fileName = "{$_FILES['upFile']['name'][$i]}";
                $from = $_FILES["upFile"]["tmp_name"][$i];
                $to = "img/postarticleregion/$fileName";
                    if(copy( $from, $to)===true){
                    //將檔案名稱寫回資料庫
                    // update postinfo set piTitlePic='11.jpg', piFloatLeftPic='12.jpg', piFloatRightPic='13.jpg' where piNo = 1;
                    // $sql = "update postinfo set piTitlePic = :piTitlePic where piNo = $piNo";
                }else{
                    $pdo->rollBack();
                }
            }else{
                echo "錯誤代碼 : {$_FILES["upFile"]["error"][$i]} <br>";
                echo "新增失敗<br>";
            }
        }//foreach

            $sql = "update postinfo set piTitlePic = :piTitlePic, piFloatLeftPic=:piFloatLeftPic, piFloatRightPic=:piFloatRightPic where piNo = $piNo";
            // $sql = "update products set image = :image where psn = 7";

            $fileLocation0 = "img/postarticleregion/{$_FILES['upFile']['name'][0]}";
            // $fileLocation0 = "img/postarticleregion/{$_FILES['upFile']['name'][0]}";
            $fileLocation1 = "img/postarticleregion/{$_FILES['upFile']['name'][1]}";
            $fileLocation2 = "img/postarticleregion/{$_FILES['upFile']['name'][2]}";
            $products = $pdo->prepare($sql);
            $products -> bindValue(":piTitlePic", $fileLocation0);
            $products -> bindValue(":piFloatLeftPic", $fileLocation1);
            $products -> bindValue(":piFloatRightPic", $fileLocation2);
            $products -> execute();


            echo $fileLocation0, "<br>";
            echo $fileLocation1, "<br>";
            echo $fileLocation2, "<br>";
            // echo $fileName, "<br>";
            echo "新增成功~";
            $pdo->commit();
            header("Location:./post_article_region.php");
        } catch (PDOException $e) {
            // $pdo->rollBack();
            $errMsg .= "錯誤原因 : ".$e -> getMessage(). "<br>";
            $errMsg .= "錯誤行號 : ".$e -> getLine(). "<br>";
        }
        echo $errMsg;
    }else{
        echo "{}";
    }
    ?>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/2.1.0/jquery.min.js"></script>
    <script src="./js/post_content.js"></script>
    <script src="./js/post_article_region.js"></script>
    <script src="./js/hamburger.js"></script>
    <script src="./js/header_slide.js"></script>
    <script src="./js/signInOut.js"></script>
</body>
</html>
