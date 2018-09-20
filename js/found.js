$(function(){
	$(".header").load("header.html")
	$(".footer").load("footer.html")
	
	
	//开始
	
	var page = 0
	
	configpage(page)
	
	function configpage(p){
		$.ajax({
			type:"get",
			url:"./js/list.php",
			data:{
				"id":p
			},
			dataType:"text",
			success:function(res){
				
				res = JSON.parse(res.slice(1))
				var listArr = res.data.list;
				
				console.log(listArr)
				
				$.each(listArr,function(k,v){
					//复制模板
					var temp = $("#muban").clone().removeClass();
						temp.addClass(v.creatAt+" animated")
						temp.css("background-image","url("+v.coverImg+")");
						temp.find(".chatage").html("性别:　"+v.title)
						temp.find(".chatNumber").html("年龄:　"+v.sysId)
						temp.find(".chatreda").html("<h4>个性签名：</h4>"+v.describe)
					$(".chatfriend>ul").append(temp)
					
					//
				})
			}
		});
	}
	//点击事件
	$(".more").click(function(){
		page++
		if(page<5){
			configpage(page);
		}else{
			$(this).html("没有更多了。。")
		}
	})
})
