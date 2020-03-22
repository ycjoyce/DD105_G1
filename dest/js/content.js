function getInfo() {
  $.ajax({
    url: "./php/content.php",
    type: "GET",
    success: function($msg) {
      let data = $msg.split(",");
      data.pop();
      console.log(data);

      let htmlStr1 = 
       `<td>${data[0]}</td>
        <td>${data[1]}</td>
        <td>${data[2]}</td>
        <td>${data[3]}</td>
        `;
      $(".account1").append(htmlStr1);

      let htmlStr2 = 
      `<td>${data[5]}</td>
       <td>${data[6]}</td>
       <td>${data[7]}</td>
       <td>${data[8]}</td>
       `;
      $(".account2").append(htmlStr2);

      let htmlStr3 = 
      `<td>${data[10]}</td>
       <td>${data[11]}</td>
       <td>${data[12]}</td>
       <td>${data[13]}</td>
       `;
      $(".account3").append(htmlStr3);
    }
  });
}

window.addEventListener("load", getInfo);
