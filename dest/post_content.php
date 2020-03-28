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
    <link rel="stylesheet" href="./css/post_content.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.12.1/css/all.min.css">
</head>
<body>
    <div class="postregionwrapper">
    <!-- 導覽列 -->
        <header class="header-navigation" id="header">
    <nav class="col-xl-12 col-lg-12 col-md-12 col-sm-12">
        <div class="container col-xl-8 col-lg-9 col-md-11 col-sm-12">
            <h1>
                <a href="./index.html">
                    <img src="./img/logo-wide.png" alt="logo">
                </a>
            </h1>
            <ul class="col-xl-9 col-lg-9 col-md-9">
                <li><a href="./map.html">浪浪在哪裡</a></li>
                <li><a href="./donation.html">愛心助浪浪</a></li>
                <li><a href="./customized.html">客製化項圈</a></li>
                <li><a href="./post_article_region.php">毛孩交流區</a></li>
                <li><a href="./aboutus.html">關於我們</a></li>
                <li><a class="login" href="./login.html">登入 / 註冊</a></li>
            </ul>
            <button class="hamburger hamburger--spring" type="button">
                <span class="hamburger-box">
                  <span class="hamburger-inner"></span>
                </span>
            </button>
        </div>
    </nav>
</header>


        <div class="headerHeight"></div>
        <!-- header 的高度 -->

        <div>  <!-- 內文的高度 -->
            <?php
            $piNo = $_REQUEST["piNo"];
            $errMsg = "";
            //連線資料庫
            try{
              require './php/connectDB.php';
              // select p.piNo, p.piTitle, p.piTitlePic, p.piTitleContent, p.piFloatLeftPic, p.piFloatLeftContent, p.piFloatRightPic, p.piFloatRightContent, m.memName, m.memId 'E-mail'
              // from postinfo p join memInfo m on (p.memNo = m.memNo)
              // where p.piNo = 2;
              $sql = "select p.piNo, p.piTitle, p.piTitlePic, p.piTitleContent, p.piFloatLeftPic, p.piFloatLeftContent, p.piFloatRightPic, p.piFloatRightContent, m.memPic , m.memName, m.memId 'Email', m.memNo
              from postinfo p join memInfo m on (p.memNo = m.memNo)
              where p.piNo = :piNo";
              // $sql = "select piTitle, piTitlePic, piTitleContent, piFloatLeftPic, piFloatLeftContent, piFloatRightPic, piFloatRightContent from postinfo where piNo = :piNo";
              $products = $pdo->prepare($sql);
              $products->bindValue(":piNo", $piNo);
              $products->execute();
            }catch(PDOException $e){
              $errMsg .= "錯誤原因 : ".$e -> getMessage(). "<br>";
              $errMsg .= "錯誤行號 : ".$e -> getLine(). "<br>";
            }
            ?>
            <?php
            if( $errMsg != ""){ //例外
              echo "<div><center>$errMsg</center></div>";
            }elseif($products->rowCount()==0){
                  echo "<div><center>查無此貼文資料</center></div>";
            }else{
                  $prodRow = $products->fetchObject();
            }
            ?>
            <div class="col-8 centerfix">
                <div class="breadcrumb">
                    <a href="./post_article_region.php">貼文區</a>
                    <span>></span>
                    <a href="#"><?php echo $prodRow->piTitle;?></a>
                </div>
            </div>

            <div class="col-8 centerfix">
                <div class="post3buttoncollection">
                    <div class="postfevoritebutton">
                        <div id='heart' class='heartbutton'></div>
                    </div>
                    <div class="postsharebutton">
                        <i class="fa fa-share-alt"></i>
                    </div>
                    <div class="postreportbutton">
                        <i class="fas fa-flag"></i>
                    </div>
                </div>
            </div>

            <div class="col-8 centerfix">
                <h2 class="titleFont inlinefix"><?php echo $prodRow->piTitle;?></h2>  <!-- 原內容 : 內文標題 -->
                <div class="cpc_contentregion">
                    <div class="cpc_content">
                        <img class="cpc_contentpic1" src="<?php echo $prodRow->piTitlePic;?>" alt="An Image" style="">
                        <p><?php echo $prodRow->piTitleContent;?></p>
                    </div>
                    <br><br>
                    <div class="cpc_content cpc_contentflex">
                        <img class="cpc_contentpic2" src="<?php echo $prodRow->piFloatLeftPic;?>" alt="An Image" style="">
                        <p><?php echo $prodRow->piFloatLeftContent;?></p>
                    </div>
                    <br><br>
                    <div class="cpc_content cpc_contentflexreverse">
                        <img class="cpc_contentpic3" src="<?php echo $prodRow->piFloatRightPic;?>" alt="An Image" style="">
                        <p class="cpc_contentfont2 lineright"><?php echo $prodRow->piFloatRightContent;?></p>
                    </div>
                </div>
                <hr class="cpchr">
                <div class="postautherregion">
                    <img class="postautherimg" style="background-image:url(./img/memImg/<?php echo $prodRow->memPic;?>)" class="memberhead" />
                    <div class="postauthercontent">
                        <p>私信作者 : <?php echo $prodRow->memName;?></p>
                        <img src="./img/icon_private_message.svg" id="forumMsg" class="No<?=$prodRow->memNo?>">
                    </div>
                </div>
                <!-- <hr class="cpchr"> -->
                <!-- <div class="leftmessage">
                    <h2 class="titleFont inlinefix">留言區</h2>
                    <div class="postmessageregion">
                        <ul class="postmessenger">
                            <li class="leftedmessagecollect">前面還有 232 則留言</li>
                            <li class="leftedmessage">
                                <div class="docommonmessage">
                                    <div class="leftedmessageinfo">
                                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSf1BFE7_Gdnaou0lcz9NTHwZZaSIFd_jOXBcGIZsMnBxS1NdIX" class="memberhead" />
                                        <span class="membername">前人的姓名</span>
                                    </div>
                                    <div class="leftedmessagecontent">
                                        <p class="memberleftmessage">前人留下的留言</p>
                                        <p class="memberleftmessagetime">1天前</p>
                                    </div>
                                </div>
                                <div class="responsemember"><a href="#">檢舉</a><a href="#">回覆</a></div>
                            </li>
                            <li class="leftedmessage">
                                <div class="docommonmessage">
                                    <div class="leftedmessageinfo">
                                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSf1BFE7_Gdnaou0lcz9NTHwZZaSIFd_jOXBcGIZsMnBxS1NdIX" class="memberhead" />
                                        <span class="membername">前人的姓名</span>
                                    </div>
                                    <div class="leftedmessagecontent">
                                        <p class="memberleftmessage">前人的留言前人的留言前人的留言前人的留言前人的留言前人的留言前人的留言</p>
                                        <p class="memberleftmessagetime">13小時前</p>
                                    </div>
                                </div>
                                <div class="responsemember"><a href="#">檢舉</a><a href="#">回覆</a></div>
                            </li>
                            <li class="leftedmessage">
                                <div class="docommonmessage">
                                    <div class="leftedmessageinfo">
                                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSf1BFE7_Gdnaou0lcz9NTHwZZaSIFd_jOXBcGIZsMnBxS1NdIX" class="memberhead" />
                                        <span class="membername">前人的姓名</span>
                                    </div>
                                    <div class="leftedmessagecontent">
                                        <p class="memberleftmessage">前人留下的留言</p>
                                        <p class="memberleftmessagetime">1分鐘前</p>
                                    </div>
                                </div>
                                <div class="responsemember"><a href="#">檢舉</a><a href="#">回覆</a></div>
                            </li>
                            <li class="leftedmessage">
                                <div class="docommonmessage">
                                    <div class="leftedmessageinfo">
                                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSf1BFE7_Gdnaou0lcz9NTHwZZaSIFd_jOXBcGIZsMnBxS1NdIX" class="memberhead" />
                                        <span class="membername">前人的姓名</span>
                                    </div>
                                    <div class="leftedmessagecontent">
                                        <p class="memberleftmessage">前人的留言前人的留言前人的留言前人的留言前人的留言前人的留言前人的留言</p>
                                        <p class="memberleftmessagetime">2秒前</p>
                                    </div>
                                </div>
                                <div class="responsemember"><a href="#">檢舉</a><a href="#">回覆</a></div>
                            </li>
                        </ul>
                        <div class="leaveamessage">
                            <label for="leaveamessage" class="labelleaveamessage">
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSf1BFE7_Gdnaou0lcz9NTHwZZaSIFd_jOXBcGIZsMnBxS1NdIX" class="memberhead">
                                <input type="text" name="leaveamessage" placeholder="留言 ..." class="sendamessage"/>
                            </label>
                        </div>

                    </div>
                </div> -->
            </div>
        </div>

        <!-- footer -->
        <footer>
    <div class="page_top" id="page_top">
        <span class="titleFont smalltext">PAGE TOP</span>
    </div>
    <p class="titleFont smalltext">
        © 2020 Bring Love Home
    </p>
</footer>

<script src="./js/page_top.js"></script>

    </div>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/2.1.0/jquery.min.js"></script>
    <script src="./js/post_content.js"></script>
    <script src="./js/post_article_region.js"></script>
    <script src="./js/hamburger.js"></script>
    <script src="./js/header_slide.js"></script>
    <script src="./js/signInOut.js"></script>

</body>
</html>
