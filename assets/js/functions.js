//$( document ).ready(function() {});

$(window).scroll(function(){
  youtubeVidScroll();
});

function youtubeVidScroll(){
  var yScroll = $(window).scrollTop();

  $('.video-strip').css('background-position', 'center -'+ yScroll +'px');

}
