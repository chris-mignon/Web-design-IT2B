
function changePic1() {
    // create a new object with the elememt id
 var pic1 = document.getElementById("img1");
 pic1.src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVADLZJ58Ny62zupO5yckWFmUdtkmjJjmhHyk4gUTmYA&s=10  ";
 changeTitle("title1");
 changeContent("content1");
}
 
// method to change the title of the article
function changeTitle(elementID){
var title = document.getElementById(elementID);
title.textContent = "Nissan GT-R";
}

//method to change the contents of the article
function changeContent(elementID){
  var ArticleContent = document.getElementById(elementID);
  ArticleContent.innerHTML="<p> <strong style=\"color: aqua;\">The Nissan GT-R</strong> (Gran Turismo–Racing; model code: R35; Japanese: 日産・GT-R; Nissan GT-R) is a sports car, built by Japanese marque Nissan from 2007 to 2025.</strong></p>";
}