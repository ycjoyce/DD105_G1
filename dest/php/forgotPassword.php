<?php
//新增
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

//設定檔案路徑
require("Exception.php");
require("PHPMailer.php");
require("SMTP.php");
require("connectDB.php");

//建立物件                                                                
$mail = new PHPMailer(true);

try {


    $sql = "select * from `meminfo` where memId = :memId;";
    $mem = $pdo->prepare($sql);
    $mem->bindValue(":memId", $_POST["email"]);
    $mem->execute();
    // if(isset($_POST["managerAccount"])){echo "true";}else{echo "NO";}
    if ($mem->rowCount() == 0) {
        $memMail = "沒查詢到該郵件";
        echo json_encode($memMail);
    } else {

        function makepass($length)
        {
            $possible = "0123456789";
            $str = "";
            while (strlen($str) < $length) {
                $str .= substr($possible, rand(0, strlen($possible)), 1);
            }
            return ($str);
        }

        //將亂數產生的新密碼 更新到資料庫裡
        $mpass = makepass(4);
        $sql_update_pass = "update `meminfo` set memPsw = '{$mpass}'  where memId = :memId;";
        $mem_newpass = $pdo->prepare($sql_update_pass);
        $mem_newpass->bindValue(":memId", $_POST["email"]);
        $mem_newpass->execute();

        //抓取更新後的會員資料
        $sql = "select * from `meminfo` where memId = :memId;";
        $mem = $pdo->prepare($sql);
        $mem->bindValue(":memId", $_POST["email"]);
        $mem->execute();
        $memRow = $mem->fetch(PDO::FETCH_ASSOC);
        $memPsw = $memRow["memPsw"];
        $memName = $memRow["memName"];




            //Server settings
            $mail->CharSet = "utf-8";
            $mail->SMTPDebug = 0; // DEBUG訊息
            $mail->isSMTP(); // 使用SMTP
            $mail->Host = 'smtp.gmail.com'; // SMTP server 位址
            $mail->SMTPAuth = true;  // 開啟SMTP驗證
            $mail->Username = 's954716@gmail.com'; // SMTP 帳號
            $mail->Password = 'ss890307'; // SMTP 密碼
            $mail->SMTPSecure = "ssl"; // Gmail要透過SSL連線
            $mail->Port       = 465; // SMTP TCP port 

            //設定收件人資料
            $mail->setFrom('s954716@gmail.com', '浪愛回家團隊'); // 寄件人(透過Gmail發送會顯示Gmail帳號為寄件者)
            $mail->addAddress('s954716@yahoo.com.tw', $memName); // 收件人會顯示 Apple User<apple@example.com>(*註2)
            // $mail->addAddress('banana@example.com'); // 名字非必填
            // $mail->addReplyTo('info@example.com', 'Information'); //回信的收件人
            // $mail->addCC('cc@example.com'); //副本
            // $mail->addBCC('bcc@example.com'); //密件副本

            // 附件
            // $mail->addAttachment('/var/tmp/file.tar.gz'); // 附件 (*註3) 
            // $mail->addAttachment('/tmp/image.jpg', 'new.jpg'); // 插入附件可更改檔名

            // 信件內容

            $mail->isHTML(true); // 設定為HTML格式
            $mail->Subject = '請查收您的新密碼'; // 信件標題
            $mail->Body    = '<h1 style="font-size: 1em;font-family:Microsoft JhengHei;"> 親愛的 ' . $memName . ' 您好:</h1><br><p style="font-family:Microsoft JhengHei; color: rgb(255, 77, 77);">這是您的新密碼 : ' . $memPsw . '</p><br><p style="font-family:Microsoft JhengHei;">請盡快登入以重新驗證。</p><br><br><p style="font-family:Microsoft JhengHei;">浪愛回家團隊 敬上</p>
        <p style="font-family:Microsoft JhengHei;">請注意：為保障您的個人資料安全，請勿在電子郵件內留下您的身分證字號、銀行帳號或信用卡卡號等機密資料。<br><br>

        本團隊堅持嚴格的安全標準與程序以防止您的資料遭未經授權的存取。絕不會以電子郵件或其他方式要求您進行個人資料(如：使用者帳號、密碼或帳戶號碼)的確認。若您收到前述要求，請立即致電前述專線電話。<br><br>

        本電子郵件屬機密郵件，並受法律的保護。如您不是本郵件之收件人，請勿複製、轉寄、公開或使用本郵件的任何部分。如您錯收本訊息，請將本訊息及所有拷貝自您的電腦中刪除。<br><br>

        網際網路通訊，無法保證其為即時的、安全的、無錯誤的或不含病毒的通訊。本團隊對於任何錯誤或疏忽不承擔任何責任。</p>'; // 信件內容
            // $mail->AltBody = 'This is the body in plain text for non-HTML mail clients'; // 對方若不支援HTML的信件內容

            $mail->send();
            $sendSucc = '信件已送出';
            echo json_encode($sendSucc);
    }
} catch (Exception $e) {
    echo "Message could not be sent. Mailer Error: {$mail->ErrorInfo}";
}
