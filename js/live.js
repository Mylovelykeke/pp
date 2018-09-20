$(function(){
	$(".header").load("header.html")
	$(".footer").load("footer.html")
	
	
	if(getHash("type")){
		var a = getHash("type"),
			b = getHash("id");
		loadDetail(a,b)
	}
	
	//请求服务端数据
	function loadDetail(type,id){
		$.ajax({
			type: 'get',
			url: './js/article.php',
			data: {
				'type' : type || "",
				'id' : id || ""
			},
			dataType: 'text',
			error: function(e){
				console.log(e)
			},
			success: function(res){
				//处理返回结果
				res = JSON.parse(res).data;
				var listArr = res.list;
				$.each(listArr, function(k,v) {
					if(v.video){
						var temp = $("#mubanvideo").clone().removeAttr("id")
						temp.find("source").attr("src",v.video)
						temp.find('.txt>p').html(v.describe)
						$(".allTrend").append(temp)
					}else{
						var temp = $("#muban").clone().removeAttr("id")
						
					
						temp.find("img").attr("src",v.coverImg);
						temp.find('.txt>p').html(v.describe)
						
						$(".allTrend").append(temp)
					}
				console.log(v)
				});
				
			}
		})
	}
	//获取地址栏数据
	function getHash(name){
		var data = window.location.search.slice(1);
		var reg = new RegExp("(^|&)"+name+"=([a-zA-Z0-9]*)(&|$)");
		var res = reg.exec(data)
		
		if(res){
			return res[2];
		}else{
			return "";
		}
	}
	
	
})
