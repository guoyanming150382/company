window.onload=function(){
	// 导航栏目
	// 下拉
		var oMenu1=document.getElementById("one-menu");
		var oMenu2=document.getElementById("two-menu");
		var oMenu3=document.getElementById("three-menu");
		var oQiye1=document.getElementById("qiye1");
		var oQiye2=document.getElementById("qiye2");
		var oQiye3=document.getElementById("qiye3");
		var Tmenu=null;

		oQiye1.onmouseover=function(){
			clearTimeout(Tmenu);
			oMenu1.style.display="block";
			oMenu2.style.display="none";
			oMenu3.style.display="none";
		}
		oQiye2.onmouseover=function(){
			clearTimeout(Tmenu);
			oMenu2.style.display="block";
			oMenu1.style.display="none";
			oMenu3.style.display="none";
		}
		oQiye3.onmouseover=function(){
			clearTimeout(Tmenu);
			oMenu3.style.display="block";
			oMenu2.style.display="none";
			oMenu1.style.display="none";
		}
		oQiye1.onmouseout=function(){
			Tmenu=setTimeout(function(){
			oMenu1.style.display="none";
		},100);
		}
		oQiye2.onmouseout=function(){
			Tmenu=setTimeout(function(){
			oMenu2.style.display="none";
		},100);
		}
		oQiye3.onmouseout=function(){
			Tmenu=setTimeout(function(){
			oMenu3.style.display="none";
		},100);
		}
// 点击换色
		var oNav=document.getElementById("navb");
		var oNali=oNav.getElementsByClassName("nav-became");
		console.log("99",oNali);

		for(var i=0;i<oNali.length;i++){
			oNali[i].index=i;
			oNali[i].onclick=function(){
				now=this.index;
				aaa();
			}
		}

		function aaa(){
			for(var i=0;i<oNali.length;i++){
				oNali[i].style.backgroundColor="";
			}
			setTimeout(function(){
				oNali[now].style.backgroundColor="#aaa";
			},100);
			
		}

		// 轮播图
		var odiv2=document.getElementById('div2');
			var odiv1=document.getElementById('div1');
			var odiv3=document.getElementById('div3');
			var oimg=document.getElementById('img').children;
			var ol1=document.getElementById('ul1').children;
			var now=0//当前元素,


			for(var i=0;i<ol1.length;i++){
				ol1[i].index=i;
				ol1[i].onclick=function(){
					now=this.index;
					tab()
				}
			}
			function tab(){
				for(var i=0;i<ol1.length;i++){
						ol1[i].className="";
						oimg[i].style.zIndex=1;
						oimg[i].style.opacity=0.3;
					}
					ol1[now].className="mo";
					oimg[now].style.zIndex=30;
					// oimg[this.index].style.opacity=1;
					move(oimg[now],{opacity:100});//输入封装函数 改变对象  改变属性
			}


			odiv3.onclick=function(){
				now++;
				if(now==ol1.length){
					now=0;
				}
				tab();
			}
			odiv2.onclick=function(){
				now--;
				if(now<0){
					now=ol1.length-1;
				}
				tab();
			}



			var timer=setInterval(function(){
				odiv3.onclick();
			},3000);
			odiv1.onmouseover=function(){
				clearInterval(timer);
			}
			odiv1.onmouseout=function(){
				timer=setInterval(function(){
				odiv3.onclick();
			},3000);
			}

}
	// 导航栏跟随
window.onscroll=function(){
	var vHt=document.documentElement.scrollTop || document.body.scrollTop; 
	var oTop=document.getElementById("top-nav");
	if(vHt>300){
		$("#top-nav").css({"height":"60px","margin":"auto","backgroundColor":"rgba(255,255,255,0.8)"});
	}else{$("#top-nav").css({"height":"80px","backgroundColor":"rgba(255,255,255,1)"});}
}