function indexForum(){
    $.ajax({
        url: './php/getIndexForum.php',
        type: 'GET',
        success(data){
            if(data.indexOf("error")==-1){
                var postInfo= JSON.parse(data);
                var forumCards= document.querySelectorAll("section.forum div.cards div.card");
                for(var i=0; i<forumCards.length; i++){
                    for(var j=0; j<forumCards[i].querySelectorAll("a").length; j++){
                        forumCards[i].querySelectorAll("a")[j].href=`./post_content.php?piNo=${postInfo[i].piNo}`;
                    }
                    forumCards[i].classList.add(`No${postInfo[i].piNo}`);
                    forumCards[i].querySelector("a img").src= postInfo[i].piTitlePic;
                    forumCards[i].querySelector("div.text span").innerText= postInfo[i].piTime.split(" ")[0];
                    forumCards[i].querySelector("div.text a h4").innerText= postInfo[i].piTitle;
                    forumCards[i].querySelector("div.text a:last-child").innerText= postInfo[i].piGeneralContent;
                }
            }else{
                alert("error");
            }
        },
        error(data){
            alert(data);
        }
    });
}
indexForum();