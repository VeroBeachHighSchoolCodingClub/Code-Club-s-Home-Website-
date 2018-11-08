$(document).ready(function(){
  console.log('javascript connected');

  var pic1 = $('#ePics1');
  var pic2 = $('#ePics2');
  var indPic1 = $('#ip1');
  var indPic2 = $('#ip2');
  var p1Content = $('#p1Content');
  var p2Content = $('#p2Content');
  var tp1 = 'tps1';
  var tp2 = 'tps2';
  var cE = 'clearE';
  var p1Con = 'p1Content';
  var p2Con = 'p2Content';
  var p1s = 'pics1';
  var p2s = 'pics2';

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

});
