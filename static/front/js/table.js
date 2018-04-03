var num = 688,num1 = 1688,num2 = 16888,num3 = 5,num4 = 60,num5 = 12450,num6 = 5,num7 = 55,num8 = 900,num9 = 25,num10 = 80,num11 = 452,num12 = 35,num13 = 90,num14 = 680,num15 = 45,num16 = 100,num17 = 17890,num18 = 80,num19 = 240,num20 = 9820,num21 = 50,num22 = 300,num23 = 9570,num24 = 3,num25 = 3,num26 = 15,num27 = 145,num28 = 280,num29 = 7892,num30 = 50,num31 = 668,num32 = 2890,num33 = 3,num34 = 290,num35 = 1460;
var interval = null;
var fn = function (){
    clearInterval(interval);
    interval = setInterval(function () {
        if (num==0&&num1==0&&num2 == 0&&num3 == 0&&num4 == 0&&num5 == 0&&num6 == 0&&num7 == 0&&num8 == 0&&num9 == 0&&num10 == 0&&num11 == 0&&num12 == 0&&num13 == 0&&num14 == 0&&num15 == 0&&num16 == 0&&num17 == 0&&num18 == 0&&num19 == 0&&num20 == 0&&num21 == 0&&num22 == 0&&num23 == 0&&num24 == 0&&num25 == 0&&num26 == 0&&num27 == 0&&num28 == 0&&num29 == 0&&num30 == 0&&num31 == 0&&num32 == 0&&num33 == 0&&num34 == 0&&num35 == 0) {
            clearInterval(interval);
        }
        numDiv.innerHTML = (num *= 1.5).toFixed(2);
        numDiv1.innerHTML = (num1 *= 1.5).toFixed(2);
        numDiv2.innerHTML = (num2 *= 1.5).toFixed(2);
        numDiv3.innerHTML = (num3 *= 1.5).toFixed(2);
        numDiv4.innerHTML = (num4 *= 1.5).toFixed(2);
        numDiv5.innerHTML = (num5 *= 1.5).toFixed(2);
        numDiv6.innerHTML = (num6 *= 1.5).toFixed(2);
        numDiv7.innerHTML = (num7 *= 1.5).toFixed(2);
        numDiv8.innerHTML = (num8 *= 1.5).toFixed(2);
        numDiv9.innerHTML = (num9 *= 1.5).toFixed(2);
        numDiv10.innerHTML = (num10 *= 1.5).toFixed(2);
        numDiv11.innerHTML = (num11 *= 1.5).toFixed(2);
        numDiv12.innerHTML = (num12 *= 1.5).toFixed(2);
        numDiv13.innerHTML = (num13 *= 1.5).toFixed(2);
        numDiv14.innerHTML = (num14 *= 1.5).toFixed(2);
        numDiv15.innerHTML = (num15 *= 1.5).toFixed(2);
        numDiv16.innerHTML = (num16 *= 1.5).toFixed(2);
        numDiv17.innerHTML = (num17 *= 1.5).toFixed(2);
        numDiv18.innerHTML = (num18 *= 1.5).toFixed(2);
        numDiv19.innerHTML = (num19 *= 1.5).toFixed(2);
        numDiv20.innerHTML = (num20 *= 1.5).toFixed(2);
        numDiv21.innerHTML = (num21 *= 1.5).toFixed(2);
        numDiv22.innerHTML = (num22 *= 1.5).toFixed(2);
        numDiv23.innerHTML = (num23 *= 1.5).toFixed(2);
        numDiv24.innerHTML = (num24 *= 1.5).toFixed(2);
        numDiv25.innerHTML = (num25 *= 1.5).toFixed(2);
        numDiv26.innerHTML = (num26 *= 1.5).toFixed(2);
        numDiv27.innerHTML = (num27 *= 1.5).toFixed(2);
        numDiv28.innerHTML = (num28 *= 1.5).toFixed(2);
        numDiv29.innerHTML = (num29 *= 1.5).toFixed(2);
        numDiv30.innerHTML = (num30 *= 1.5).toFixed(2);
        numDiv31.innerHTML = (num31 *= 1.5).toFixed(2);
        numDiv32.innerHTML = (num32 *= 1.5).toFixed(2);
        numDiv33.innerHTML = (num33 *= 1.5).toFixed(2);
        numDiv34.innerHTML = (num34 *= 1.5).toFixed(2);
        numDiv35.innerHTML = (num35 *= 1.5).toFixed(2);

    }, 15000);
    setTimeout(function () {
        num = 688;
        num1 = 1688;
        num2 = 16888;
        num3 = 5;
        num4 = 60;
        num5 = 12450;
        num6 = 5;
        num7 = 55;
        num8 = 900;
        num9 = 25;
        num10 = 80;
        num11 = 452;
        num12 = 35;
        num13 = 90;
        num14 = 680;
        num15 = 45;
        num16 = 100;
        num17 = 17890;
        num18 = 80;
        num19 = 240;
        num20 = 9820;
        num21 = 50;
        num22 = 300;
        num23 = 9570;
        num24 = 3;
        num25 = 3;
        num26 = 15;
        num27 = 145;
        num28 = 280;
        num29 = 7892;
        num30 = 50;
        num31 = 668;
        num32 = 2890;
        num33 = 2890;
        num34 = 2890;
        num35 = 2890;

        fn();
    }, 360 * 1000);
};
fn();




!function(t){var e=function(t)
    {var e=["webkit","Moz","o","ms"],n="";for(var i in e)if(n=e[i]+"Transition",void 0!==t.style[n])return"-"+e[i].toLowerCase()+"-"}
(document.createElement(n)),
    n=function(){function n(e,n){
        this.settings=t.extend(!0,t.fn.PageSwitch.defaults,n||{}),this.element=e,this.init()}
        return n.prototype={
            init:function(){var t=this;t.selectors=t.settings.selectors,t.sections=t.element.find(t.selectors.sections),t.section=t.element.find(t.selectors.section),t.direction="vertical"==t.settings.direction,t.pagesCount=t.getPagesCount(),t.index=t.settings.index>=0&&t.settings.index<t.pagesCount?t.settings.index:0,t.canScroll=!0,t.direction||t._initLayout(),t.settings.autoPlay&&(t.settings.loop=!0,t.timer=null,t._autoPlay()),t.settings.pagination&&t._initPaging()},getPagesCount:function(){return this.section.length},switchLength:function(){return this.direction?this.element.height():this.element.width()},_autoPlay:function(){function t(){e.timer=setTimeout(function(){e.next(),t()},e.settings.interval)}var e=this;t()},_stopPlay:function(){clearTimeout(this.timer)},_initLayout:function(){var t=this,e=100*t.pagesCount+"%",n=(100/t.pagesCount).toFixed(2)+"%";t.sections.width(e),t.section.width(n).css("float","left")},_initPaging:function()
            {var t=this,e=t.selectors.pages.substring(1);t.activeClass=t.selectors.active.substring(1);for(var n="<ul class='"+e+"'>",i=0;i<t.pagesCount;i++)n+="<li></li>";n+="</ul>",t.element.append(n);var s=t.element.find(t.selectors.pages);t.pageItem=s.find("li"),t.pageItem.eq(t.index).addClass(t.activeClass),t.direction?s.addClass("vertical"):s.addClass("horizontal"),t._initEvent()},_initEvent:function(){var e=this;e.element.on("click",e.selectors.pages+" li",function(){e.index=t(this).index(),e._scrollPage()}),e.element.on("mouseover",e.selectors.pages+" li",function(){e._stopPlay()}),e.element.on("mouseout",e.selectors.pages+" li",function(){e._autoPlay()}),e.element.on("mousewheel DOMMouseScroll",function(t){if(e.canScroll){var n=t.originalEvent.wheelDelta||-t.originalEvent.detail;n>0&&(e.index&&!e.settings.loop||e.settings.loop)?e.prev():n<0&&(e.index<e.pagesCount-1&&!e.settings.loop||e.settings.loop)&&e.next()}}),e.settings.keyboard&&t(window),

                t(window).resize(function(){var t=e.switchLength(),n=e.settings.direction?e.section.eq(e.index).offset().top:e.section.eq(e.index).offset().left;Math.abs(n)>t/2&&e.index<e.pagesCount-1&&e.index++,e.index&&e._scrollPage()}),e.sections.on("transitionend webkitTransitionEnd oTransitionEnd otransitionend",function(){e.canScroll=!0,e.settings.callback&&"function"===t.type(e.settings.callback)&&e.settings.callback()})},prev:function(){var t=this;t.index>0?t.index--:t.settings.loop&&(t.index=t.pagesCount-1),t._scrollPage()},next:function(){var t=this;t.index<t.pagesCount-1?t.index++:t.settings.loop&&(t.index=0),t._scrollPage()},_scrollPage:function(){var n=this,i=n.section.eq(n.index).position();if(i){if(n.canScroll=!1,e){n.sections.css(e+"transition","all "+n.settings.duration+"ms "+n.settings.easing);var s=n.direction?"translateY(-"+i.top+"px)":"translateX(-"+i.left+"px)";n.sections.css(e+"transform",s)}else{var o=n.direction?
                {top:-i.top}:{left:-i.left};n.sections.animate(o,n.settings.duration,function(){n.canScroll=!0,n.settings.callback&&"function"===t.type(n.settings.callback)&&n.settings.callback()})}n.settings.pagination&&n.pageItem.eq(n.index).addClass(n.activeClass).siblings("li").removeClass(n.activeClass)}}},n}();t.fn.PageSwitch=function(e){return this.each(function(){var i=t(this),s=i.data("PageSwitch");if(s||(s=new n(i,e),i.data("PageSwitch",s)),"string"===t.type(e))return s[e]()})},t.fn.PageSwitch.defaults={selectors:{sections:".sections",section:".section",pages:".pages",active:".active"},index:0,easing:"ease",duration:5000,loop:!1,pagination:!0,keyboard:!0,direction:"vertical",autoPlay:!0,interval:4e4,callback:""},t(function(){t("[data-PageSwitch]").PageSwitch()})}(jQuery);
