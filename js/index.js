window.onload = function(){
	var i = 0,
		k = 0;
	var timer=null;
	$(".header").load("header.html")
	$(".footer").load("footer.html")
	
	
	$(".aImg").append($(".aImg>li")[0].cloneNode(true))
	
	
	
	$(".navImg").hover(function(){
		clearInterval(timer)
	},function(){
		timer = setInterval(function(){
			i++;
			move()
	},3000)
	})
	
	$(".navImg>ol>li").on("click",function(){
		var index = $(this).index()
		i = index
		$(this).css("background","red")
		$(this).siblings().css("background","white")
		$(".aImg").animate({"left":-$(".aImg>li").width()*$(this).index()})
	})
	//轮播图
	timer = setInterval(function(){
		i++
		move()
	},3000)
	//封装函数
	function move(){
		if(i==$(".aImg>li").length){
			$(".aImg").css({left:0})
			i=1;
		}
			
		$(".aImg").stop().animate({"left":-$(".aImg>li").width()*i})
		if(i==$(".aImg>li").length-1){
			$(".navImg>ol>li").eq(0).css("background","red")
			$(".navImg>ol>li").eq(0).siblings().css("background","white")
		}else{
			$(".navImg>ol>li").eq(i).css("background","red")
			$(".navImg>ol>li").eq(i).siblings().css("background","white")
		}
	}
	//
	var top =document.getElementsByClassName("trend")
	window.onscroll =function(){
		var y = getScroll().top
			x = top[top.length-1].offsetTop
			console.log(x)
		
		if(x<y+getClient().height &&y+getClient().height<1400){
			$(".allTrend").append($(".trend").clone())
		}
		
	}
	//三级菜单
	$(".three-d").hover(function(){
		$(this).find("ol").stop().slideDown(600,"elasticOut")
	},function(){
		$(this).find("ol").stop().slideUp()
	})
	
	//第二级
	$(".three-d>ol>li").hover(function(){
		$(this).css("background","#87CEEB");
		$(this).siblings().css("background","#777777")
	},)
	$(".know-two").click(function(){
		$(this).find("li").css({"background":"#070B1F","color":"white"});
		$(this).siblings().find("li").css({"background":"white","color":"#070B1F"});
		$(this).find("div").stop().animate({"width":"150px","opacity":1});
		$(this).siblings().find("div").stop().animate({"width":"0","opacity":"0"})
	})
	
	//
	$(".three-d>.live>li").on("click",function(){
		if($(this).index()==0){
			$(".three-d").attr("href","live.html?type=companyCulture")
		}else if($(this).index()==1){
			$(".three-d").attr("href","live.html?type=companyEnvironment")
		}else if($(this).index()==2){
			$(".three-d").attr("href","live.html?type=talents")
		}else{
			$(".three-d").attr("href","live.html?type=team")
		}
	})
	//
	$(".three-d>.run>li").on("click",function(){
		if($(this).index()==0){
			$(".three-d").attr("href","live.html?type=joinUs")
		}else if($(this).index()==1){
			$(".three-d").attr("href","live.html?type=telUs")
		}else if($(this).index()==2){
			$(".three-d").attr("href","live.html?type=companyIdea")
		}else{
			$(".three-d").attr("href","live.html?type=runman")
		}
	})
	//封装滚动
	 function getScroll(){
                return{
                    left : window.pageXOffset||document.body.scrollLeft||document.documentElement.scrollLeft||0,
                    top : window.pageYOffset||document.body.scrollTop||document.documentElement.scrollTop||0
                }
            }
	 //封装页面宽度
	 
        function getClient() {
            return {
                width: window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth || 0,
                height: window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight || 0
            }
        }
}
