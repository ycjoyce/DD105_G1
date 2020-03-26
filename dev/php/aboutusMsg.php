<?php
session_start();
try{
    require_once("./connectDB.php");

    //如果文字圖片都有
    if(isset($_FILES["uploadImg"]["error"]) && isset($_REQUEST["msgContent"])){

        switch($_FILES["uploadImg"]["error"]){
            case 0:
                $sql= "insert into `message` (sendMemNo, getMemNo, msgTime, msgText, msgPic) values ('{$_SESSION["memNo"]}', (select memno from `meminfo` where memid='bringlovehome@gmail.com'), date_format(now(),'%Y.%m.%d  %H:%i'), null, null);";
                $addImg= $pdo->exec($sql);       
    
                if(isset($addImg)){
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

                $sql= "insert into `message` (sendMemNo, getMemNo, msgTime, msgText, msgPic) values ('{$_SESSION["memNo"]}', (select memno from `meminfo` where memid='bringlovehome@gmail.com'), date_format(now(),'%Y.%m.%d  %H:%i'), :msgText, null);";
                $text= $pdo->prepare($sql);
                $text->bindValue(":msgText",htmlspecialchars($_REQUEST["msgContent"]));
                $addText= $text->execute();

                $sql= "select * from `meminfo` where memid='bringlovehome@gmail.com';";
                $official= $pdo->query($sql);
                $officialRow=$official->fetch(PDO::FETCH_ASSOC);

                echo "textOnly|success|".$officialRow["memNo"];
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
    //只上傳圖片
    else if(isset($_FILES["uploadImg"]["error"]) && !isset($_REQUEST["msgContent"])){
        switch($_FILES["uploadImg"]["error"]){
            case 0:
                $sql= "insert into `message` (sendMemNo, getMemNo, msgTime, msgText, msgPic) values ('{$_SESSION["memNo"]}', (select memno from `meminfo` where memid='bringlovehome@gmail.com'), date_format(now(),'%Y.%m.%d  %H:%i'), null, null);";
                $addImg= $pdo->exec($sql);  
    
                if(isset($addImg)){
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

                $sql= "select * from `meminfo` where memid='bringlovehome@gmail.com';";
                $official= $pdo->query($sql);
                $officialRow=$official->fetch(PDO::FETCH_ASSOC);

                echo "textOnly|success|".$officialRow["memNo"];
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
    //只上傳文字
    else if(!isset($_FILES["uploadImg"]["error"]) && isset($_REQUEST["msgContent"])){
        $sql= "insert into `message` (sendMemNo, getMemNo, msgTime, msgText, msgPic) values ('{$_SESSION["memNo"]}', (select memno from `meminfo` where memid='bringlovehome@gmail.com'), date_format(now(),'%Y.%m.%d  %H:%i'), :msgText, null);";
        $text= $pdo->prepare($sql);
        $text->bindValue(":msgText",htmlspecialchars($_REQUEST["msgContent"]));
        $addText= $text->execute();

        $sql= "select * from `meminfo` where memid='bringlovehome@gmail.com';";
        $official= $pdo->query($sql);
        $officialRow=$official->fetch(PDO::FETCH_ASSOC);

        echo "textOnly|success|".$officialRow["memNo"];
    }
    
}catch(PDOException $e){
    echo "錯誤訊息: ".$e->getMessage()."<br>";
}
?>