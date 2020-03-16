<?php
    session_start();
    try{
        require_once("./connectDB.php");
        // echo $_FILES["uploadImg"]["name"];
        switch($_FILES["uploadImg"]["error"]){
            case 0:
                $sql= "insert into `message` ".
                "(sendMemNo, getMemNo, msgTime, msgText, msgPic) ".
                "values ".
                "({$_SESSION['memNo']}, {$_REQUEST['getMemNo']}, date_format(now(),'%Y.%m.%d  %H:%i'), null, null);";
    
                $msgPic= $pdo->query($sql);
    
                if(isset($msgPic)){
                    //取出自動編碼的號碼
                    $msgNo= $pdo->lastInsertId();
                    //把圖存起來，用自動編碼的號碼命名
                    if(file_exists("../img/msgPic/")==false){
                        mkdir("../img/msgPic/");
                    }
                    $from= $_FILES["uploadImg"]["tmp_name"];
                    //取得檔案副檔名
                    $info= pathinfo($_FILES["uploadImg"]["name"]);
                    $ext= $info["extension"];
                    $to= "../img/msgPic/$msgNo.$ext";
                    copy($from,$to);
                    //把新的命名存入資料庫
                    $newName= "$msgNo.$ext";
                    $sql= "update `message` set msgPic = '{$newName}' where msgNo = '{$msgNo}'";
                    $imgName= $pdo->exec($sql);
                }
                echo $newName;
                break;
            case 1:
                echo "error|檔案太大，上傳檔案大小不可超過2M";
                break;
            case 3:
                echo "error|檔案不完整，請重新上傳";
                break;
            case 4:
                echo "error|未選檔案，請重新上傳";
                break;
            default: 
                echo "error|上傳失敗，請重新上傳";
        }
    }catch(PDOException $e){
        echo "錯誤訊息: ".$e->getMessage();
    }
   
?>