location.hash="#1";

$(document).ready(function() {
  $('#fullpage').fullpage({
    navigation: false,
    navigationPosition: 'right',
    scrollingSpeed: 400,
    touchSensitivity: 3,
    afterResize: function() {
    },
    onLeave: function(anchorLink, index, slideAnchor, slideIndex) {
    }
  });
});



// 点击进行其他页面跳转
$('.slide-tip.up').on('click', function() {
  $.fn.fullpage.moveSectionUp();
})
$('.slide-tip.down').on('click', function() {
  $.fn.fullpage.moveSectionDown();
})
// |点击进行其他页面跳转