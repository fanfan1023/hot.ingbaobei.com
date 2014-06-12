window.console && console.log && console.log('源码在这里 https://github.com/ingbaobeigroup/hot.ingbaobei.com ');


// location.hash = "#1";
$(function() {
  // location.hash = "#1";
  $(document).ready(function() {
    $('#fullpage').fullpage({
      navigation: false,
      // navigation: true,
      navigationPosition: 'right',
      scrollingSpeed: 400,
      touchSensitivity: 3,
      afterResize: function() {},
      onLeave: function(anchorLink, index, slideAnchor, slideIndex) {}
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


})


/*
  进行 高质量 jpg加载，
  如果低质量的 jpg 都加载不成功，就不加载高质量的 jpg。
  记得释放内存
*/
var imgs = document.getElementsByTagName('img');
for (var i = imgs.length; i--;) {
  (function() {
    var imgOlrSrc = imgs[i];
    // 进行高质量 jpg 创建加载
    var newImage = function() {
      var img;
      var src = imgOlrSrc.getAttribute('high-src');
      if (src !== undefined && src !== null && src !== "" ) {
        img = document.createElement('img');
        img.onload = function() {
          if (img.width > 0) {
            imgOlrSrc.src = src;
            img = null;
            imgOlrSrc = null;
            src = null;
          }
        }
        img.src = src;
      }
    }

    // 监控加载信息
    imgOlrSrc.onload = function() {
      // console.log('222222');
      if (imgOlrSrc && imgOlrSrc.src === imgOlrSrc.getAttribute('high-src')) {
        imgOlrSrc.onload = null;
        newImage = null;
      } else {
        newImage && newImage();
        newImage = null;
      }
    }

    // 如果低质量的 jpg 都加载不成功，就不加载高质量的 jpg。
    if (imgOlrSrc.width > 0) {
      imgOlrSrc.onload && imgOlrSrc.onload();
    } else {
      imgOlrSrc.src = imgOlrSrc.src + "?&" + (new Date()).getTime();
    }
  })();
}