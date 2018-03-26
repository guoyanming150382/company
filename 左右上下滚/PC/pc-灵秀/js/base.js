
function stop(){ 
		return false; 
	} 
	document.oncontextmenu=stop; 

$(function(){
	$(".banner .button").hover(function(){
		$(this).find("span").stop(true,true).animate({left:0})
	},function(){
		$(this).find("span").stop(true,true).animate({left:-220})
	})
})


$(function(){
//棣栭〉鍥涗釜鍥剧墖
	$(".sed_nav li").hover(function(){
		$(this).find("span.con").fadeOut();
		$(this).find("span.con").children("span").stop(true,true).animate({right:"90%"})
		$(this).find("span.con").children("img").stop(true,true).animate({right:"0%"})
	},function(){
		$(this).find("span.con").fadeIn();
		$(this).find("span.con").children("span").stop(true,true).animate({right:"43%"})
		$(this).find("span.con").children("img").stop(true,true).animate({right:"35%"})
	})
//	棣栭〉瀛楀垏鎹�
    var num=0;
	$(".lunbo .item div").eq(0).show()
	$(".lunbo h2").animate({'margin':0,'opacity':1},800);
	$(".lunbo p").animate({'margin':0,'opacity':1},800);
	$(".next").click(function(){
		if(!$(".lunbo .item div").eq(num).find("p").is(":animated")){
			$(".lunbo h2").css({'margin-right':'300px',"opacity":0});
			$(".lunbo p").css({'margin-left':'300px',"opacity":0});
			num++;
			if(num>2){
				num=0;
			}
			$(".lunbo .item div").eq(num).show().siblings().hide();
			$(".lunbo h2").animate({'margin':0,'opacity':1},800);
			$(".lunbo p").animate({'margin':0,'opacity':1},800);
		}
	})
	$(".prev").click(function(){
		if(!$(".lunbo .item div").eq(num).find("p").is(":animated")){
			$(".lunbo h2").css({'margin-right':'300px',"opacity":0});
			$(".lunbo p").css({'margin-left':'300px',"opacity":0});
			num--;
			if(num<0){
				num=2;
			}
			$(".lunbo .item div").eq(num).show().siblings().hide();
			$(".lunbo h2").animate({'margin':0,'opacity':1},800);
			$(".lunbo p").animate({'margin':0,'opacity':1},800);
		}
	})
	function zidong(){
		$(".next").trigger("click");
	}
	var se = setInterval(zidong,5000);
	$(".lunbo h2,.lunbo p").hover(function(){
		clearInterval(se);
	},function(){
		se = setInterval(zidong,5000);
	})

	//瀵艰埅涓嬪垝绾�
	/*$(".ml-link li").hover(function(){
		var liw=$(this).width()
		$(this).find("div").stop(true,true).animate({"width":liw},300);
	},function(){
		$(this).find("div").animate({"width":0},300)
	})*/


	//	棣栭〉鍚戜笅鍦嗗湀
	setInterval(function(){
		$(".arrow").animate({bottom:'20px',opacity:'1'},400).animate({bottom:'30px',opacity:'.6'},400)
	},400);
//鍐呴〉瀵艰埅
	$(window).scroll(function(){
		if($(window).scrollTop()>0){
			$('.ml-nav').addClass("curr")
			$('.ml-nav').find(".ml-logo img").attr("src","/Public/home/images/logo1.png");
			$('.ml-nav').find(" li div").css("background","#333333")
		}
		else {
			$('.ml-nav').removeClass("curr");
			$('.ml-nav').find(".ml-logo img").attr("src","/Public/home/images/logo.png");
			$('.ml-nav').find(" li div").css("background","#fff")
		}
	})

//鍐呴〉杞挱鍐呴〉banner浣嶇疆澶у皬
	function lunbo(){
	var sw=$(window).width();
	$(".other_banner").css("height",sw/1920*800+"px")
		var sh=$(".other_banner").height();
		var lh=$(".lunbo").height();
		if(sh>400){
			$(".other_banner .lunbo").css("margin-top",(sh-lh)/1.8+"px")
		}
	}
	lunbo()
	$(window).resize(function(){
			lunbo()
	})
	//鎸夐挳鏍峰紡
	$(".button_box").hover(function(){
		$(this).find("span").stop(true,true).animate({left:0},400)
		$(this).find("a").stop(true,true).animate({"line-height":"120px"},400)
	},function(){
		$(this).find("span").stop(true,true).animate({left:-220},400)
		$(this).find("a").stop(true,true).animate({"line-height":"48px"},400)
	})
//	鍐呴〉鑴氫笅鎷�
	$("a.xiala").click(function(){
		$(this).parents(".parter").toggleClass("auto_height")
	})
//鍐呴〉浜岀淮鐮�
	$(".weixin").click(function(){
		$(".qr_code").fadeToggle(600);
	})
//web_video宸�
	$(".serBox").hover(
  		function () {
	 		$(this).children().stop(false,true);
	 		$(this).children(".serBoxOn").fadeIn();
     		$(this).children(".pic1").animate({right: -110},800);
     		$(this).children(".pic2").animate({left: 46},800);
     		$(this).children(".txt1").animate({left: -240},800);
     		$(this).children(".txt2").animate({right: 0},800);
	 	},
  		function () {
			$(this).children().stop(false,true);
	 		$(this).children(".serBoxOn").fadeOut();
	 		$(this).children(".pic1").animate({right:46},800);
     		$(this).children(".pic2").animate({left: -110},800);
     		$(this).children(".txt1").animate({left: 0},800);
     		$(this).children(".txt2").animate({right: -240},800);
  		}
	);
//姣旇緝
	$(".compare_info .img_box").hover(function(){
		$(this).find(".left").stop(true,false).animate({left:'100px'},400);
		$(this).find(".right").stop(true,false).animate({right:'100px'},400);
	},function(){
		$(this).find(".left").stop(true,false).animate({left:'0'},400);
		$(this).find(".right").stop(true,false).animate({right:'0'},400);
	})
//鍥涘ぇ鏈嶅姟
	function set(){
		$(".wedo_box .item0").hover(function(){
			$(this).addClass("on").siblings().removeClass("on")
	        var i=$(this).index();
	        if($(window).width()>1320){
		        if(i==0)
		        {
		            $(".item0").eq(1).stop(true,false).animate({left:"480px"},600)
		            $(".item0").eq(2).stop(true,false).animate({left:"760px"},600)
		            $(".item0").eq(3).stop(true,false).animate({left:"1040px"},600)
		        }
		        else if(i==1)
		        {
		            $(".item0").eq(1).stop(true,false).animate({left:"280px"},600)
		            $(".item0").eq(2).stop(true,false).animate({left:"760px"},600)
		            $(".item0").eq(3).stop(true,false).animate({left:"1040px"},600)
			    }
			    else if(i==2){
		            $(".item0").eq(1).stop(true,false).animate({left:"280px"},600)
		            $(".item0").eq(2).stop(true,false).animate({left:"560px"},600)
		            $(".item0").eq(3).stop(true,false).animate({left:"1040px"},600)
			    }
			    else{
		            $(".item0").eq(1).stop(true,false).animate({left:"280px"},600)
		            $(".item0").eq(2).stop(true,false).animate({left:"560px"},600)
		            $(".item0").eq(3).stop(true,false).animate({left:"840px"},600)
			    }
			}
	        else{
	        	if(i==0)
		        {
		            $(".item0").eq(1).stop(true,false).animate({left:"400px"},600)
		            $(".item0").eq(2).stop(true,false).animate({left:"600px"},600)
		            $(".item0").eq(3).stop(true,false).animate({left:"800px"},600)
		        }
		        else if(i==1)
		        {
		            $(".item0").eq(1).stop(true,false).animate({left:"200px"},600)
		            $(".item0").eq(2).stop(true,false).animate({left:"600px"},600)
		            $(".item0").eq(3).stop(true,false).animate({left:"800px"},600)
			    }
			    else if(i==2){
		            $(".item0").eq(1).stop(true,false).animate({left:"200px"},600)
		            $(".item0").eq(2).stop(true,false).animate({left:"400px"},600)
		            $(".item0").eq(3).stop(true,false).animate({left:"800px"},600)
			    }
			    else{
		            $(".item0").eq(1).stop(true,false).animate({left:"200px"},600)
		            $(".item0").eq(2).stop(true,false).animate({left:"400px"},600)
		            $(".item0").eq(3).stop(true,false).animate({left:"600px"},600)
			    }
	        }
		})
	}
set();
$(window).resize(function(){
	set();
})
//	btn
	$(".buy .btn").hover(function(){
		$(this).find("span").stop(true,false).animate({'margin-top':0},400)
	},function(){
		$(this).find("span").stop(true,false).animate({'margin-top':'-50px'},400)
	})

//	-----------------------------------------------------------------------
//鍥涘ぇ浼樺娍
	$(".app_goods li").mouseleave(function(){
		$(this).removeClass("on");
	})
	$(".info .tab").find("div").eq(0).show()
	$(".app_goods li").mouseenter(function(){
		var index=$(this).index();
		$(this).addClass("on").siblings().removeClass("on");
		$(".info .tab").find("div").eq(index).show().siblings().hide()
	})
	//app_set
	$(".app_set li").hover(function(){
		$(this).stop(true,false).animate({top:'-8px'},600)
	},function(){
		$(this).stop(true,false).animate({top:'0'},600)
	})
	if($(".app_set li").length>6){
		$(".app_set li:eq(6)").hide();
		$(".app_set li:eq(7)").hide();
	}
	$(".app_set .add").click(function(){
		$("li").show(600);
		$(this).hide(600)
	})
})


/**妗堜緥灞曠ず**/
$(function(){

	$(".maincontent_anli li").hover(function(){
		$(this).find(".zhezhao").stop().animate({top:0},"slow")
		$(this).find(".bg").stop().animate({paddingTop:0},"slow")
	},function(){
		$(this).find(".zhezhao").stop().animate({top:-180},"slow")
		$(this).find(".bg").stop().animate({paddingTop:89},"slow")
	})


	$(".maincontent_anli li").hover(function(){
		$(this).find(".zhezhao1").stop().animate({top:0},"slow")
		$(this).find(".bg").stop().animate({paddingTop:0},"slow")
	},function(){
		$(this).find(".zhezhao1").stop().animate({top:-533},"slow")
		$(this).find(".bg").stop().animate({paddingTop:89},"slow")
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


/*VIDEO*/

$(document).ready(function() {
		timer = setInterval (function(){
			$(".videobox").addClass("current");
		},2000);
		$(".closex").click(function(){
			$(".videobox").fadeOut();
			clearInterval(timer);
		})
});


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