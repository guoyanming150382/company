// JavaScript Document
//	鍐呴〉鑴氫笅鎷�

function stop(){ 
		return false; 
	} 
	document.oncontextmenu=stop; 

$(function(){
	//涓嬫媺
	$("a.xiala").click(function(){
		$(this).parents(".parter").toggleClass("auto_height");
	})
	$(".weixin").click(function(){
		$(".qr_code").fadeToggle(600);
	})
})

//鍥為《閮�
window.onscroll = function(){
var t = document.documentElement.scrollTop || document.body.scrollTop;
var h=$(window).height();
	if(t>100){
		$(".gotop").fadeIn();
	}else{
		$(".gotop").fadeOut();
	}
}
/***鍥為《閮�***/
$(function(){
$('.gotop .topshang').click(function(){
	$('html,body').animate({scrollTop: '0px'}, 800);});
});


//鍐呴〉瀵艰埅
	$(window).scroll(function(){
		if($(window).scrollTop()>0){
			$('.ml-nav').addClass("curr")
			$('.fnav').addClass("curr")
			$('.ml-nav').find(".ml-logo img").attr("src","/Public/home/images/logo1.png");
			$('.ml-nav').find(" li div").css("background","#333333")
		}
		else {
			$('.ml-nav').removeClass("curr");
			$('.fnav').removeClass("curr")
			$('.ml-nav').find(".ml-logo img").attr("src","/Public/home/images/logo1.png");
			$('.ml-nav').find(" li div").css("background","#333333")
		}
	})

$(document).ready(function adb() {
    $(".hengfu").delay(2000).fadeIn(


	);
	$(".hengfu .h_q1").delay(2000).animate({top:"+=-50px"},0).animate({top:"+=60px"},800).animate({top:"+=-20px"},500).animate({top:"+=10px"},400);
	$(".hengfu .h_q2").delay(2000).animate({top:"+=-60px"},0).animate({top:"+=60px"},300).animate({top:"+=-20px"},500).animate({top:"+=10px"},400);
	$(".hengfu .h_q3").delay(2000).animate({top:"+=-70px"},0).animate({top:"+=60px"},400).animate({top:"+=-20px"},500).animate({top:"+=10px"},400);
	$(".hengfu .h_q4").delay(2000).animate({top:"+=-40px"},0).animate({top:"+=60px"},500).animate({top:"+=-20px"},500).animate({top:"+=10px"},400);
	$(".hengfu .h_q5").delay(2000).animate({top:"+=-30px"},0).animate({top:"+=60px"},700).animate({top:"+=-20px"},500).animate({top:"+=10px"},400);
	$(".hengfu .close").click(function(){
		$(".hengfu").fadeOut(200);
		$(".shuban").animate({right:"15px"},500).animate({right:"10px"},300);
		});
	$(".close_01").click(function(){
		$(".shuban").animate({right:"40px"},300).animate({right:"-140px"},500);
		});
});


$(document).ready(function(){
	setInterval(function(){
			$(".shuban span").animate({"left":"60px"},6000).animate({"left":"-12px"},6000);
		},1)
})


	$(document).ready(function() {
		tim = setInterval (function(){
			$(".popup").addClass("current");
		},100000);
		$(".cancel").click(function(){
			$(".popup").removeClass("current");
			clearInterval(tim);
			tim = setInterval (function(){
			$(".popup").addClass("current");
			},200000);
		})
		
	});
/*鐐规垜鍜ㄨ鍚� */
$(function(){
			$('.cont').click(function(){
				$(this).animate({bottom:'308px'},320).addClass("current");
				$('.togclose').animate({bottom:'308px'},320);
				$('.tog').addClass('current');
				$('.togclose').addClass('current');
				$('.tog_contact').slideDown(320);
			})
			$('.togclose').click(function(){
				$('.cont').animate({bottom:'0'},320).removeClass("current");
				$(this).animate({bottom:'0'},320);
				$('.tog_contact').slideUp(320);
				$('.tog').removeClass('current');
				$('.togclose').removeClass('current');
			});
	$(".menu_l_list li:last").css({"background":"none"}); 
	$(".crumbNav em:last").css({"color":"#B10000","padding":"0"}); 
	$(".brea_tab th:last").css({"border-right":"none"}); 
	$(".serice_content .serice_list:last").css({"border-bottom":"none"}); 
})