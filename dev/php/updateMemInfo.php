<?php
session_start();
try{
    require_once("./connectDB.php");

    //如果有圖片
    if(isset($_FILES["uploadImg"])){

        switch($_FILES["uploadImg"]["error"]){
            case 0:
                $sql= "update `meminfo` set memName=:memName , memPsw=:memPsw where memno='{$_SESSION["memNo"]}';";
                $update= $pdo->prepare($sql);
                $update->bindValue(":memName",$_REQUEST["memName"]);
                $update->bindValue(":memPsw",$_REQUEST["memPsw"]);
                $updateMem= $update->execute();

                if(isset($updateMem)){
                    //取出會員編號
                    $updateNo= $_SESSION["memNo"];
                    //把圖存起來，用會員編號命名
                    if(file_exists("../img/memImg/")==false){
                        mkdir("../img/memImg/");
                    }
                    $from= $_FILES["uploadImg"]["tmp_name"];
                    //取得檔案副檔名
                    $info= pathinfo($_FILES["uploadImg"]["name"]);
                    $ext= $info["extension"];
                    $to= "../img/memImg/$updateNo.$ext";
                    copy($from,$to);
                    //把新的命名存入資料庫
                    $newName= "$updateNo.$ext";
                    $sql= "update `meminfo` set memPic = '$newName' where memno = '$updateNo';";
                    $imgName= $pdo->prepare($sql);
                    $imgName->execute();
                }
                $_SESSION["memPic"]= $newName;
                $_SESSION["memName"]= $_REQUEST["memName"];
                $_SESSION["memPsw"]= $_REQUEST["memPsw"];
                echo "success";
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
        $sql= "update `meminfo` set memName=:memName , memPsw=:memPsw where memno='{$_SESSION["memNo"]}';";
        $update= $pdo->prepare($sql);
        $update->bindValue(":memName",$_REQUEST["memName"]);
        $update->bindValue(":memPsw",$_REQUEST["memPsw"]);
        $fine= $update->execute();
        if(isset($fine)){
            echo "success";
        }else{
            echo "error";
        }
        
    }
    
    
}catch(PDOException $e){
    echo "錯誤訊息: ".$e->getMessage()."<br>";
}
?>