$( document ).ready(function() {
  mentoringBubbleClick();
});

function mentoringBubbleClick(){

  if($(window).width() > 640){
    showBubble();
  }else {
    showModal();
  }

}

function showModal(){
  $('.face').on('click', function(){    
    $(this).addClass('has-bubble-open')
      .siblings().removeClass('has-bubble-open');
  });
}

$('.face').on('click', function(){
  $('.faces:nth-child(3)').addClass('has-bubble-open');
  $this = $(this);
  var parentTop = $this.position().top
  res = (parentTop - 230) * -1;
  $('.faces').css('top', + res  + 'px');

  $(this).addClass('has-bubble-open')
  .siblings().removeClass('has-bubble-open');
});
function showBubble(){
}

$(window).scroll(function(){
  youtubeVidScroll();
  startMentoring();
});

function startMentoring(){

  var wScroll = $(window).scrollTop();
  if($('section.mentoring').offset().top - 500 < wScroll){
    $('.faces').addClass('launched');
  }

}

function youtubeVidScroll(){
  var yScroll = $(window).scrollTop();

  $('.video-strip').css('background-position', 'center -'+ yScroll +'px');

}
