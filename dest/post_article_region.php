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
    <link rel="stylesheet" href="./css/post_article_region.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.12.1/css/all.min.css">
</head>
<body>
    <div class="postwritebackblock"></div>
    <div class="post_write_region">
        <div class="titleFontregion">
            <h3 class="postwritetitlecenterfix">發文區</h3>
            <div class="postwritecrossbutton">
                <div></div>
                <div></div>
            </div>
        </div>
        <form class="post_write_form" action="post_contentPreview.php" method="post" enctype="multipart/form-data">  <!--  action="post_contentPreview.php" -->
            <label for="writetitle" class="titleFont">
                <span class="postwritetitlefont">Title</span>
                <input class="postwritetitle" type="text" name="piTitle" placeholder="請輸入標題" value="" />
            </label>
            <div class="pwfselectkeyword">
                <span class="pwfselectkeywordtitle">Keyword</span>
                <div class="pwfselectkeywordregion">
                    <div class="pwfselectkeywordregiondaily">日常</div>
                    <div class="pwfselectkeywordregiontoy">玩具</div>
                    <div class="pwfselectkeywordregioncare">照顧</div>
                    <div class="pwfselectkeywordregioncute">可愛</div>
                    <div class="aa3 pwfselectkeywordregionpetspaceitem">
                        <div class="pwfselectkeywordregionpetspacetitle">
                            <span class="displayfont3 hide3">寵物有善空間</span>
                            <p class="multiSel ms3"></p>
                        </div>
                        <!-- <ul class="u3">
                            <li>
                                <p class="friendlyrestaurant">友善餐廳</p>
                                <label for="friendlyrestaurant1"><input type="checkbox" name="friendlyrestaurant1" value="friendlyrestaurant1" />餐廳名稱1</label>
                                <label for="friendlyrestaurant2"><input type="checkbox" name="friendlyrestaurant2" value="friendlyrestaurant2" />餐廳名稱2</label>
                                <label for="friendlyrestaurant3"><input type="checkbox" name="friendlyrestaurant3" value="friendlyrestaurant3" />餐廳名稱3</label>
                            </li>
                            <li><hr class="pwfpetspaceitemhr"></li>
                            <li>
                                <p class="friendlyrest">友善住宿</p>
                                <label for="friendlyrest1"><input type="checkbox" name="friendlyrest1" value="friendlyrest1" />住宿名稱1</label>
                                <label for="friendlyrest2"><input type="checkbox" name="friendlyrest2" value="friendlyrest2" />住宿名稱2</label>
                                <label for="friendlyrest3"><input type="checkbox" name="friendlyrest3" value="friendlyrest3" />住宿名稱3</label>
                            </li>
                            <li> <hr class="pwfpetspaceitemhr"></li>
                            <li>
                                <p class="friendlyviewpoint">友善景點</p>
                                <label for="friendlyviewpoint1"><input type="checkbox" name="friendlyviewpoint1" value="friendlyviewpoint1" />景點名稱1</label>
                                <label for="friendlyviewpoint2"><input type="checkbox" name="friendlyviewpoint2" value="friendlyviewpoint2" />景點名稱2</label>
                                <label for="friendlyviewpoint3"><input type="checkbox" name="friendlyviewpoint3" value="friendlyviewpoint3" />景點名稱3</label>
                            </li>
                        </ul> -->
                    </div>
                </div>
            </div>
            <div class="postwritecontentregion">
                <div class="cpc_writecontent">
                    <img src=""  id="cpc_writecontentpic1" class="cpc_writecontentpic1" alt="點擊這裡上傳圖片">
                    <input class="cpc_writecontentupfile" type="file" name="upFile[]"  accept="image/gif, image/jpeg, image/png" />
                    <div class="contenteditabletext" contenteditable="true" data-placeholder="請輸入內容"></div>
                    <input class="cpc_writecontenttextrecord" type="hidden" value="" name="piTitleContent" />
                    <input class="cpc_writecontenttextrecordgeneral" type="hidden" value="" name="piGeneralContent" />
                </div>
                <br><br>
                <div class="cpc_writecontent cpc_contentflex">
                    <img  src=""  id="cpc_writecontentpic2" class="cpc_writecontentpic2" alt="點擊這裡上傳圖片">
                    <input  class="cpc_writecontentupfile" type="file" name="upFile[]" accept="image/gif, image/jpeg, image/png" />
                    <div class="contenteditabletext" contenteditable="true"  data-placeholder="請輸入內容"></div>
                    <input class="cpc_writecontenttextrecord" type="hidden" value="" name="piFloatLeftContent" />
                </div>
                <br><br>
                <div class="cpc_writecontent cpc_contentflexreverse">
                    <img  src=""  id="cpc_writecontentpic3" class="cpc_writecontentpic3" alt="點擊這裡上傳圖片">
                    <input class="cpc_writecontentupfile" type="file" name="upFile[]" accept="image/gif, image/jpeg, image/png" />
                    <div class="contenteditabletext" contenteditable="true"  data-placeholder="請輸入內容"></div>
                    <input class="cpc_writecontenttextrecord" type="hidden" value="" name="piFloatRightContent" />
                </div>
            </div>
            <input class="postwriteregionbutton" type="button" value="送出" />  <!-- submit -->
        </form>
    </div>
    <div class="postregionwrapper">
    <!-- 導覽列 -->
        <header class="header-navigation" id="header">
            <nav class="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                <div class="container col-xl-8 col-lg-9 col-md-11 col-sm-12">
                    <h1>
                        <a href="./index.html">
                            <img src="" alt="logo">  <!-- ./img/logo-wide.png -->
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
            <!-- <div class="col-12"> -->
            <div class="col-8 centerfix">
                <h2 class="titleFont inlinefix">毛孩交流區</h2>
                <div class="postregionselectitem">
                    <!-- <span class="selectpostarticleregion">貼文區</span> -->
                    <!-- <span> | </span> -->
                    <!-- <span class="selectpostgalleryregion">照片牆</span> -->
                </div>
            </div>
            <!-- </div> -->
            <div class="col-12">
                <div class="col-8 centerfix">
                    <!-- 下拉選單 -->
                    <div class="inlinerightfix">
                        <!-- <div class="selectors inlinefix">
                            <div id="postregionSort" class="select postregionsort">
                                <div class="select-styled aa1">
                                  <span class="displayfont1 hide1">-- 排序方式 --</span>
                                  <p class="multiSel ms1"></p>
                                </div>

                                <ul class="u1">
                                    <li>
                                        <input type="checkbox" name="postsort" value="date" />日期 ( 新-舊 )</li>
                                    <li>
                                        <input type="checkbox" name="postsort" value="Popular" />最受歡迎</li>
                                </ul>

                            </div>
                            <br>
                            <div class="select postregionkeyword">
                                <div class="select-styled aa2">
                                  <span class="displayfont2 hide2">-- 關鍵字篩選 --</span>
                                  <p class="multiSel ms2"></p>
                                </div>

                                <ul class="u2">
                                    <li>
                                        <input type="checkbox" value="petspace" />寵物有善空間</li>
                                    <li>
                                        <input type="checkbox" value="daily" />日常</li>
                                    <li>
                                        <input type="checkbox" value="toy" />玩具</li>
                                    <li>
                                        <input type="checkbox" value="care" />照顧</li>
                                    <li>
                                        <input type="checkbox" value="cute" />可愛</li>
                                </ul>
                            </div>
                        </div> -->
                        <!-- 綠色按鈕 -->
                        <a id="par_postarticlebutton" class="btn darkgreen nav__link" >
                            <span class="titleFont">
                                我要發文
                            </span>
                            <div class="border"></div>
                            <div class="border"></div>
                            <div class="border"></div>
                            <div class="border"></div>
                        </a>

                        <!--innerTet: 按鈕內的文字
                            connect: 要連結到的網址-->

                        <!-- 跳轉符號 -->

                        <!-- total: 箭頭中間的文字內容 -->
                    </div>
                </div>
            </div>
            <br><br>
            <div class="col-12">
                <div class="col-8 centerfix">
                    <?php
                    try {
                        require_once('./php/connectDB.php');
                    	// $sql = "select piNo, piTitle, piContent, DATE_FORMAT(piTime,'%Y<br>%m<br>%d') piTimereset from postinfo order by piTime desc";
                        $sql = "select piNo, piTitle, piGeneralContent, piTitlePic, piFloatLeftPic, pkkString, DATE_FORMAT(piTime,'%Y<br>%m<br>%d') piTimereset, piStatus from postinfo
order by piTime desc";
                        $products = $pdo->query($sql);
                    	$prodRows = $products->fetchAll(PDO::FETCH_ASSOC);
                    } catch (PDOException $e) {
                    	echo "錯誤行號 : " . $e->getLine() . "<br>";
                    	echo "錯誤訊息 : " . $e->getMessage() . "<br>";
                    	// echo "系統暫時連不上請聯絡維護人員";
                    }
                    ?>
                    <?php
                	foreach($prodRows as $i => $prodRow) {
                        if($i%2 == 0 ){
                            $align = "left";
                        }else{
                            $align = "right";
                        }
                    ?>
                    <div class="card-item svg-wrapper card-item-<?=$align?> No<?=$prodRow["piNo"]?>">
                        <input class="cardItemSetpiNoSpan" type="hidden" value="<?=$prodRow["piNo"]?>" />   <!-- card-item-left -->
                        <div class="ripple"></div>
                        <div class="card-img">
                            <div class="article-date">
                                <?=$prodRow["piTimereset"]?>
                            </div>
                            <img src="<?=$prodRow["piFloatLeftPic"]?>">  <!-- ./img/postarticleregion/1.png -->
                        </div>
                        <div class="card-details">
                            <div class="title">
                                <?=$prodRow["piTitle"]?>
                            </div>
                            <div class="subtitle">
                                <?=$prodRow["piGeneralContent"]?>
                            </div>
                            <div class="keyword">
                                <?=$prodRow["pkkString"]?>
                                <!--<span></span>   #照顧 -->
                                <!--<span></span>   #貓 -->
                            </div>
                            <!-- <div class="postmessage">
                                留言 ( 312 )
                            </div> -->
                            <div class="buttononlinefix">
                                <!-- 灰色按鈕 -->
                                <a class="btn gray nav__link"  href='./post_content.php?piNo=<?=$prodRow["piNo"]?>'>

                                    <span class="titleFont">
                                        READ MORE
                                        <img src="./img/button_arrow_white.svg">
                                    </span>
                                    <div class="border"></div>
                                    <div class="border"></div>
                                    <div class="border"></div>
                                    <div class="border"></div>
                                </a>

                                <!-- innerTet: 按鈕內的文字
                                    connect: 要連結到的網址 -->
                            </div>
                        </div>
                        <svg height='100%' width='100%' xmlns="http://www.w3.org/2000/svg">
                            <rect class="shape" height='100%' width='100%' />
                        </svg>
                    </div>

                    <!-- -------------------------------------------------------------- -->
                    <?php
                	}
                	?>
                </div>
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
    <script src="./js/post_article_region.js"></script>
    <script src="./js/hamburger.js"></script>
    <script src="./js/header_slide.js"></script>
    <script src="./js/signInOut.js"></script>
    <script>
        let headerHeight= document.querySelector("div.headerHeight");
        let header= document.querySelector('nav');
        headerHeight.style.height= header.offsetHeight + "px";
        headerHeight.style.marginBottom= "30px";
    </script>
</body>
</html>
