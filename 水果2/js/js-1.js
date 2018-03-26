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

// 音乐
		document.addEventListener('DOMContentLoaded', function () {
    function audioAutoPlay() {
        var audio = document.getElementById('music2');
            audio.play();
        document.addEventListener("WeixinJSBridgeReady", function () {
            audio.play();
        }, false);
    }
    audioAutoPlay();
});
	 function playPause(){
                var music = document.getElementById('music2');    
                var music_btn = document.getElementById('music_btn2');
                var music_btn3 = document.getElementById('music_btn3');
                setTimeout(function(){  
                    if (music.paused){    
                        music.play();    
                        music_btn.src = 'img/music.png';  
                        music_btn.style.display ="block";  
                        music_btn3.style.display="none";
                    }    
                    else{    
                        music.pause();   
                        music_btn.style.display ="none";
                        music_btn3.style.display="block";
                        music_btn.src = 'img/music1.png';     
                    }   
                },0) ;
            }