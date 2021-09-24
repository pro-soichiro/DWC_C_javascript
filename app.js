$(function(){
  $('.box1').slideDown();
  setTimeout(function(){
    $('.box1').css({
      'background-color':'#0000FF',
      'height': '100px'
    });
  },1000);
  setTimeout(function(){
    $('.box1').slideUp();
  },2000);
});
