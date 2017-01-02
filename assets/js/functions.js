$( document ).ready(function() {
  mentoringBubbleClick();
});

function parallaxAbout() {

  var st = $(window).scrollTop();
  var $hero = $('.hero');
  var $leadLine = $('.lead-line');
  var $blank = $('.blank');

  $blank.css({
    'transform' : 'translate(0px, ' + st /4 + 'px)'
  })

  $hero.css({
    'transform' : 'translate(0px, ' + st /2 + 'px)'
  })

}

$(window).scroll(function(){
  youtubeVidScroll();
  startMentoring();
  //teste();
  horizontalScroll();
  parallaxAbout();
});

function horizontalScroll() {
  var headerWidth = $('header').width();
  var nb_entities = $('section').length;
  var widthWindow = $(window).width() - headerWidth;
  var leftValue;
  var hScroll = $(window).scrollLeft();

}

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
  //teste();
});

function teste(){
  var nb_entities = $('.home-sections').length;

  var gap_entites = 20; // gap de scroll entre entites en vh
  var vh = $(window).height();
  var th = $('body').height();
  var st = $(window).scrollTop();
  var avancee = st + vh - (th - (nb_entities)*vh - (nb_entities-1)*gap_entites*vh/100); // avanc�e de scroll �

  console.log("scrollTop = %d", (nb_entities));
  console.log("windowH = %d", ($(window).height()));
  console.log("res = %d", (avancee));

  $('.home-sections').each(function(index) {
    if (avancee<=0) {
      // pas encore visible
      $(this).css('top','100vh');
      $(this).removeClass('visible');
    }
    else if (avancee >= vh) {
      // totalement up
      $(this).css('top',0);
      avancee -= vh;
      avancee -= vh * gap_entites / 100;
      if (avancee < vh) {
        $(this).addClass('visible');
        active_idx = index+1;
      }
      else
        $(this).removeClass('visible');
    }
    else {
      // partiellement visible
      $(this).css('top',Math.floor(vh-avancee)+'px');
      if (avancee>=vh/2)
        active_idx = index+1;
      avancee = 0;
      $(this).addClass('visible');
    }
  });

  $('.youtube').css('top',Math.floor(vh-avancee)+'px');
}

$(window).resize(function(){
  //startFullScreen();
});

function startMentoring(){

  var wScroll = $(window).scrollTop();
  if($('section.mentoring').offset().top - 500 < wScroll){
    $('.faces').addClass('launched');
  }

}

function youtubeVidScroll(){
  var yScroll = $(window).scrollTop();

  if(yScroll > $('.work').offset().top){
    console.log('hi');
  }

}

/*
Função scroll desativada horizontalScroll
$(function() {

   $("body").mousewheel(function(event, delta) {

      this.scrollLeft -= (delta * 80);
      var headerWidth = $('header').width();
      var nb_entities = $('section').length;
      var widthWindow = $(window).width() - headerWidth;
      var leftValue;
      var hScroll = $(window).scrollLeft();


      leftValue = Math.floor(hScroll + headerWidth);
      console.log(Math.floor($('.youtube').offset().left));

      $('.about').css('left', leftValue + 'px')
      console.log(Math.floor($('.youtube').offset().left));
      console.log(hScroll);

      $('section').each(function( index ) {
        console.log($(this));

        if(leftValue >= Math.floor($(this).offset().left)){
          $(this).css('left', leftValue + 'px');
          $(this).addClass('locked');
        }

        //$('.mentoring').css('left', leftValue + 'px');

      });

      event.preventDefault();

   });

});
*/


/*
function startFullScreen(){

  var headerWidth = $('header').width();
  var nb_entities = $('section').length;
  var widthWindow = $(window).width() - headerWidth;
  var leftValue;

  //$('.home-wrap').css('height', $(window).height());


  //multiplica o tamanho de uma tela pela quantidade de sections
  var fullPageWidth = widthWindow * nb_entities;
  $('.home-wrap').css('width', + fullPageWidth + 'px')


  $( "section" ).each(function( index ) {
    //todos as sections recebem o mesmo width
    $(this).css('width', + widthWindow + 'px')
    //todos as sections recebem o mesmo heigth (altura da window)
    $(this).css('height', $(window).height());

    //seta o left das sections (quanto maior o index, maior o left para a div ficar fora do window)
    leftValue = (widthWindow * index) + headerWidth;
    $(this).css('left', + leftValue + 'px')

  });

}
*/
