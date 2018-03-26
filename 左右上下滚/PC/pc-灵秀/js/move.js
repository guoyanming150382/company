$(window).scroll(function () {
		 var a = document.documentElement.scrollTop || document.body.scrollTop;
            //闅忕潃娴忚鍣ㄥ線涓嬫粴鍔紝鏍规嵁璺濈椤堕儴鐨勮窛绂伙紝鍒ゆ柇褰撳墠閫変腑鐨刴enu
            var top1 = parseInt($(".section1").offset().top)-$(window).height()+170;
            var top2 = parseInt($(".section2").offset().top)-$(window).height()+170;
            var top3 = parseInt($(".section3").offset().top)-$(window).height()+170;
            var top4 = parseInt($(".section4").offset().top)-$(window).height()+170;
			var top5 = parseInt($(".section5").offset().top)-$(window).height()+170;
			var top6 = parseInt($(".section6").offset().top)-$(window).height()+170;
			var top7 = parseInt($(".section7").offset().top)-$(window).height()+170;
            if (a >= top1 && a < top2) {
				$(".section1 .title").addClass("rotateInDownLeft");
				$(".section1 .web_video").addClass("fadeInDown");
            }
            else if (a >= top2 && a < top3) {
				 $(".section2 .title1").addClass("bounceInLeft");
				 $(".section2 .scrollBox").addClass("zoomInDown");
            }
            else if (a >= top3 && a < top4) {
				$(".section3 .title1").addClass("bounceInRight");
				 $(".section3 .compare_info").addClass("fadeInDown");
            }
		  else if (a >= top4 && a < top5) {
			  $(".section4 .title1").addClass("bounceInLeft");
				 $(".section4 .wedo_box").addClass("fadeInDown");
			}
			else if (a >= top5&& a < top6) {
				$(".section5 .title1").addClass("bounceInRight");
				 $(".section5 .assetBox").addClass("fadeInDown");
			}
			else if (a >= top6&& a < top7) {
				 $(".section6").addClass("bounceInLeft");
			}
			else{
				 $(".section7").addClass("fadeInDown");
				}
      });