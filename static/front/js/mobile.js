//返回顶部
$(function() {
	$(window).scroll(function(){
		var scrolltop=$(this).scrollTop();		
		if(scrolltop>=600){		
			$("#indexToTop").show();
		}else{
			$("#indexToTop").hide();
		}
	});		
	$("#indexToTop").click(function(){
		$("html,body").animate({scrollTop: 0}, 500);	
	});		
});
//底部滑动
var footer = new Swiper('#mobile-foot', {
	freeMode:true,
	slidesPerView :'6'
});
//订单详情轮播
var detailSwiper = new Swiper('.pic-gallery', {
	pagination: '.swiper-pagination',
	paginationClickable: true,
	width : 500,
	autoplay: 3000,
	speed: 500,
	autoHeight:true,
	autoplayDisableOnInteraction: false,
	loop: true,
	prevButton:'.swiper-button-prev',
	nextButton:'.swiper-button-next'
});
/*分类*/
var CT = {
	init: function() {
		this.setElementHeight();
		this.setNavSwiper();


		var that = this,
			parentDom = $('#nav-swiper_menu'), 
			childrenDom = $('#categorybody-swiper_container');

		parentDom.on('click', 'li', function(){
			var index = $(this).index(),
				id = $(this).data('id'),
				h = this._height || $(this).height();
			parentDom.find('li').removeClass('current').eq(index).addClass('current');
			// 滚动
			childrenDom.find('.categorybody-row').scrollTop(0);
			if(childrenDom.find('.cat_id_'+id).length!=0){
				childrenDom.find('.cat_id_'+id).show().siblings().hide();
			}else{
				childrenDom.find('.none-shop').show().siblings().hide();
			}
		});
	}, 
	setElementHeight: function() {
		// 滚动窗口高度
		var virtualWindowHeight = this.virtualWindowHeight = $(window).height()-$('#mll_header').height()-$('#mobile-foot').height();
		// 菜单实际高度
		this.menuHeight=$("#nav-swiper_menu li").length*112;
		$('#category-swiper-container').css({'height': virtualWindowHeight+'px'});
		$('#category-swiper-box').css({'height': virtualWindowHeight+'px'});
		$('#categorybody-swiper_container').css({'height': virtualWindowHeight+'px'});	
		$('#categorybody-swiper_container .categorybody-row').css({'height': virtualWindowHeight+'px'});	
		$('.category-list').css({'height': virtualWindowHeight+'px'});	
		return this;
	},
	setNavSwiper: function() {
		var navSwiper = new Swiper('#category-swiper-container', {
			direction: 'vertical',
			freeMode: true,
			slidesPerView: 'auto'
		});
	},
	scrollToCurrentClickItem: function(index) {
		index++;
		var isOver = false;
		if ( index <= 1 || isOver ) return;

		var 
			currentHeight = (index - 1) * 110,
			d=0;
		if(this.menuHeight>this.virtualWindowHeight){
			if ( this.menuHeight - currentHeight < this.virtualWindowHeight ) {
				d = -1 * (this.menuHeight - this.virtualWindowHeight);
				isOver = true;
			} else {
				d = (index - 1) * 110 * (-1);
			}
		}
		var e = {
			'transform': 'translate3d(0px, '+d+'px, 0px)',
			'-webkit-transform': 'translate3d(0px, '+d+'px, 0px)',
			'-webkit-transition': '0.2s ease 0s',
			'transition': "0.2s ease 0s"
		};
		$('#category-swiper-container .swiper-wrapper').css(e);
	}
};
CT.init();
$(window).resize(function(){
  CT.init();
  slideRemove();
});
/* 购物车*/
$(".all-edit").on("click",function(){
	var atext=$(this).text();
	var list=$('.cart-list');
	if(atext=='编辑'){
		$(".edit-false").animate({marginLeft:"0"}, 200);
		$(this).text('完成');
		list.find(".item-dt .item-logos").show();
		list.find(".item-dt .item-info").hide();
		list.find(".total-price .total-div").hide();
		list.find(".clear-btn").hide();
		list.find(".close-btn").show();
	}else{
		$(".edit-false").animate({marginLeft:"0"}, 200);
		$(this).text('编辑');
		$('.cart-list').find(".item-dt .item-logos").hide();
		$('.cart-list').find(".item-dt .item-info").show();
		list.find(".total-price .total-div").show();
		list.find(".clear-btn").show();
		list.find(".close-btn").hide();
	}
});
$(document).ready(function() {
	//首页商品各分类颜色设计
	indexColor();
	//分类页商品各分类颜色设计
	categoryColor();
	// 搜索框
	$("#store-search .search-inp,.search-ctn .search-inp").focus(function(){
		$(this).parents(".search-ctn").addClass("search-onfocus")
	});
	$(".search-ctn .search-inp").blur(function(){
		if($(this).val()==""){
			$(".search-ctn").removeClass("search-onfocus")
		}
	});
	//购物车滑动删除
	slideRemove();
	//查库存滑动查看库存位置
	stockSearch();
	//首页轮播少于5个不显示分页点
	if($(".shortcut-operation-group .swiper-slide").length<=5){
		$(".shortcut-operation-group").find(".swiper-pagination").hide();
	}
	//确认订单只显示3个
	orderShow();
});
//首页商品各分类颜色设计
function indexColor(){
	var	moduleNum=$(".wonderful-rec .append-loading .mobile-module").length;
	for (var i=0;i<moduleNum;) {
		$(".wonderful-rec .append-loading .mobile-module:eq("+i+")").find(".module-title h2").css({"border-color":"#b3d465"});
		$(".wonderful-rec .append-loading .mobile-module:eq("+(i+1)+")").find(".module-title h2").css({"border-color":"#fd6c6c"});
		$(".wonderful-rec .append-loading .mobile-module:eq("+(i+2)+")").find(".module-title h2").css({"border-color":"#ff9900"});
		$(".wonderful-rec .append-loading .mobile-module:eq("+(i+3)+")").find(".module-title h2").css({"border-color":"#6cb7fd"});
		$(".wonderful-rec .append-loading .mobile-module:eq("+(i+4)+")").find(".module-title h2").css({"border-color":"#fd95d5"});
		$(".wonderful-rec .append-loading .mobile-module:eq("+(i+5)+")").find(".module-title h2").css({"border-color":"#ff6699"});
		i+=6;
	}
}
//分类页商品各分类颜色设计
function categoryColor(){
	var	catRowNum=$("#categorybody-swiper_container .categorybody-row").length;
	var	sortNum=$("#categorybody-swiper_container .categorybody-row:eq(0) .sort-title").length;
	if($("#categorybody-swiper_container").hasClass("shop-categorybody")){
		for (var i=0;i<catRowNum;i++) {
			var sortNum2=$("#categorybody-swiper_container .categorybody-row:eq("+i+") .sort-title").length;
			for (var j=0;j<sortNum2;) {
				$("#categorybody-swiper_container .categorybody-row:eq("+i+") .sort-title:eq("+j+")")
				.css({"border-color":"rgba(228,0,127,0.26)"})
				.find("span").css({"border-color":"#e4007f"});
				
				$("#categorybody-swiper_container .categorybody-row:eq("+i+") .sort-title:eq("+j+1+")")
				.css({"border-color":"rgba(253,108,108,0.5)"})
				.find("span").css({"border-color":"#fd6c6c"});
				
				$("#categorybody-swiper_container .categorybody-row:eq("+i+") .sort-title:eq("+j+2+")")
				.css({"border-color":"rgba(255,153,0,0.5)"})
				.find("span").css({"border-color":"#ff9900"});		
				
				$("#categorybody-swiper_container .categorybody-row:eq("+i+") .sort-title:eq("+j+3+")")
				.css({"border-color":"rgba(108,183,253,0.5)"})
				.find("span").css({"border-color":"#6cb7fd"});
				
				$("#categorybody-swiper_container .categorybody-row:eq("+i+") .sort-title:eq("+j+4+")")
				.css({"border-color":"rgba(253,149,213,0.5)"})
				.find("span").css({"border-color":"#fd95d5"});
				
				$("#categorybody-swiper_container .categorybody-row:eq("+i+") .sort-title:eq("+j+5+")")
				.css({"border-color":"rgba(255,102,153,0.5)"})
				.find("span").css({"border-color":"#ff6699"});
				j+=6;
			}
		}
	}else{
		for (var i=0;i<catRowNum;) {
			$("#categorybody-swiper_container .categorybody-row:eq("+i+")")
			.find(".sort-title").css({"border-color":"rgba(228,0,127,0.26)"})
			.find("span").css({"border-color":"#e4007f"});
			
			$("#categorybody-swiper_container .categorybody-row:eq("+(i+1)+")")
			.find(".sort-title").css({"border-color":"rgba(253,108,108,0.5)"})
			.find("span").css({"border-color":"#fd6c6c"});
			
			$("#categorybody-swiper_container .categorybody-row:eq("+(i+2)+")")
			.find(".sort-title").css({"border-color":"rgba(255,153,0,0.5)"})
			.find("span").css({"border-color":"#ff9900"});		
			
			$("#categorybody-swiper_container .categorybody-row:eq("+(i+3)+")")
			.find(".sort-title").css({"border-color":"rgba(108,183,253,0.5)"})
			.find("span").css({"border-color":"#6cb7fd"});
			
			$("#categorybody-swiper_container .categorybody-row:eq("+(i+4)+")")
			.find(".sort-title").css({"border-color":"rgba(253,149,213,0.5)"})
			.find("span").css({"border-color":"#fd95d5"});
			
			$("#categorybody-swiper_container .categorybody-row:eq("+(i+5)+")")
			.find(".sort-title").css({"border-color":"rgba(255,102,153,0.5)"})
			.find("span").css({"border-color":"#ff6699"});
			i+=6;
		}
	}
}
//确认订单只显示3个函数
function orderShow(){
	var orderNum0=$(".order-list").find(".cart-item:eq(0) .item-list").length;
	var orderNum1=$(".order-list").find(".cart-item:eq(1) .item-list").length;
	var orderNum2=$(".order-list").find(".cart-item:eq(2) .item-list").length;
	if(orderNum0==1&&orderNum1==1&&orderNum2>=1){
		$(".order-list").css({
			"height":"450px"
		})
	}else if(orderNum0==1&&orderNum1>=2||orderNum0==2&&orderNum1>=1){
		$(".order-list").css({
			"height":"400px"
		})
	}else if(orderNum0>=3){
		$(".order-list").css({
			"height":"350px"
		})
	}
}
//购物车滑动删除
function slideRemove() {
	var slideWid=75;
    // 设定每一行的宽度=屏幕宽度+按钮宽度
    $(".cart-list .edit-false").width($(window).width() + $(".item-del").width());
    // 设定常规信息区域宽度=屏幕宽度
    $(".item-box").width($(".cart-list .edit-false").width());
    // 获取所有行，对每一行设置监听
    var lines = $(".cart-list .edit-false");
    var len = lines.length; 
    var lastX, lastXForMobile;
    // 用于记录被按下的对象
    var pressedObj;  // 当前左滑的对象
    var lastLeftObj; // 上一个左滑的对象
    // 用于记录按下的点
    var start;
    // 网页在移动端运行时的监听
    for (var i = 0; i < len; ++i) {
        lines[i].addEventListener('touchstart', function(e){
            lastXForMobile = e.changedTouches[0].pageX;
            pressedObj = this; // 记录被按下的对象 
            // 记录开始按下时的点
            var touches = event.touches[0];
            start = { 
                x: touches.pageX, // 横坐标
                y: touches.pageY  // 纵坐标
            };
        });
        lines[i].addEventListener('touchmove',function(e){
            // 计算划动过程中x和y的变化量
            var touches = event.touches[0];
            delta = {
                x: touches.pageX - start.x,
                y: touches.pageY - start.y
            };
            // 横向位移大于纵向位移，阻止纵向滚动
            if (Math.abs(delta.x) > Math.abs(delta.y)) {
                event.preventDefault();
            }
        });
        lines[i].addEventListener('touchend', function(e){
            if (lastLeftObj && pressedObj != lastLeftObj) { // 点击除当前左滑对象之外的任意其他位置
                $(lastLeftObj).animate({marginLeft:"0"}, 200)
                .find(".item-info").show()
                .siblings(".item-logos").hide(); // 右滑
                lastLeftObj = null; // 清空上一个左滑的对象
            }
            var diffX = e.changedTouches[0].pageX - lastXForMobile;
            if (diffX < -5) {
                $(pressedObj).animate({marginLeft:-1*slideWid+'px'}, 200)
                .find(".item-info").hide()
                .siblings(".item-logos").show(); // 左滑
                lastLeftObj && lastLeftObj != pressedObj && 
                    $(lastLeftObj).animate({marginLeft:"0"}, 200)
                    .find(".item-info").show()
                	.siblings(".item-logos").hide(); // 已经左滑状态的按钮右滑
                lastLeftObj = pressedObj; // 记录上一个左滑的对象
            } else if (diffX > 5) {
              if (pressedObj == lastLeftObj) {
                $(pressedObj).animate({marginLeft:"0"}, 200)
                .find(".item-info").show()
                .siblings(".item-logos").hide(); // 右滑
                lastLeftObj = null; // 清空上一个左滑的对象
              }
            }
        });
    }
    // 网页在PC浏览器中运行时的监听
    for (var i = 0; i < len; ++i) {
        $(lines[i]).bind('mousedown', function(e){
            lastX = e.clientX;
            pressedObj = this; // 记录被按下的对象
        });
        $(lines[i]).bind('mouseup', function(e){
            if (lastLeftObj && pressedObj != lastLeftObj) { // 点击除当前左滑对象之外的任意其他位置
                $(lastLeftObj).animate({marginLeft:"0"}, 200)
                .find(".item-info").show()
                .siblings(".item-logos").hide(); // 右滑
                lastLeftObj = null; // 清空上一个左滑的对象
            }
            var diffX = e.clientX - lastX;
            if (diffX < -5) {
                $(pressedObj).animate({marginLeft:-1*slideWid+'px'}, 200)
                .find(".item-info").hide()
                .siblings(".item-logos").show(); // 左滑
                lastLeftObj && lastLeftObj != pressedObj && 
                    $(lastLeftObj).animate({marginLeft:"0"}, 200)
                    .find(".item-info").show()
                	.siblings(".item-logos").hide(); // 已经左滑状态的按钮右滑
                lastLeftObj = pressedObj; // 记录上一个左滑的对象
            } else if (diffX > 5) {
              if (pressedObj == lastLeftObj) {
                $(pressedObj).animate({marginLeft:"0"}, 200)
                .find(".item-info").show()
                .siblings(".item-logos").hide(); // 右滑
                lastLeftObj = null; // 清空上一个左滑的对象
              }
            }
        });
    }
}
/*购物车全选 start*/
$("#shopAll").on("change",function() {
	if(this.checked) {
		$(".cart-list .cart-item :checkbox").prop("checked", true);
	} else {
		$(".cart-list .cart-item :checkbox").prop("checked", false);
	}
});
$(".cart-list .secondAll").on("change",function(){
	if(this.checked) {
		$(this).parents(".shop").siblings(".group").find(" :checkbox").prop("checked", true);
	} else {
		$(this).parents(".shop").siblings(".group").find(" :checkbox").prop("checked", false);
	}
});

$(".cart-list").on("change",".secondAll,.ocb",function(){
	if($(this).hasClass("secondAll")){
		allchk("secondAll");
	}else{
		allchk("ocb");
		secondAllchk(this);
	}
});
function allchk(obj) {
	var secondchknum = $(".cart-list .secondAll").length;
	var ocbchknum = $(".cart-list .ocb").length;
	var secondchk = 0;
	var ocbchk = 0;
	$(".cart-list .secondAll").each(function() {
		if($(this).prop("checked") == true) {
			secondchk++;
		}
	});
	$(".cart-list .ocb").each(function() {
		if($(this).prop("checked") == true) {
			ocbchk++;
		}
	});
	if(secondchknum == secondchk||ocbchknum == ocbchk) { //全选
		$("#shopAll").prop("checked", true);
	} else { //不全选
		$("#shopAll").prop("checked", false);
	}
}
function secondAllchk(obj) {
	var socbchknum = $(obj).parents(".cart-item").find(".ocb").length;
	var socbchk = 0;
	 $(obj).parents(".cart-item").find(".ocb").each(function() {
		if($(this).prop("checked") == true) {
			socbchk++;
		}
	});
	if(socbchknum == socbchk) { //全选
		$(obj).parents(".group").siblings(".shop").find(".secondAll").prop("checked", true);
	} else { //不全选
		$(obj).parents(".group").siblings(".shop").find(".secondAll").prop("checked", false);
		allchk("secondAll");
	}
}
/*购物车全选 end*/
/*店铺*/
// 右上小圆点
$(".header-global-nav").click(function(e){
	e.stopPropagation();
	$(this).find(".global-nav-list").fadeToggle();
});
$(document).click(function(){
	$(".header-global-nav").find(".global-nav-list").fadeOut();
});
$("#store-classify-list").on("click",".classify-item-title",function(){
	$(this).parent().toggleClass("extended");
	$(this).siblings(".reclassify-list").stop().slideToggle("normal");
});
/*商品详情*/
$("#selectID").on("click",function(){
	$(".flick-menu-mask").fadeIn();
	$(".spec-menu-content").fadeIn().addClass("spec-menu-hide");
	$("body").css({
		'overflow':'hidden'
	})
});
$(".spec-menu .spec-control .pro-select .base-txt a").on("click",function(){
	$(this).addClass("selected").siblings().removeClass("selected");
});
$(".spec-menu .spec-menu-content").on("click",".spec-menu-close,.sure-option .ok",function(){
	$(this).parents(".spec-menu-content").removeClass("spec-menu-hide").fadeOut();
	$(".flick-menu-mask").fadeOut();
	$("body").css({
		'overflow':'visible'
	})
});
$(".flick-menu-mask").on("click",function(){
	$(".spec-menu .spec-menu-content").removeClass("spec-menu-hide").fadeOut();
	$(".flick-menu-mask").fadeOut();
	$("body").css({
		'overflow':'visible'
	})
});
$("#detial-nav").on("click","li",function(){
	$(this).addClass("current").siblings().removeClass("current");
	var numdex=$(this).index();
	$(".product-container").find(".goods-detial:eq("+numdex+")").show().siblings().hide();
});
$(".spec-menu .quantity-wrapper").on("click",".quantity-decrease",function(){
	var val=$(this).siblings(".quantity").val();
	if(val>1){
		val--;
		if(val<=1){
			$(this).addClass("ban");
		}
		$(this).siblings(".quantity").val(val);
	}
});
$(".spec-menu .quantity-wrapper").on("click",".quantity-increase",function(){
	var val=$(this).siblings(".quantity").val();
	if(val>=1){
		$(this).siblings(".quantity-decrease").removeClass("ban");
	}
	val++;
	$(this).siblings(".quantity").val(val);
});
//登录注册
$(".user-form-login .input-container input").click(function(){  
    $(this).parent().children(".icon-clear").show();  
});  
$(".user-form-login .input-container input").blur(function(){  
	$(this).parent().children(".icon-clear").hide();
});  
$(".user-form-login").on("mousedown",".icon-clear",function(e){  
    $(this).siblings("input").val("").focus();
    e.preventDefault();
});  
$(".user-form-login .label-checkbox").on("click",function(e){
	e.preventDefault();
	var inputPwd=$(this).siblings(".password");
	if(inputPwd.attr("type")=="password"){
		$(this).find(".check-icon").addClass("showpwd");
		inputPwd.attr("type","text").focus();
	}else{
		$(this).find(".check-icon").removeClass("showpwd");
		inputPwd.attr("type","password").focus();
	}
});
//确认订单
$(".order-cerify .all-shop").on("click",function(){
	$(this).hide().siblings('.order-list').css({"height":"auto"});
});
$("#ediAddr").on("click",function(){
	$(this).find("span").text("填写收货地址");
	$(this).addClass("active").siblings().removeClass("active").parents(".tab-nav").siblings(".addr-box").find(".oraddr-edit").show().siblings().hide();
});
$(".oraddr-edit .addr-save").on("click",function(){
	$("#ediAddr").find("span").text("修改收货地址");
	$(this).parents(".addr-form").hide().siblings(".addr-contain").show();
});
$("#userLogin").on("click",function(){
	$(this).addClass("active").siblings().removeClass("active").parents(".tab-nav").siblings(".addr-box").find(".user-login").show().siblings().hide();
});
$("#vAddr-sel").on("change",".ia-l .t-cb",function(){
	$(this).parents(".item-addr").addClass("active").siblings().removeClass("active");
});
$("#vAddr-sel").on("click",".ia-r",function(){
	$("#vAddr-edit").show().siblings().hide();
});
$("#vAddr-sel .next-btn").on("click",function(){
	$(this).parents("#vAddr-box").find("#vAddr-check").show().siblings().hide();
});
$("#vAddr-sel .addr-add").on("click",function(){
	$(this).parents("#vAddr-box").find("#vAddr-edit").show().siblings().hide();
});
$("#vAddr-edit").on("click",".addr-save",function(){
	$(this).parents("#vAddr-box").find("#vAddr-sel").show().siblings().hide();
});
$("#vAddr-check").on("click",function(){
	$(this).siblings("#vAddr-sel").show().siblings().hide();
});
//职员中心js
$("#yj-navbar").on("click",".navbar-item",function(){
	$(this).addClass("navbar-item_on").siblings().removeClass("navbar-item_on");
	if($(this).index()==1){
		$(this).parent().siblings(".month-list-contain").show().siblings(".day-list-contain").hide();
	}else{
		$(this).parent().siblings(".day-list-contain").show().siblings(".month-list-contain").hide();
	}
});
$(".order-list_box .order-item .all-shop").on("click",function(){
	$(this).find(".arrow").toggleClass("arrow-up");
	var text=$(this).find(".text").text()
	if(text=="展开"){
		$(this).find(".text").text("收起");
		$(this).siblings(".hideStaer").show();
	}else{
		$(this).find(".text").text("展开");
		$(this).siblings(".hideStaer").hide();
	}
});
$(".order-list_box .order-item .hideStaer p").on("click",function(){
	if($(this).siblings(".hideStaer-cell").css("display")=="block"){
		$(this).siblings(".hideStaer-cell").hide();
	}else{
		$(this).siblings(".hideStaer-cell").show();
	}
});
//查库存滑动查看库存位置
function stockSearch() {
	var slideWid=$(window).width();
	// 设定常规信息区域宽度=屏幕宽度
    $("#stockList .item-cell").width($(window).width());
    // 设定滑动信息区域宽度=屏幕宽度
    $("#stockList .item-location").width($(window).width());
    // 设定每一行的宽度=屏幕宽度*2
    $("#stockList .stock-cells").width($(window).width()*2);
    // 获取所有行，对每一行设置监听
    var lines = $("#stockList .stock-cells");
    var len = lines.length; 
    var lastX, lastXForMobile;
    // 用于记录被按下的对象
    var pressedObj;  // 当前左滑的对象
    var lastLeftObj; // 上一个左滑的对象
    // 用于记录按下的点
    var start;
    // 网页在移动端运行时的监听
    for (var i = 0; i < len; ++i) {
        lines[i].addEventListener('touchstart', function(e){
            lastXForMobile = e.changedTouches[0].pageX;
            pressedObj = this; // 记录被按下的对象 
            // 记录开始按下时的点
            var touches = event.touches[0];
            start = { 
                x: touches.pageX, // 横坐标
                y: touches.pageY  // 纵坐标
            };
        });
        lines[i].addEventListener('touchmove',function(e){
            // 计算划动过程中x和y的变化量
            var touches = event.touches[0];
            delta = {
                x: touches.pageX - start.x,
                y: touches.pageY - start.y
            };
            // 横向位移大于纵向位移，阻止纵向滚动
            if (Math.abs(delta.x) > Math.abs(delta.y)) {
                event.preventDefault();
            }
        });
        lines[i].addEventListener('touchend', function(e){
            if (lastLeftObj && pressedObj != lastLeftObj) { // 点击除当前左滑对象之外的任意其他位置
                $(lastLeftObj).animate({marginLeft:"0"}, 200); // 右滑
                lastLeftObj = null; // 清空上一个左滑的对象
            }
            var diffX = e.changedTouches[0].pageX - lastXForMobile;
            if (diffX < -5) {
                $(pressedObj).animate({marginLeft:-1*slideWid+'px'}, 200); // 左滑
                lastLeftObj && lastLeftObj != pressedObj && 
                    $(lastLeftObj).animate({marginLeft:"0"}, 200); // 已经左滑状态的按钮右滑
                lastLeftObj = pressedObj; // 记录上一个左滑的对象
            } else if (diffX > 5) {
              if (pressedObj == lastLeftObj) {
                $(pressedObj).animate({marginLeft:"0"}, 200); // 右滑
                lastLeftObj = null; // 清空上一个左滑的对象
              }
            }
        });
    }
    // 网页在PC浏览器中运行时的监听
    for (var i = 0; i < len; ++i) {
        $(lines[i]).bind('mousedown', function(e){
            lastX = e.clientX;
            pressedObj = this; // 记录被按下的对象
        });
        $(lines[i]).bind('mouseup', function(e){
            if (lastLeftObj && pressedObj != lastLeftObj) { // 点击除当前左滑对象之外的任意其他位置
                $(lastLeftObj).animate({marginLeft:"0"}, 200); // 右滑
                lastLeftObj = null; // 清空上一个左滑的对象
            }
            var diffX = e.clientX - lastX;
            if (diffX < -5) {
                $(pressedObj).animate({marginLeft:-1*slideWid+'px'}, 200); // 左滑
                lastLeftObj && lastLeftObj != pressedObj && 
                    $(lastLeftObj).animate({marginLeft:"0"}, 200); // 已经左滑状态的按钮右滑
                lastLeftObj = pressedObj; // 记录上一个左滑的对象
            } else if (diffX > 5) {
              if (pressedObj == lastLeftObj) {
                $(pressedObj).animate({marginLeft:"0"}, 200); // 右滑
                lastLeftObj = null; // 清空上一个左滑的对象
              }
            }
        });
    }
}
/*会员卡号js*/
$(".popup-box").on("click",".close",function(){
	if($(this).parents(".popup-box").hasClass("hint-box")){
	}else{
		$(this).parents(".popup-box").hide();
		$(".flick-menu-mask2").hide();
	}
});
$(".popup-box.queryVip").on("click",".close,.big-btn",function(){
	$(".flick-menu-mask2").hide();
	$(this).parents(".popup-box").hide();
});
$("#queryVip").on("click",function(){
	$(".popup-box").show();
	$(".flick-menu-mask2").show();
});

$(document).ready(function(){
	$("#vipSet .list-item").on("click","a",function(e){
		var id=$(this).data("id");
		if(id!=undefined){
			$(".flick-menu-mask2").fadeIn();
			$("#"+id).fadeIn().addClass("spec-menu-hide");
		}
	});
	$(".vipspec-menu").on("click",".off-btn",function(){
		$(this).parents(".spec-menu-content").removeClass("spec-menu-hide").fadeOut();
		$(".flick-menu-mask2").fadeOut();
	});
});

$("#couponNav").on("click",".navbar-item",function(){
	$(this).addClass("navbar-item_on").siblings().removeClass("navbar-item_on");
	if($(this).index()==0){
		$(this).parent().siblings(".coupon-box").find(".coupon-list").show().siblings(".coupon-detail").hide();
	}else{
		$(this).parent().siblings(".coupon-box").find(".coupon-detail").show().siblings(".coupon-list").hide();
	}
});
$("#alterPwd").on("click",function(){
	$(".flick-menu-mask2").show();
	$(".alterpwd-box").show().find("input").each(function(i){
		if($(this).attr("type")!="button"){
			$(this).val("");
		}
    });
});
$("#logistics-push").on("click",function(){
	if($(this).parents(".my-list").siblings(".logistics-list").css("display")=="block"){
		$(this).parents(".my-list").siblings(".logistics-list").hide();
	}else{
		$(this).parents(".my-list").siblings(".logistics-list").show();
	}
});
