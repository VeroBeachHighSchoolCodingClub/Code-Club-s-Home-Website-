$(document).ready(function(){
  console.log('javascript connected');

class Pic1 {
  constructor(n) {
    this.el = $('#ePics' + n);
    this.indPic = $('#ip' + n);
    this.pContent = $('#p' + n + 'Content');
    this.tp = 'tps1';
    this.pCon = 'p1Content';
    this.ps = 'pics1';
    this.cE = 'clearE';
  }
}
class Pic2 {
  constructor(n) {
    this.el = $('#ePics' + n);
    this.indPic = $('#ip' + n);
    this.pContent = $('#p' + n + 'Content');
    this.tp = 'tps2';
    this.pCon = 'p2Content';
    this.ps = 'pics2';
    this.cE = 'clearE';
  }
}

var pic1 = new Pic1(1);

function over(){

    pic1.el.on('mouseover click', function() {
      setTimeout(function(){
        pic1.el.removeClass(pic1.ps);
        pic1.el.addClass(pic1.tp);
        pic1.pContent.removeClass(pic1.cE);
        pic1.pContent.addClass(pic1.pCon);
        pic1.indPic.removeClass('ip1');
        pic1.indPic.addClass('tip1');
        console.log($("#ePics1").css("paddingTop"));
      }, 350)
    });
}

function out() {
    pic1.el.on('mouseout dblclick', function() {
      setTimeout(function(){
        pic1.el.removeClass(pic1.tp);
        pic1.el.addClass(pic1.ps);
        pic1.pContent.removeClass(pic1.pCon);
        pic1.pContent.addClass(pic1.cE);
        pic1.indPic.removeClass('tip1');
        pic1.indPic.addClass('ip1');
      }, 350);
    });
}

over();
out();

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
