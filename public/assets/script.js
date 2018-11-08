$(document).ready(function(){
  console.log('javascript connected');

  var pic1 = $('#ePics1');
  var indPic = $('#ip1');
  var pContent = $('#p1Content');
  var tp1 = 'tempPicStyle';
  var cE = 'clearE';
  var pCon = 'pContent';
  var p1s = 'pics1'

  // pic1.hover(function() {
  //   pic1.removeClass(p1s);
  //   pic1.addClass(tp1);
  //   pContent.removeClass(cE);
  //   pContent.addClass(pCon);
  // }, function() {
  //   pic1.removeClass(tp1);
  //   pic1.addClass(p1s);
  //   pContent.removeClass(pCon);
  //   pContent.addClass(cE);
  // });

  pic1.on('mouseover click', function() {
    pic1.removeClass(p1s);
    pic1.addClass(tp1);
    pContent.removeClass(cE);
    pContent.addClass(pCon);
  });
  pic1.on('mouseout dblclick', function() {
    pic1.removeClass(tp1);
    pic1.addClass(p1s);
    pContent.removeClass(pCon);
    pContent.addClass(cE);
  });

});
