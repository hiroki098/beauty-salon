$(function(){

//ハンバーガーメニュー
$('#menu-btn').click(function() {
  $(this).toggleClass('active');

  if ($(this).hasClass('active')) {
    $('.slides__gnav-list').addClass('active');
  } else {
    $('.slides__gnav-list').removeClass('active');
  }
});



});
