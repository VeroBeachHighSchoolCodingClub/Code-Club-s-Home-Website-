$(document).ready(function(){

var windowWidth = $(window).width();
var nav = document.getElementById("navBar");
var navStick = nav.offsetTop;
var pic = $('.box');
var height = window.innerHeight;
var width = window.innerWidth;

// Projects functions

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


  if (width > 1800) {
    pic.addClass('col-xs-3');
  } else {
    pic.addClass('col-xs-5');
  }


  /***  Home Console Styles ***/

  var TxtType = function(el, toRotate, period) {
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = 0;
    this.period = parseInt(period, 10) || 2000;
    this.txt = '';
    this.tick();
    this.isDeleting = false;
};

TxtType.prototype.tick = function() {
    var i = this.loopNum % this.toRotate.length;
    var fullTxt = this.toRotate[i];

    if (this.isDeleting) {
    this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
    this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

    var that = this;
    var delta = 200 - Math.random() * 100;

    if (this.isDeleting) { 
      delta /= 2; 
    }

    if (!this.isDeleting && this.txt === fullTxt) {
      delta = this.period;
      this.isDeleting = true;
    } else if (this.isDeleting && this.txt === '') {
      this.isDeleting = false;
      this.loopNum++;
      delta = 500;
    }

    setTimeout(function() {
      that.tick();
    }, delta);
};

window.onload = function() {
    var elements = document.getElementsByClassName('typewrite');
    for (var i=0; i<elements.length; i++) {
        var toRotate = elements[i].getAttribute('data-type');
        var period = elements[i].getAttribute('data-period');
        if (toRotate) {
          new TxtType(elements[i], JSON.parse(toRotate), period);
        }
    }
    // INJECT CSS
    var css = document.createElement("style");
    css.type = "text/css";
    css.innerHTML = ".typewrite > .wrap { border-right: 0.25em solid #fff}";
    document.body.appendChild(css);
};

// Nav Bar function

  // if (windowWidth > 575) {
  //   window.onscroll = function() {stickyNav()};

  //   function stickyNav() {
  //     if (window.pageYOffset > navStick) {
  //       nav.classList.add("stickyNav")
  //     } else {
  //       nav.classList.remove("stickyNav");
  //     }
  //   }
  // }

});
