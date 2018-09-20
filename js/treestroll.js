$(function() {
	$(".header").load("header.html")
	$(".footer").load("footer.html")

	//
	var page = 0

	configpage(page)

	function configpage(p) {
		$.ajax({
			type: "get",
			url: "./js/listchat.php",
			data: {
				"id": p
			},
			dataType: "text",
			success: function(res) {

				res = JSON.parse(res.slice(1))
				var listArr = res.data.list;
				$.each(listArr, function(k, v) {
					//复制模板
					var temp = $("#muban").clone().removeAttr("id");
					//						temp.addClass(v.creatAt+" animated")
					temp.find(".photo").css("background-image", "url(" + v.coverImg + ")");
					temp.find("i").html(v.title +"&nbsp&nbsp&nbsp&nbsp"+v.sysId)
					temp.find("img").attr('src',v.coverImg)
					temp.find("p").html(v.describe)
					$(".allTrend").append(temp)

					//
				})
			}
		});
	}
	//点击事件
	$(".more").click(function() {
		page++
		if(page < 3) {
			configpage(page);
		} else {
			$(this).html("没有更多了。。")
		}
	})
	//结束  
	var myDate = new Date();
	//获取当前年
	var year = myDate.getFullYear();
	//获取当前月
	var month = myDate.getMonth() + 1;
	//获取当前日
	var date = myDate.getDate();
	var h = myDate.getHours(); //获取当前小时数(0-23)
	var m = myDate.getMinutes(); //获取当前分钟数(0-59)
	var s = myDate.getSeconds();

	var now = year + '-' + month + "-" + date + " " + h + ':' + m+ ":" + s;

	$("#publish").on("click", function() {
		var txt = $("textarea").val()

		if(txt == false) {
			console.log("go")
		} else {
			var temp = $("#muban").clone().removeAttr("id");
			temp.find("i").html("你的id" +"&nbsp&nbsp&nbsp&nbsp"+ now)
			temp.find(".trend-contain").html(txt)
			$(".allTrend").prepend(temp)
		}

	})

})