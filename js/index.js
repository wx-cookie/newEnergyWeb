$(function(){
	// banner
	(function(){
		var time = 3000; // 滚动间隔时间
		var len = $(".banner ul li").length;

		if(len < 1) return false;
		var w = $(".banner").width();

		$(".banner").append('<a class="b_prev" href="javascript:;"></a><a class="b_next" href="javascript:;"></a><div class="b_push"></div>');
		$(".banner ul").width(w*len); // 设置宽度

		var b_push = $(".banner .b_push");
		for(var j=0; j<len; j++) {
			b_push.append('<a href="javascript:;"></a>');
		}
		$(".banner .b_push").css("left", (w-b_push.width())/2); // 居中

		var setPosition = function(i) {
			$(".banner ul").animate({left: -(w*i)}, 500, function(){
				$(".banner .b_push a").removeAttr("id");
				$(".banner .b_push a:eq("+i+")").attr("id","on");
			});
		}
		setPosition(0);

		var run = function(type) {
			var i = $("#on").index();
			if(type > 0) {
				i = (i == 0) ? len-1 : i-1;
			}else{
				i = (i == len-1) ? 0 : i+1;
			}
			setPosition(i);
		}

		$(".banner .b_push a").click(function(){ setPosition($(this).index()); });
		$(".banner .b_prev").click(function(){ run(1); });
		$(".banner .b_next").click(function(){ run(-1); });

		var r = setInterval(function(){ run(-1); }, time);
		$(".banner").hover(function(){
			clearInterval(r);
			$(".banner .b_prev,.banner .b_next").show();
		},function(){
			r = setInterval(function(){ run(-1); }, time);
			$(".banner .b_prev,.banner .b_next").hide();
		});
	})();
	(function(){
		var $a = $('.nav ul li');
		$.each($a,function(i,v){
			$(this).mouseover(function(){
				$(this).children(".navrj").css("display","block");
			});
			$(this).mouseout(function(){
				$(this).children(".navrj").css("display","none");
			})
		})
	})();
});
