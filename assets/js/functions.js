var win = $(window);

var allMods;

$( document ).ready(function() {
  mentoringBubbleClick();

  allMods = $('.workRec');

  allMods.each(function(i, el) {
    var el = $(el);
    if (el.visible(true)) {
      el.addClass("already-visible");
    }
  });
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
  workLandingElements();
  startMentoring();
  //teste();  
  parallaxAbout();
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
  workLandingElements();
  startMentoring();
});

function startMentoring(){

  var wScroll = $(window).scrollTop();
  if($('section.mentoring').offset().top - 500 < wScroll){
    $('.faces').addClass('launched');
  }

}

function workLandingElements(){

  allMods.each(function(i, el) {
    var el = $(el);
    if (el.visible(true)) {
      if(i % 2 == 0)
        el.addClass("come-in");
      else
        el.addClass("come-in-slow");
    }
  });

}

(function($) {

  /**
   * Copyright 2012, Digital Fusion
   * Licensed under the MIT license.
   * http://teamdf.com/jquery-plugins/license/
   *
   * @author Sam Sehnert
   * @desc A small plugin that checks whether elements are within
   *     the user visible viewport of a web browser.
   *     only accounts for vertical position, not horizontal.
   */

  $.fn.visible = function(partial) {

      var $t            = $(this),
          $w            = $(window),
          viewTop       = $w.scrollTop(),
          viewBottom    = viewTop + $w.height(),
          _top          = $t.offset().top,
          _bottom       = _top + $t.height(),
          compareTop    = partial === true ? _bottom : _top,
          compareBottom = partial === true ? _top : _bottom;

    return ((compareBottom <= viewBottom) && (compareTop >= viewTop));

  };

})(jQuery);


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
