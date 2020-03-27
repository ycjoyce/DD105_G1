<?php

$fundNo = $_REQUEST["fundNo"];
$errMsg = "";
   

try{

    require_once("connectdd105g1.php");
    $sql = "SELECT f.fundNo, f.memNo, f.fundTitle, f.fundContent, f.fundImg, f.fundArticleImg1, f.fundArticleImg2, f.fundArticleF, f.fundArticleS, f.fundArticleT, f.fundStartDate, f.fundEndDate, f.fundGoal, f.fundNowAmount ,f.fundAttendPeople, m.memPic, to_days(f.fundEndDate)-to_days(CURRENT_DATE()+1) dead,round((f.fundNowAmount / f.fundGoal)*100) pas from fundraising f join meminfo m on f.memNo = m.memNo
    where fundNo = :fundNo";
    
    
    $fundraising = $pdo->prepare($sql);
    $fundraising->bindValue(":fundNo",$fundNo);
    $fundraising->execute();


    // $fundraisingrows =  $fundraising->fetchall(PDO::FETCH_ASSOC);
        
    //     echo json_encode($fundraisingrows);

    
       

} catch (PDOException $e){

    echo "錯誤行號 : " . $e->getLine() . "<br>";
	echo "錯誤訊息 : " . $e->getMessage() . "<br>";

}

?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="../css/projectbunny_test.css">
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.0.9/css/all.css">
</head>
<body>
    <?php

    if($errMsg != ""){
        echo "<div><center>$errMsg</center></div>";
    }else{
        $fundraisingrows =  $fundraising->fetchObject();
        $arr = array($fundraisingrows);
        // echo $jsonObj = json_encode( $arr );
    ?>

   
    <div class="projectcontentbox col-8">
        <div class="imgchange">
            <div class="imgrow">
                <div class="bigimg">
                    <img id="big" src="/img/donation/<?php echo $fundraisingrows->fundImg;?>.jpg" >
                </div>
                <div class="smallimg" id="small">
                    <img src="/img/donation/<?php echo $fundraisingrows->fundImg;?>.jpg" alt="" >
                    <img src="/img/donation/<?php echo $fundraisingrows->fundArticleImg1;?>.jpg" alt="" >
                    <img src="/img/donation/<?php echo $fundraisingrows->fundArticleImg2;?>.jpg" alt="" >
                </div>
            </div>
            <div class="status">
                <div class="shortcontent">
                    <h2>Project<?php echo $fundraisingrows->fundNo;?></h2>
                    <h2><?php echo $fundraisingrows->fundTitle;?></h2>
                </div>
                <div class="texts">
                    <div class="statusrow">
                      <div class="nowpeople">捐款<span><?php echo $fundraisingrows->fundAttendPeople;?>人</span></div>
                      <div class="lastday">剩<span
                          class="orange"><?php echo $fundraisingrows->dead;?>天</span>
                      </div>
                    </div>
                    <div class="progressbar">
                      <div class="valuebar" style="width:<?php echo $fundraisingrows->pas;?>%">
                      </div>
                    </div>
                    <div class="goal">已募款<span>NT$<?php echo $fundraisingrows->fundNowAmount;?>/<?php echo $fundraisingrows->fundGoal;?></span></div>
                    <div class="socialbtnbox">
                        <div class="social">
                            <ul class="socialbtn">
                                <li class="heart"><i class="fas fa-heart"></i></li>
                                <li class="share"><i class="fas fa-share-alt"></i></li>
                            </ul>
                        </div>
                        <div class="button">
                            <button>我要捐款</button>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
        <!---------------- 專案文章  ---------------->
        <div class="artcontent col-12">
            <h3 style="background-image: url(../img/donation/big_bule_bubble.png);background-repeat:no-repeat;background-size:contain;">毛孩介紹</h3>
            <div class="fundArticleF"><?php echo $fundraisingrows->fundArticleF;?></div>
            <h3 style="background-image: url(../img/donation/big_pink_bubble.png);background-repeat:no-repeat;background-size:contain;">捐款目的</h3>
            <div class="fundArticleS"><?php echo $fundraisingrows->fundArticleS;?></div>
            <h3 style="background-image: url(../img/donation/big_green_bubble.png);background-repeat:no-repeat;background-size:contain;">拉票文宣</h3>
            <div class="fundArticleT"><?php echo $fundraisingrows->fundArticleT;?></div>
            <div class="button">
                <button>我要捐款</button>
            </div>
        </div>
        <!---------------- 其他最新專案  ---------------->
        <div class="newprojectrow">
            <h3>其他最新專案</h3>
            <div id="leftRightPanel">
                <button id="btnLeft" disabled="disabled"><i class="fas fa-chevron-left"></i></button>
                <button id="btnRight"><i class="fas fa-chevron-right"></i></button>
            </div>
            <div class="itempanel">
                <div class="wrap">
                    <div id="app">
                        <div class="donationcardbox" v-for="newdo in newdonationdatas">
                        <form action="showproject.php" method="post">
                        <input type="hidden" :value="newdo.fundNo" name="fundNo">
                        <button type="submit" class="fakeformbtn">
                            <!-- <a class="cardbox"> -->
                            <div class="raiser" v-bind:style="'background-image:url(../img/donation/' + newdo.memPic + '.jpg)'"></div>
                            <div class="top">
                                <div class="donationpic"
                                v-bind:style="'background-image:url(../img/donation/' + newdo.fundImg + '.jpg)'">
                                </div>
                                <div class="tag">募資中</div>
                                <div class="heartbtn"><i class="fas fa-heart"></i></div>
                            </div>
                            <div class="bottom">
                                <h1 class="donationtitle">{{newdo.fundTitle}}</h1>
                                <div class="texts">
                                <div class="statusrow">
                                    <div class="nowpeople">捐款<span class="orange">{{newdo.fundAttendPeople}}人</span></div>
                                    <div class="lastday">剩<span
                                        class="orange">{{ parseInt((new Date(newdo.fundEndDate) - new Date()) / 1000 / 60 / 60 / 24)}}天</span>
                                    </div>
                                </div>
                                <div class="progressbar">
                                    <div class="valuebar"
                                    v-bind:style="'width:' + 100 * (newdo.fundNowAmount / newdo.fundGoal) + '%'">
                                    </div>
                                </div>
                                <div class="goal">已募款<span class="orange">NT${{newdo.fundNowAmount}}/{{newdo.fundGoal}}</span></div>
                                </div>
                                <div class="bottombar"></div>
                            </div>
                            <!-- </a> -->
                        </button>
                        </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
       
    </div> 
    <script>
        function $id(id){
        return document.getElementById(id);
        }

        window.addEventListener("load",function(){
            let curIndex = 0;
            // let wrap = document.getElementsByClassName("wrap")[0];
            // let wrap = document.querySelectorAll(".wrap")[0];
            let wrap =  document.querySelector(".wrap");//滿足css selector的第一個元素 

            $id("btnRight").onclick= function(){
                curIndex++;
                wrap.style.left = -310 * curIndex + "px";
                $id("btnLeft").disabled = false;//可點擊
                if(curIndex =="5"){
                    $id("btnRight").disabled = true;
                }
            }

            $id("btnLeft").onclick = function(){
                curIndex--;
                wrap.style.left = -310 * curIndex + "px";
                $id("btnRight").disabled = false;//可點擊
                if(curIndex =="0"){
                    $id("btnLeft").disabled = true;
                }
                
            }
        })
    </script>
    <!---------------- 燈箱 ---------------->
    <div class="col-12 box">
        <div class="content">
            <div class="checkout">
                <div class="credit-card-box">
                    <div class="flip">
                        <div class="front">
                            <div class="chip"></div>
                            <div class="logo">
                                <svg version="1.1" id="visa" xmlns="http://www.w3.org/2000/svg"
                                    xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="47.834px"
                                    height="47.834px" viewBox="0 0 47.834 47.834"
                                    style="enable-background:new 0 0 47.834 47.834;">
                                    <g>
                                        <g>
                                            <path d="M44.688,16.814h-3.004c-0.933,0-1.627,0.254-2.037,1.184l-5.773,13.074h4.083c0,0,0.666-1.758,0.817-2.143
                                       c0.447,0,4.414,0.006,4.979,0.006c0.116,0.498,0.474,2.137,0.474,2.137h3.607L44.688,16.814z M39.893,26.01
                                       c0.32-0.819,1.549-3.987,1.549-3.987c-0.021,0.039,0.317-0.825,0.518-1.362l0.262,1.23c0,0,0.745,3.406,0.901,4.119H39.893z
                                       M34.146,26.404c-0.028,2.963-2.684,4.875-6.771,4.875c-1.743-0.018-3.422-0.361-4.332-0.76l0.547-3.193l0.501,0.228
                                       c1.277,0.532,2.104,0.747,3.661,0.747c1.117,0,2.313-0.438,2.325-1.393c0.007-0.625-0.501-1.07-2.016-1.77
                                       c-1.476-0.683-3.43-1.827-3.405-3.876c0.021-2.773,2.729-4.708,6.571-4.708c1.506,0,2.713,0.31,3.483,0.599l-0.526,3.092
                                       l-0.351-0.165c-0.716-0.288-1.638-0.566-2.91-0.546c-1.522,0-2.228,0.634-2.228,1.227c-0.008,0.668,0.824,1.108,2.184,1.77
                                       C33.126,23.546,34.163,24.783,34.146,26.404z M0,16.962l0.05-0.286h6.028c0.813,0.031,1.468,0.29,1.694,1.159l1.311,6.304
                                       C7.795,20.842,4.691,18.099,0,16.962z M17.581,16.812l-6.123,14.239l-4.114,0.007L3.862,19.161
                                       c2.503,1.602,4.635,4.144,5.386,5.914l0.406,1.469l3.808-9.729L17.581,16.812L17.581,16.812z M19.153,16.8h3.89L20.61,31.066
                                       h-3.888L19.153,16.8z" />
                                        </g>
                                    </g>
                                </svg>
                            </div>
                            <div class="number"></div>
                            <div class="card-holder">
                                <label></label>
                                <div></div>
                            </div>
                            <div class="card-expiration-date">
                                <label>VALID THRU</label>
                                <div></div>
                            </div>
                        </div>
                        <div class="back">
                            <div class="strip"></div>
                            <div class="logo">
                                <svg version="1.1" id="visa" xmlns="http://www.w3.org/2000/svg"
                                    xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="47.834px"
                                    height="47.834px" viewBox="0 0 47.834 47.834"
                                    style="enable-background:new 0 0 47.834 47.834;">
                                    <g>
                                        <g>
                                            <path d="M44.688,16.814h-3.004c-0.933,0-1.627,0.254-2.037,1.184l-5.773,13.074h4.083c0,0,0.666-1.758,0.817-2.143
                                       c0.447,0,4.414,0.006,4.979,0.006c0.116,0.498,0.474,2.137,0.474,2.137h3.607L44.688,16.814z M39.893,26.01
                                       c0.32-0.819,1.549-3.987,1.549-3.987c-0.021,0.039,0.317-0.825,0.518-1.362l0.262,1.23c0,0,0.745,3.406,0.901,4.119H39.893z
                                       M34.146,26.404c-0.028,2.963-2.684,4.875-6.771,4.875c-1.743-0.018-3.422-0.361-4.332-0.76l0.547-3.193l0.501,0.228
                                       c1.277,0.532,2.104,0.747,3.661,0.747c1.117,0,2.313-0.438,2.325-1.393c0.007-0.625-0.501-1.07-2.016-1.77
                                       c-1.476-0.683-3.43-1.827-3.405-3.876c0.021-2.773,2.729-4.708,6.571-4.708c1.506,0,2.713,0.31,3.483,0.599l-0.526,3.092
                                       l-0.351-0.165c-0.716-0.288-1.638-0.566-2.91-0.546c-1.522,0-2.228,0.634-2.228,1.227c-0.008,0.668,0.824,1.108,2.184,1.77
                                       C33.126,23.546,34.163,24.783,34.146,26.404z M0,16.962l0.05-0.286h6.028c0.813,0.031,1.468,0.29,1.694,1.159l1.311,6.304
                                       C7.795,20.842,4.691,18.099,0,16.962z M17.581,16.812l-6.123,14.239l-4.114,0.007L3.862,19.161
                                       c2.503,1.602,4.635,4.144,5.386,5.914l0.406,1.469l3.808-9.729L17.581,16.812L17.581,16.812z M19.153,16.8h3.89L20.61,31.066
                                       h-3.888L19.153,16.8z" />
                                        </g>
                                    </g>
                                </svg>

                            </div>
                            <div class="ccv">
                                <label>CVC</label>
                                <div></div>
                            </div>
                        </div>
                    </div>
                </div>
                <form class="form" action="donationinset.php" method="post" enctype="multipart/form-data">
                    <fieldset>
                        <label for="card-number">卡號</label>
                        <input type="num" id="card-number" class="input-cart-number" maxlength="4" />
                        <input type="num" id="card-number-1" class="input-cart-number" maxlength="4" />
                        <input type="num" id="card-number-2" class="input-cart-number" maxlength="4" />
                        <input type="num" id="card-number-3" class="input-cart-number" maxlength="4" />
                    </fieldset>
                    <fieldset>
                        <label for="card-holder">姓名(英文字母)</label>
                        <input type="text" id="card-holder" />
                    </fieldset>
                    <fieldset class="fieldset-expiration">
                        <label for="card-expiration-month">VALID THRU</label>
                        <div class="select">
                            <select id="card-expiration-month">
                                <option></option>
                                <option>01</option>
                                <option>02</option>
                                <option>03</option>
                                <option>04</option>
                                <option>05</option>
                                <option>06</option>
                                <option>07</option>
                                <option>08</option>
                                <option>09</option>
                                <option>10</option>
                                <option>11</option>
                                <option>12</option>
                            </select>
                        </div>
                        <div class="select">
                            <select id="card-expiration-year">
                                <option></option>
                                <option>2020</option>
                                <option>2021</option>
                                <option>2022</option>
                                <option>2023</option>
                                <option>2024</option>
                                <option>2025</option>
                                <option>2026</option>
                                <option>2027</option>
                                <option>2028</option>
                                <option>2029</option>
                                <option>2030</option>
                            </select>
                        </div>
                    </fieldset>
                    <fieldset class="fieldset-ccv">
                        <label for="card-ccv">CVC</label>
                        <input type="text" id="card-ccv" maxlength="3" />
                    </fieldset>
                    <fieldset class="amountsel">
                        <label for="camount">捐款金額</label>
                        <input type="text" name="fundNowAmount">
                        <label for="camount">專案編號金額</label>
                        <input type="hidden" name="fundNo" value="<?php echo $fundraisingrows->fundNo;?>">
                        <input type="hidden" name="memNo" value="2">
                        <!-- <div class="select">
                            <select id="amount" name="fundNowAmount">
                                <option></option>
                                <option>1000</option>
                                <option>2000</option>
                                <option>3000</option>
                                <option>4000</option>
                                <option>5000</option>
                                <option>6000</option>
                                <option>7000</option>
                                <option>8000</option>
                                <option>9000</option>
                                <option>10000</option>
                            </select>
                        </div> -->
                    </fieldset>
                    <input type="submit" name="submit">確定捐款
                    
                    <div class="btn">
                        <a class="btn darkgreen nav__link" href='#'>
                            <span class="titleFont">
                            </span>
                            <div class="border"></div>
                            <div class="border"></div>
                            <div class="border"></div>
                            <div class="border"></div>
                        </a>
                        <button type="submit" class="cancel titleFont">
                            取消捐款
                        </button>
                    </div>

                </form>
            </div>

    
    
    <?php

}
?>

    

<script src='https://cdnjs.cloudflare.com/ajax/libs/jquery/3.1.0/jquery.min.js'></script>
<script src='https://cdnjs.cloudflare.com/ajax/libs/vue/2.0.5/vue.js'></script>
<script src="../js/project_donation_new.js"></script>
</html>


