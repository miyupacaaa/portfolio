$(function() {

  // ヘッダーの背景つけ外し
  var $win = $(window),
      $fv = $('#mainvisual'),
      $header = $('.header')
      fvHeight = $fv.outerHeight(),
      fixedClass = 'fixed';

$win.on('load scroll',function(){
  var value = $(this).scrollTop();

      if ( value > fvHeight -80) {
        $header.addClass(fixedClass);
        
      } else {
        $header.removeClass(fixedClass);
        
      }

  });

   // ページ内スクロール
   $('a[href^="#"]').click(function(){
    const time = 500;
    const headerHight = 80;
    var href= $(this).attr("href");
    var target = $(href == "#" ? 'html' : href);

    var distance = target.offset().top - headerHight;

    $("html, body").animate({scrollTop:distance}, time, "swing");
    return false;
  });


  // TOPに戻るボタン
  const pagetop = $('#page_top');
  // ボタン非表示
  pagetop.hide();
  // 100px スクロールしたらボタン表示
  $(window).scroll(function () {
      if ($(this).scrollTop() > 100) {
          pagetop.fadeIn();
      } else {
          pagetop.fadeOut();
      }
  });
  pagetop.click(function () {
      $('body, html').animate({ scrollTop: 0 }, 500);
      return false;
  });

  // フェードイン
  $win.scroll(function (){
    $('.fadein').each(function(){
        var elemPos = $(this).offset().top,
            scroll = $win.scrollTop(),
            windowHeight = $win.height();
          if (scroll > elemPos - windowHeight + 100){
              $(this).addClass('scrollin');
            }
        });
    });

})
