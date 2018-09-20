$(function() {
	$(".i>li").mouseenter(function() {
		$("this").css("background", "skyblue")
	})

	//模态框
	$("#phone").focus(function() {
		if($(this).val() == "邮箱/会员账号/手机号") {
			$(this).val("")
		}
	})
	$("#phone").blur(function() {
		if($(this).val() == false) {
			$(this).val("邮箱/会员账号/手机号")
		}

	})
	$("#passWord").focus(function() {
		if($(this).val() == "请输入密码") {
			$(this).val("")
		}
	})
	$("#passWord").blur(function() {
		if($(this).val() == false) {
			$(this).val("请输入密码")
		}
	})
	$(".i>li>a").hover(function() {
		$(this).css("color", "red")
	}, function() {
		$(this).css("color", "white")
	});

	$(".close").click(function(e) {
		if(e.stopPropagation) {
			e.stopPropagation();
		} else {
			e.cancelBubble = true;
		}

		$(".shadow").hide()
	});

	$(".open").click(function(e) {
		if(e.stopPropagation) {
			e.stopPropagation();
		} else {
			e.cancelBubble = true;
		}
		$(".shadow").show()
	})
	$("button").click(function() {
		var reg = /^[0-9a-z]{5,9}|_[0-9a-z]{5,9}$|^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

		var regPwd = /^(\d|[a-zA-Z]){6,14}$/;

		var phone = $("#phone").val()
		var passWord = $("#passWord").val()
		if(reg.test(phone) == false || regPwd.test(passWord) == false) {
			
		}else if(reg.test(phone) == true || regPwd.test(passWord) == true){
			$(".hCover").show();
			setTimeout(function(){
				$(".shadow").hide()
			},100)
		}

	})
})