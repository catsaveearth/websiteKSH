


function myFunction(x) {
  x.classList.toggle("change");
}

function openNav() {
  document.getElementById("myNav").style.height = "100%";
}

function closeNav() {
  document.getElementById("myNav").style.height = "0%";
}

function myFunction(x) {
  x.classList.toggle("change");
}



//햄버거메뉴 색깔 바뀌는거







//스크롤 인디케이트
window.onscroll = function() {myFunction()};

function myFunction() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("myBar").style.width = scrolled + "%";
}









//부드러운 스크롤 지정
$(document).ready(function() {
  $('#btn1').click(function() {
    var offset = $('#main').offset(); //선택한 태그의 위치를 반환
    //animate()메서드를 이용해서 선택한 태그의 스크롤 위치를 지정해서 0.4초 동안 부드럽게 해당 위치로 이동함
    $('html').animate({
      scrollTop: offset.top
    }, 650);
  });
});
$(document).ready(function() {
  $('#btn2').click(function() {
    var offset = $('#current').offset(); //선택한 태그의 위치를 반환
    //animate()메서드를 이용해서 선택한 태그의 스크롤 위치를 지정해서 0.4초 동안 부드럽게 해당 위치로 이동함
    $('html').animate({
      scrollTop: offset.top
    }, 650);
  });
});
$(document).ready(function() {
  $('#btn3').click(function() {
    var offset = $('#hobby').offset(); //선택한 태그의 위치를 반환
    //animate()메서드를 이용해서 선택한 태그의 스크롤 위치를 지정해서 0.4초 동안 부드럽게 해당 위치로 이동함
    $('html').animate({
      scrollTop: offset.top
    }, 650);
  });
});
$(document).ready(function() {
  $('#btn4').click(function() {
    var offset = $('#ex').offset(); //선택한 태그의 위치를 반환
    //animate()메서드를 이용해서 선택한 태그의 스크롤 위치를 지정해서 0.4초 동안 부드럽게 해당 위치로 이동함
    $('html').animate({
      scrollTop: offset.top
    }, 650);
  });
});
$(document).ready(function() {
  $('#btn5').click(function() {
    var offset = $('#contact').offset(); //선택한 태그의 위치를 반환
    //animate()메서드를 이용해서 선택한 태그의 스크롤 위치를 지정해서 0.4초 동안 부드럽게 해당 위치로 이동함
    $('html').animate({
      scrollTop: offset.top
    }, 650);
  });
});





//사진 넘어가는거
var slideIndex = 1;
showSlides(slideIndex);


// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}



// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}


function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}
