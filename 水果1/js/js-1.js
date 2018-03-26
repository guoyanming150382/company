// 切换
		$(document).ready(
			function() {
				var nowpage = 0;
				var oPge=document.getElementsByTagName("page");
				//给最大的盒子增加事件监听
				$(".container").swipe(
					{
						swipe:function(event, direction, distance, duration, fingerCount) {
							 if(direction == "up"){
							 	nowpage = nowpage + 1;
							 }else if(direction == "down"){
							 	nowpage = nowpage - 1;
							 }

							 // for(var i=0;i<oPge.length;i++){

							 // }

							 if(nowpage >2){
							 	nowpage = 2;
							 }

							 if(nowpage < 0){
							 	nowpage = 0;
							 }

							$(".container").animate({"top":nowpage * -100 + "%"},400);

							$(".page").eq(nowpage).addClass("cur").siblings().removeClass("cur");
						}
					}
				);
			}
		);
