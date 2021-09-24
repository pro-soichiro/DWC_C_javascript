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

// クリックイベントによって前回の処理が行われるようにする
$(function (){
  $('.box2').slideDown();
  $('.box2').on('click',function(){
    $('.box2').css({
      'background-color': '#0000FF',
      'width': '200px',
      'height': '100px'
    }).slideUp();
  });
});

