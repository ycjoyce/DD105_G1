var mydata={
    title: "",
    name: "",
    shortcontent: "",
    goal: "",
    firstarticlerow: "",
    secondarticlerow: "",
    thirdarticlerow: "",
  };
  var vm=new Vue({
    el: "#app",
    data: mydata
  });



  $(function(){
    function preview(input) {

        if (input.files && input.files[0]) {
            var reader = new FileReader();
            
            reader.onload = function (e) {
                $('.preview').attr('src', e.target.result);
            }
            reader.readAsDataURL(input.files[0]);
        }
    }

    $("body").on("change", ".upl", function (){
        preview(this);
    })
    
})

function img_load(img){
	if(img.files && img.files[0]){
		console.log(img.files);
		var reader = new FileReader();
		reader.onload = function (event) {
      $('#img_upload').css('background-image','url('+event.target.result+')');
      $('span.img_upload').text("重新上傳").css('color','#0f8b5c');
      $('span.img_upload').css('background-color','rgba(255,255,255,0.3)');
		}
		reader.readAsDataURL(img.files[0]);
	}
}

function img_load2(img){
	if(img.files && img.files[0]){
		console.log(img.files);
		var reader = new FileReader();
		reader.onload = function (event) {
			$('#img_upload2').css('background-image','url('+event.target.result+')');
		}
		reader.readAsDataURL(img.files[0]);
	}
}

function img_load3(img){
	if(img.files && img.files[0]){
		console.log(img.files);
		var reader = new FileReader();
		reader.onload = function (event) {
			$('#img_upload3').css('background-image','url('+event.target.result+')');
		}
		reader.readAsDataURL(img.files[0]);
	}
}




function step1()
	{
		document.getElementById('step_1').style.display='none';
		document.getElementById('step_2').style.display='block';
	}
	function step2()
	{
		document.getElementById('step_2').style.display='none';
		document.getElementById('step_3').style.display='block';
  }
  function up2()
	{
		document.getElementById('step_1').style.display='block';
		document.getElementById('step_2').style.display='none';
  }
  

$(document).ready(function(){
  $("#step1").click(function(){
  $(".cardfill").css('display','none');
  $("#app2").css('display','none');
  $(".steponebtn").css('display','none');
  $(".detailbox").css('display','block');
  });

  $("#step2").click(function(){
    $(".cardfill").css('display','block');
    $(".steponebtn").css('display','block');
    $("#app2").css('display','block');
    $(".detailbox").css('display','none');
    });
});




