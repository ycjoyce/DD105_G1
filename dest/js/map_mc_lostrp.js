// 輸入地址找經緯度
var geocoder;

$(document).ready(function() {
  // 把寵物遺失從資料庫撈回來
  getlostrpList();
  // editCard();

  // 把寵物遺失從資料庫撈回來
  function getlostrpList() {
    $.ajax({
      type: "get",
      url: "./php/map_MClostrp.php",
      dataType: "json",
      success: function(data) {
        // console.log(data);
        let html = "";
        for (var i = 0; i < data.length; i++) {
          if (data[i].lostPetRpStat == 0) {
            html += `
            <tr>
                <td>${data[i].lostPetRpNo}</td>
                <td class="memRWD_992">${data[i].lostPetRpDate}</td>
                <td class="memRWD_992">${data[i].lostPetRpLoc}</td>
                <td class="memRWD_992">${data[i].lostPetRpLDate}</td>
                <td>${data[i].lostPetRpName}</td>
                <td class="memRWD_992">${data[i].lostPetRpType}</td>
                <td class="memRWD_992">進行中</td>
                <td class="memRWD_992_img"><img src="./img/lostrp/${data[i].lostPetRpImg}"></td>
                <td>
                <a href="#" class="lostform_edit updatebtn_s" psn="${data[i].lostPetRpNo}">編輯 / 結案</a>
                </td>
            </tr>`;
          } else if (data[i].lostPetRpStat == 1) {
            html += `
            <tr>
                <td>${data[i].lostPetRpNo}</td>
                <td class="memRWD_992">${data[i].lostPetRpDate}</td>
                <td class="memRWD_992">${data[i].lostPetRpLoc}</td>
                <td class="memRWD_992">${data[i].lostPetRpLDate}</td>
                <td>${data[i].lostPetRpName}</td>
                <td class="memRWD_992">${data[i].lostPetRpType}</td>
                <td class="memRWD_992">已找到</td>
                <td class="memRWD_992_img"><img src="./img/lostrp/${data[i].lostPetRpImg}"></td>
                <td>
                <a href="#" class="lostform_edit updatebtn_s" psn="${data[i].lostPetRpNo}">編輯 / 結案</a>
                </td>
            </tr>`;
          } else {
            html += `
                <tr>
                    <td>${data[i].lostPetRpNo}</td>
                    <td class="memRWD_992">${data[i].lostPetRpDate}</td>
                    <td class="memRWD_992">${data[i].lostPetRpLoc}</td>
                    <td class="memRWD_992">${data[i].lostPetRpLDate}</td>
                    <td>${data[i].lostPetRpName}</td>
                    <td class="memRWD_992">${data[i].lostPetRpType}</td>
                    <td class="memRWD_992">未找到，結案</td>
                    <td class="memRWD_992_img"><img src="./img/lostrp/${data[i].lostPetRpImg}"></td>
                    <td>
                    <a href="#" class="lostform_edit updatebtn_s" psn="${data[i].lostPetRpNo}">編輯 / 結案</a>
                    </td>
                  </tr>`;
          }
        }
        $(".lostrptabletbody").empty();
        $(".lostrptabletbody").append(html);

        // 燈箱開啟按鈕
        openCard();
      },
      error: function(xhr) {
        alert(xhr.Message);
      }
    });
  }

  // 打開燈箱function
  function openCard() {
    $(".lostform_edit").click(function(e) {
      e.preventDefault();
      var psn = $(this).attr("psn");
      $.ajax({
        type: "post",
        url: "./php/map_MClostrpcard.php",
        dataType: "json",
        data: { lostPetRpNo: psn },
        success: function(data) {
          let html = "";
          html += `
              <div id="lostform" title="寵物遺失地點">
              <form  psn="${data.lostPetRpNo}">
                  <fieldset>
                      <h3>寵物遺失地點登記</h3>
                      <p>
                          <label for="lostPetRpLoc">寵物遺失地點</label>
                          <input type="text" name="lostPetRpLoc" id="lostPetRpLoc" value="${data.lostPetRpLoc}">
                          <input type="hidden" id="memNo" name="memNo" value="${data.memNo}">
                          <input type="hidden" id="memName" name="memName" value="${data.memName}">
                          <input type="hidden" id="lostPetRpLocAdd" name="lostPetRpLocAdd" value="${data.lostPetRpLocAdd}">
                          <input type="hidden" id="lostPetRpLoclat" name="lostPetRpLoclat" value="${data.lostPetRpLoclat}">
                          <input type="hidden" id="lostPetRpLoclng" name="lostPetRpLoclng" value="${data.lostPetRpLoclng}">
                      </p>
                      <p>
                          <label for="lostPetRpLDate">寵物遺失時間</label>
                          <input type="date" name="lostPetRpLDate" id="lostPetRpLDate" value="${data.lostPetRpLDate}">
                      </p>
                      <p>
                          <label for="lostPetRpName">寵物名稱</label>
                          <input type="text" name="lostPetRpName" id="lostPetRpName" value="${data.lostPetRpName}">
                      </p>
                      <p>
                          <label for="lostPetRpType">寵物類型</label>
                          <input type="text" name="lostPetRpType" id="lostPetRpType" value="${data.lostPetRpType}">
                      </p>
                      <p>
                          <label for="lostPetRpCh">寵物特徵</label>
                          <input type="text" name="lostPetRpCh" id="lostPetRpCh" value="${data.lostPetRpCh}">
                      </p>
                      <p>
                          <label for="lostPetRpStat">案件狀態</label>
                          <select name="lostPetRpStat" id="lostPetRpStat" class="smalltext">
                                <option value="">-- 請選擇狀態 --</option>
                                <option value="0">進行中</option>
                                <option value="1">已找到</option>
                                <option value="2">未找到，已結案</option>
                          </select>
                      </p>
                      <p class="uploadimgbtn_brfore">
                          <label>寵物照片</label>
                          <span id="imageShow" style="background-image: url('./img/lostrp/${data.lostPetRpImg}');"></span>
                          <label class="uploadimg_btn">
                              <input type="file" id="lostPetRpImg" style="display:none;" name="lostPetRpImg" multiple
                                  accept="image/*">
                              <i class="fa fa-photo"></i> 更改圖片
                          </label>
                          <span class="imageText">更換圖片</span>
                      </p>
                      <div>
                          <button id="rpbtn" class="btn darkgreen nav__link"  ><span class="titleFont">
                                  送出資料
                              </span>
                              <div class="border"></div>
                              <div class="border"></div>
                              <div class="border"></div>
                              <div class="border"></div>
                          </button>
                      </div>
                  </fieldset>
              </form>
              <div id="lightBtn">
                  <img src="./img/lightBoxClose.png" class="action" data-dialog-close>
              </div>
            </div>
          `;
          $("#lostform").remove();
          $("#lostform_cus").append(html);
          $("#lostform_cus")
            .fadeIn()
            .css("display", "flex");

          // 燈箱關閉按鈕
          $("#lightBtn").click(function() {
            $("#lostform_cus")
              .fadeOut()
              .css("display", "none");
          });
          $("#lostclose").click(function(e) {
            $("#lostform_cus")
              .fadeOut()
              .css("display", "none");
          });

          // 輸入地址
          document.getElementById("lostPetRpLoc").onchange = getAddress;
          var geocoder = new google.maps.Geocoder();
          function getAddress() {
            // alert("測試");
            var address = document.getElementById("lostPetRpLoc").value;
            geocoder.geocode({ address: address }, function(results, status) {
              if (status == "OK") {
                console.log(
                  `${
                    results[0].formatted_address
                  } | ${results[0].geometry.location.lat()} | ${results[0].geometry.location.lng()}`
                );
                document.getElementById("lostPetRpLocAdd").value =
                  results[0].formatted_address;
                document.getElementById(
                  "lostPetRpLoclat"
                ).value = results[0].geometry.location.lat();
                document.getElementById(
                  "lostPetRpLoclng"
                ).value = results[0].geometry.location.lng();
              } else {
                console.log(status);
              }
            });
          }

          // 送出更新表單
          var lostPetRpImg = document.getElementById("lostPetRpImg");
          $("#rpbtn").click(function(e) {
            e.preventDefault();
            var psn = data.lostPetRpNo;
            console.log("寵物遺失編號"+psn+"更新");
            var formData = new FormData();
            formData.append("lostPetRpNo", psn);
            formData.append("lostPetRpName", $("#lostPetRpName").val());
            formData.append("lostPetRpCh", $("#lostPetRpCh").val());
            formData.append("lostPetRpLoc", $("#lostPetRpLoc").val());
            formData.append("lostPetRpLDate", $("#lostPetRpLDate").val());
            formData.append("lostPetRpType", $("#lostPetRpType").val());
            formData.append("lostPetRpStat", $("#lostPetRpStat").val());
            formData.append("lostPetRpLoclat", $("#lostPetRpLoclat").val());
            formData.append("lostPetRpLoclng", $("#lostPetRpLoclng").val());
            formData.append("lostPetRpLocAdd", $("#lostPetRpLocAdd").val());
            formData.append("lostPetRpImg", lostPetRpImg.files[0]);
            $.ajax({
              type: "POST",
              url: "./php/map_MClostrpedit.php",
              cache: false,
              contentType: false,
              processData: false,
              data: formData,
              success: function(data) {
                if (data.indexOf("ok") != -1) {
                  alert("更新成功");
                  getlostrpList();
                  $("#lostform_cus")
                    .fadeOut()
                    .css("display", "none");
                } else {
                  alert("新增失敗");
                }
                getlostrpList();
              },
              error: function(xhr) {
                alert(xhr.Message);
              }
            });
          });

          // 燈箱顯示圖片
          let imageShow = document.getElementById('imageShow');
          //document屬性files,會是陣列
          lostPetRpImg.addEventListener('change', function () {
              var file = lostPetRpImg.files[0];
              var fileReader = new FileReader();
              fileReader.readAsDataURL(file);
              fileReader.addEventListener("load", function (e) {
                  imageShow.style.backgroundImage = `url(${e.target.result})`;
              });
          });
        },
        error: function(xhr) {
          alert(xhr.Message);
        }
      });
    });
  }
  
});
