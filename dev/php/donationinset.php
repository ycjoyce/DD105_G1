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
    // if($_REQUEST['memNo'] != ''){
    //     $_SESSION['memNo'] = $_REQUEST['memNo'];
    // }
    

    $fundNo = $_REQUEST["fundNo"];
    $errMsg = "";
    try{
        require_once("connectDB.php");
        $sql = "update `fundraising` set `fundNowAmount` = fundNowAmount + :fundNowAmount ,`fundAttendPeople` = fundAttendPeople + 1 
        where fundNo = :fundNo";
        $fundraising = $pdo->prepare($sql);
        // 確定是否上傳成功
        $fundraising -> bindValue(":fundNowAmount", $_POST["fundNowAmount"]);
        $fundraising->bindValue(":fundNo",$fundNo);
        
        $fundraising -> execute();
        echo "修改成功~";
        $fundraising->rowCount();
        echo $count = $fundraising->rowCount(); 
        //取得資料筆數

        

    
        if (isset($_SESSION["memNo"])) {
            $sql = "insert into `attend_fundraising` (`memNo`,`fundNo`,`fundNowAmount`,`atFundDate`) values( :memNo,:fundNo,:fundNowAmount,NOW())";
            $fundraising = $pdo->prepare($sql);
            $fundraising -> bindValue(":fundNowAmount", $_POST["fundNowAmount"]);
            $fundraising->bindValue(":fundNo",$fundNo);
            $fundraising->bindValue(":memNo",$_SESSION['memNo']);
            $fundraising -> execute();
            $atNo = $pdo->lastInsertId();
            echo "新增成功~";
        }

     

       
    } catch (PDOException $e) {
        $errMsg .= "錯誤原因 : ".$e -> getMessage(). "<br>";
        $errMsg .= "錯誤行號 : ".$e -> getLine(). "<br>";	
    }
    echo $errMsg;
    echo "失敗";
    ?>

    <?php 
    // 重定向瀏覽器 
    header("Location: http://localhost:8888/donation.html"); 
    // 確保重定向後，後續代碼不會被執行 
    exit;
    ?>
    
</body>
</html>