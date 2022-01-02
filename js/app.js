$(' .btn').click(function () {
  $('.container').toggleClass('log-in');
});

$('input')
  .focus(function () {
    $(this).parents('.input-box').addClass('shadow-add');
    $(this).parents('.input-box').find('i').addClass('color-add');
  })
  .blur(function () {
    $(this).parents('.input-box').removeClass('shadow-add');
    $(this).parents('.input-box').find('i').removeClass('color-add');
  });
