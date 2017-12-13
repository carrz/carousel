$(document).ready(function(){

})

var imgItems = $('.slider li').length;
var imgPos = 1;

for(i=1; i<=imgItems; i++){
  $('.pagination').append('<li><span class="fa fa-circle"></span></li>');
}

$('.slider li').hide();
$('.slider li:first').show();
$('.pagination li:first').css({'color': '#FF007F'})

$('.pagination li').click(pagination);
$('.right span').click(nextSlider);
$('.left span').click(prevSlider);
setInterval(function(){
  nextSlider();
}, 2000);

function pagination(){
  var pagNumber = $(this).index() + 1;
  $('.slider li').hide();
  $('.slider li:nth-child('+ pagNumber +')').fadeIn();
  $('.pagination li').css({'color': '#000'});
  $(this).css({'color': '#FF007F'});
}

function nextSlider(){
  if(imgPos >= imgItems){
    imgPos = 1;
  }else{
    imgPos++;
  }
  $('.slider li').hide();
  $('.slider li:nth-child('+ imgPos +')').fadeIn();
  $('.pagination li').css({'color': '#000'});
  $('.pagination li:nth-child('+ imgPos +')').css({'color': '#FF007F'});
}

function prevSlider(){
  if(imgPos <= 1){
    imgPos = imgItems;
  }else{
    imgPos--;
  }
  $('.slider li').hide();
  $('.slider li:nth-child('+ imgPos +')').fadeIn();
  $('.pagination li').css({'color': '#000'});
  $('.pagination li:nth-child('+ imgPos +')').css({'color': '#FF007F'});
}