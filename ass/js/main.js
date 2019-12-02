// header
$(document).ready(function () {
  var pull = $('#pull');
  menu = $('nav ul');
  menuHeight = menu.height();

  $(pull).on('click', function (e) {
    e.preventDefault();
    menu.slideToggle();
  });
});

$(window).resize(function () {
  var w = $(window).width();
  if (w > 980 && menu.is(':hidden')) {
    menu.removeAttr('style');
  }
});



$(document).ready(function () {
  // Hàm active tab nào đó
  function activeTab(obj) {
    // Xóa class active tất cả các tab
    $('.tab-wrapper ul li').removeClass('active');

    // Thêm class active vòa tab đang click
    $(obj).addClass('active');

    // Lấy href của tab để show content tương ứng
    var id = $(obj).find('a').attr('href');

    // Ẩn hết nội dung các tab đang hiển thị
    $('.tab-item').hide();

    // Hiển thị nội dung của tab hiện tại
    $(id).show();
  }

  // Sự kiện click đổi tab
  $('.tab li').click(function () {
    activeTab(this);
    return false;
  });

  // Active tab đầu tiên khi trang web được chạy
  activeTab($('.tab li:first-child'));
});


// list products






