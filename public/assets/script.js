$(document).ready(function(){
  console.log('javascript connected');

  var pic1 = $('#ePics1');
  var pic2 = $('#ePics2');
  var pic3 = $('#ePics3');
  var pic4 = $('#ePics4');
  var indPic1 = $('#ip1');
  var indPic2 = $('#ip2');
  var indPic3 = $('#ip3');
  var indPic4 = $('#ip4');
  var p1Content = $('#p1Content');
  var p2Content = $('#p2Content');
  var p3Content = $('#p3Content');
  var p4Content = $('#p4Content');
  var tp1 = 'tps1';
  var tp2 = 'tps2';
  var cE = 'clearE';
  var p1Con = 'p1Content';
  var p2Con = 'p2Content';
  var p1s = 'pics1';
  var p2s = 'pics2';
  var nav = document.getElementById("navBar");
  var navStick = nav.offsetTop;

  pic1.on('mouseover click', function() {
    pic1.removeClass(p1s);
    pic1.addClass(tp1);
    p1Content.removeClass(cE);
    p1Content.addClass(p1Con);
    indPic1.removeClass('ip1');
    indPic1.addClass('tip1')
  });
  pic1.on('mouseout dblclick', function() {
    pic1.removeClass(tp1);
    pic1.addClass(p1s);
    p1Content.removeClass(p1Con);
    p1Content.addClass(cE);
    indPic1.removeClass('tip1');
    indPic1.addClass('ip1')
  });

  pic2.on('mouseover click', function() {
    pic2.removeClass(p2s);
    pic2.addClass(tp2);
    p2Content.removeClass(cE);
    p2Content.addClass(p2Con);
    indPic2.removeClass('ip2');
    indPic2.addClass('tip2')
  });
  pic2.on('mouseout dblclick', function() {
    pic2.removeClass(tp2);
    pic2.addClass(p2s);
    p2Content.removeClass(p2Con);
    p2Content.addClass(cE);
    indPic2.removeClass('tip2');
    indPic2.addClass('ip2')
  });

  pic3.on('mouseover click', function() {
    pic3.removeClass(p1s);
    pic3.addClass(tp1);
    p3Content.removeClass(cE);
    p3Content.addClass(p1Con);
    indPic3.removeClass('ip1');
    indPic3.addClass('tip1')
  });
  pic3.on('mouseout dblclick', function() {
    pic3.removeClass(tp1);
    pic3.addClass(p1s);
    p3Content.removeClass(p1Con);
    p3Content.addClass(cE);
    indPic3.removeClass('tip1');
    indPic3.addClass('ip1')
  });

  pic4.on('mouseover click', function() {
    pic4.removeClass(p2s);
    pic4.addClass(tp2);
    p4Content.removeClass(cE);
    p4Content.addClass(p2Con);
    indPic4.removeClass('ip2');
    indPic4.addClass('tip2')
  });
  pic4.on('mouseout dblclick', function() {
    pic4.removeClass(tp2);
    pic4.addClass(p2s);
    p4Content.removeClass(p2Con);
    p4Content.addClass(cE);
    indPic4.removeClass('tip2');
    indPic4.addClass('ip2')
  });



  window.onscroll = function() {stickyNav()};

  function stickyNav() {
    if (window.pageYOffset >= navStick) {
      nav.classList.add("stickyNav")
      console.log('hes down under!');
      // nav.addClass('stickyNav');
    } else {
      nav.classList.remove("stickyNav");
      console.log('Ur good.');
      // nav.removeClass('stickyNav');
    }
  }


});
