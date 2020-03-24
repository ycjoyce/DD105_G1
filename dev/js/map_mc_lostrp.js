$(document).ready(function() {
  $.ajax({
    type: "get",
    url: "./php/map_mc_lostrp.php",
    dataType: "json",
    success: function(data) {
      // console.log(data);
      let html = "";
      for (var i = 0; i < data.length; i++) {
        if (data[i].lostPetRpStat == 0) {
          html += `
            <tr>
                <td>${data[i].lostPetRpNo}</td>
                <td>${data[i].lostPetRpDate}</td>
                <td class="memRWD_992">${data[i].lostPetRpLoc}</td>
                <td class="memRWD_992">${data[i].lostPetRpLDate}</td>
                <td>${data[i].lostPetRpName}</td>
                <td class="memRWD_992">${data[i].lostPetRpType}</td>
                <td class="memRWD_992">進行中</td>
                <td class="memRWD_992"><img src="./img/lostrp/${data[i].lostPetRpImg}"></td>
                <td><a href="#" class="updatebtn_s">編輯</a><a href="#" class="updatebtn_s">結案</a></td>
            </tr>`;
        }else if(data[i].lostPetRpStat == 1){
            html += `
            <tr>
                <td>${data[i].lostPetRpNo}</td>
                <td>${data[i].lostPetRpDate}</td>
                <td class="memRWD_992">${data[i].lostPetRpLoc}</td>
                <td class="memRWD_992">${data[i].lostPetRpLDate}</td>
                <td>${data[i].lostPetRpName}</td>
                <td class="memRWD_992">${data[i].lostPetRpType}</td>
                <td class="memRWD_992">已找到</td>
                <td class="memRWD_992"><img src="./img/lostrp/${data[i].lostPetRpImg}"></td>
                <td><a href="#" class="updatebtn_s">編輯</a><a href="#" class="updatebtn_s">結案</a></td>
            </tr>`;
        }else{
            {
                html += `
                <tr>
                    <td>${data[i].lostPetRpNo}</td>
                    <td>${data[i].lostPetRpDate}</td>
                    <td class="memRWD_992">${data[i].lostPetRpLoc}</td>
                    <td class="memRWD_992">${data[i].lostPetRpLDate}</td>
                    <td>${data[i].lostPetRpName}</td>
                    <td class="memRWD_992">${data[i].lostPetRpType}</td>
                    <td class="memRWD_992">未找到，結案</td>
                    <td class="memRWD_992"><img src="./img/lostrp/${data[i].lostPetRpImg}"></td>
                    <td><a href="#" class="updatebtn_s">編輯</a><a href="#" class="updatebtn_s">結案</a></td>
                </tr>`;
            }
        }
      }
      $(".memTable_content")
        .children("table")
        .append(html);
    },
    error: function(xhr) {
      // alert("請上傳圖片");
      // var err = eval("(" + xhr.responseText + ")");
      alert(xhr.Message);
    }
  });
});
