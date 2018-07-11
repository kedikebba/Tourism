$(document).ready(function () {

  var $item = $('.item');
  var $wHeight = $(window).height();

  $item.height($wHeight);
  $item.addClass('full-screen');

  $('.carousel img').each(function() {
    var $src = $(this).attr('src');
    var $color = $(this).attr('data-color');
    $(this).parent().css({
      'background-image' : 'url(' + $src + ')',
      'background-color' : $color
      // 'linear-gradient( rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), '
    });
    $(this).remove();
  });

  $(window).on('resize', function (){
    $wHeight = $(window).height();
    $item.height($wHeight);
  });
  // $('video').playbackRate = 1.5;


});
