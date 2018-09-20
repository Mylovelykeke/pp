$(function() {
	$(".header").load("header.html")
	
	//点击事件
	$(".scroll>ol>li").click(function(){
		screenIndex = $(this).index()
		var target = $(".scroll").height()
		$(".scroll>ul").animate({"top":target*-$(this).index()})
			$(".scroll>ol>li").eq($(this).index()).addClass("change")
			$(".scroll>ol>li").eq($(this).index()).siblings().removeClass("change")
			
	})
	//
	var h = $(window).innerHeight() - $(".header").height();
	$(".scroll").height(h).find("ul").children().height(h)
	//赋予属性

	//
	var pageHash = window.location.hash.slice(1);
	var screenIndex = 0;
	console.log(pageHash)
	if(pageHash) {
		$(".scroll>ul").css({"top": $(".scroll").height() * -pageHash})
		$(".scroll>ol>li").eq(pageHash).addClass("change")
		$(".scroll>ol>li").eq(pageHash).siblings().removeClass("change")
		screenIndex = pageHash
		
		console.log(screenIndex)
		flag = false
	}
	//多次滚动鼠标，算触发事件
	var count = 0;
	//记录当前的屏幕
	
	//结束
	var flag = true

	MouseWheel($(document)[0], function(e, down) {
		if(count > 5) {
			//滚轮像上  页面向下
			if(down) {
				if(screenIndex > 0) {
					if(flag == true) {
						flag = false;
						screenIndex--
						var target = $(".scroll").height();
						$(".scroll>ul").animate({
							"top": -target * screenIndex
						},  function() {
							flag = true
						})
						$(".scroll>ol>li").eq(screenIndex).addClass("change")
						$(".scroll>ol>li").eq(screenIndex).siblings().removeClass("change")
					}

				}
				count = 0
				//第一判断
			} else {
				//
				if(screenIndex < $(".scroll>ul>li").length - 1) {
					if(flag == true) {
						flag = false;
						screenIndex++
						var target = $(".scroll").height();
						$(".scroll>ul").animate({
							"top": -target * screenIndex
						},  function() {
							flag = true
						})
						$(".scroll>ol>li").eq(screenIndex).addClass("change")
						$(".scroll>ol>li").eq(screenIndex).siblings().removeClass("change")
					}
				}
				count = 0
			}

		}
		count++

	})
	
	//旋转木马
	var config = [
	//0
    {
        width: 260,
        top: 40,
        left: 0,
        opacity: 0.8,
        zIndex: 3
    },
		//1
    {
        width: 280,
        top: 20,
        left: 130,
        opacity: 1,
        zIndex: 4
    },//2
    {
        width: 260,
        top: 40,
        left: 300,
        opacity: 0.8,
        zIndex: 3
    }
	];
	
	assign();
	function assign(){
		$.each(config,function(k,v){
			$(".horse>div").eq(k).css("zIndex",v.zIndex).stop().animate(v,500)
		})
	}
	var timer =null,
		clar = null;
	timer = setInterval(function(){
		config.unshift(config.pop())
		assign()
	},2000)
	$(".horse>div").hover(function(){
		clearInterval(timer)
	},function(){
		timer = setInterval(function(){
		config.unshift(config.pop())
		assign()
	},2000)
	})
	$(".horse>div").click(function(){
		for(var j=0;j<config.length;j++){
			
			config.push(config.shift())
			if(config[$(this).index()].zIndex ==4){
				break
			}
		}
		assign()
	})
	//结束
	assigbottom();
	function assigbottom(){
		$.each(config,function(k,v){
			$(".horebot>div").eq(k).css("zIndex",v.zIndex).stop().animate(v,500)
		})
	}
	clar = setInterval(function(){
		
		config.unshift(config.pop())
		assigbottom();
	},2000)
	$(".horebot>div").hover(function(){
		clearInterval(clar)
	},function(){
		clar = setInterval(function(){
		config.unshift(config.pop())
		assigbottom();
	
	},2000)
	})
	$(".horebot>div").click(function(){
		for(var j=0;j<config.length;j++){
			
			config.push(config.shift())
			if(config[$(this).index()].zIndex ==4){
				break
			}
		}
		assigbottom();
	})
	//结束
})