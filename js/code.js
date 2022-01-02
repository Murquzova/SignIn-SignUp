$(document).on('keydown', function (event) {
  if (event.keyCode == 9) {
    event.preventDefault();
  }
});
$('.inputs input').on('input', function (e) {
  if (
    $(this).val(
      $(this)
        .val()
        .replace(/[^0-9\.]/g, '')
    )
  ) {
    if ($(this).val() != '') {
      $(this).next('input').focus();
    }
  }
});
