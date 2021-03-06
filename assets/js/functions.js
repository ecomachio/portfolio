var win = $(window);

var allMods;

$( document ).ready(function() {

  //anchor scroll
  var hashTagActive = "";
  $(".scroll").on("click touchstart" , function (event) {
      if(hashTagActive != this.hash) { //this will prevent if the user click several times the same link to freeze the scroll.
          event.preventDefault();
          //calculate destination place
          var dest = 0;

          if(this.hash == "#contato") {
              dest = $(document).height()-$(window).height();
          }else if ($(this.hash).offset().top > $(document).height() - $(window).height()) {
              dest = $(document).height() - $(window).height();
          } else {
              dest = $(this.hash).offset().top;
          }
          //go to destination
          $('html,body').animate({
              scrollTop: dest
          }, 2000, 'swing');
          hashTagActive = this.hash;
      }
  });

  articlesBubbleClick();

  allMods = $('.workRec');
  postMods = $('blockquote img');
  postMods2 = $('blockquote p');

  checkIfAlreadyVisible(allMods);
  checkIfAlreadyVisible(postMods);
  checkIfAlreadyVisible(postMods2);

});

function checkIfAlreadyVisible(arrayDom){
  arrayDom.each(function(i, el) {
    var el = $(el);
    if (el.visible(true)) {
      el.addClass("already-visible");
    }
  });
}

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

function parallaxYoutube(){

}

$(window).scroll(function(){
  workLandingElements(allMods);
  workLandingElements(postMods);
  workLandingElements(postMods2);
  //startarticles();
  //teste();
  parallaxAbout();
  parallaxYoutube();
});

function articlesBubbleClick(){

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
  //workLandingElements();
  //startarticles();
});

function startarticles(){

  var wScroll = $(window).scrollTop();
  if($('section.articles').offset().top - 500 < wScroll){
    $('.faces').addClass('launched');
  }

}

function workLandingElements(arrayDom){

  arrayDom.each(function(i, el) {
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

        //$('.articles').css('left', leftValue + 'px');

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
