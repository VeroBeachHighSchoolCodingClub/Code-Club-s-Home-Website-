$(document).ready(function(){

var windowWidth = $(window).width();
console.log(windowWidth);


if (windowWidth > 1060) {

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
    over1(t){
      this.el.on('mouseover click', function() {
        setTimeout(function(){
          t.el.removeClass(t.ps);
          t.el.addClass(t.tp);
          t.pContent.removeClass(t.cE);
          t.pContent.addClass(t.pCon);
          t.indPic.removeClass('ip1');
          t.indPic.addClass('tip1');
        }, 350)
      });
    }
    out1(t) {
      this.el.on('mouseout dblclick', function() {
        setTimeout(function(){
          t.el.removeClass(t.tp);
          t.el.addClass(t.ps);
          t.pContent.removeClass(t.pCon);
          t.pContent.addClass(t.cE);
          t.indPic.removeClass('tip1');
          t.indPic.addClass('ip1');
        }, 350);
      });
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
    over2(t){
      this.el.on('mouseover click', function() {
        setTimeout(function(){
          t.el.removeClass(t.ps);
          t.el.addClass(t.tp);
          t.pContent.removeClass(t.cE);
          t.pContent.addClass(t.pCon);
          t.indPic.removeClass('ip2');
          t.indPic.addClass('tip2');
        }, 350)
      });
    }
    
    out2(t) {
      this.el.on('mouseout dblclick', function() {
        setTimeout(function(){
          t.el.removeClass(t.tp);
          t.el.addClass(t.ps);
          t.pContent.removeClass(t.pCon);
          t.pContent.addClass(t.cE);
          t.indPic.removeClass('tip2');
          t.indPic.addClass('ip2');
        }, 350);
      });
    }
  }

  var pic1 = new Pic1(1);
  pic1.over1(pic1);
  pic1.out1(pic1);
  var pic2 = new Pic2(2);
  pic2.over2(pic2);
  pic2.out2(pic2);
  var pic3 = new Pic1(3);
  pic3.over1(pic3);
  pic3.out1(pic3);
  var pic4 = new Pic2(4);
  pic4.over2(pic4);
  pic4.out2(pic4);

}



// var nav = document.getElementById("navBar");
// var navStick = nav.offsetTop;


//   window.onscroll = function() {stickyNav()};

//   function stickyNav() {
//     if (window.pageYOffset >= navStick) {
//       nav.classList.add("stickyNav")
//     } else {
//       nav.classList.remove("stickyNav");
//     }
//   }


});
