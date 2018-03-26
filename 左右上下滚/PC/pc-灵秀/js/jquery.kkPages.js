/**

 * Description 鍒嗛〉鎻掍欢
 * Powered By 灏廗
 * QQ 908526866
 * E-mail lnend@sina.cn
 * Data 2013-05-28
 * Dependence jQuery v1.8.3
 
 **/
 
 
(function($){

	$.fn.kkPages = function(options){
		
		var opts = $.extend({},$.fn.kkPages.defaults, options);
		
		return this.each(function(){		
  			
			var $this = $(this);
			var $PagesClass = opts.PagesClass; // 鍒嗛〉鍏冪礌
			var $AllMth = $this.find($PagesClass).length;  //鎬讳釜鏁�
			var $Mth = opts.PagesMth; //姣忛〉鏄剧ず涓暟
			var $NavMth = opts.PagesNavMth; // 瀵艰埅鏄剧ず涓暟
			
			
			// 瀹氫箟鍒嗛〉瀵艰埅
			var PagesNavHtml = "<div class=\"Pagination\"><a href=\"javascript:;\" class=\"homePage\">棣栭〉</a><a href=\"javascript:;\" class=\"PagePrev\">涓婁竴椤�</a><span class=\"Ellipsis\"><b>...</b></span><div class=\"pagesnum\"></div><span class=\"Ellipsis\"><b>...</b></span><a href=\"javascript:;\" class=\"PageNext\">涓嬩竴椤�</a><a href=\"javascript:;\" class=\"lastPage\">灏鹃〉</a><cite class=\"FormNum\">鐩存帴鍒扮<input type=\"text\" name=\"PageNum\" id=\"PageNum\">椤�</cite><a href=\"javascript:;\" class=\"PageNumOK\">纭畾</a></div>";

			/*榛樿鍒濆鍖栨樉绀�*/
			
			if($AllMth > $Mth){
					
					//鍒ゆ柇鏄剧ず
					var relMth = $Mth - 1;
					$this.find($PagesClass).filter(":gt("+relMth+")").hide();

					// 璁＄畻鏁伴噺,椤垫暟
					var PagesMth = Math.ceil($AllMth / $Mth); // 璁＄畻椤垫暟
					var PagesMthTxt = " ";
					$this.append(PagesNavHtml).find(".Pagination").append(PagesMthTxt);
					
					
					// 璁＄畻鍒嗛〉瀵艰埅鏄剧ず鏁伴噺
						
						var PagesNavNum = "";
						for(var i=1;i<=PagesMth;i++){
							
							PagesNavNum = PagesNavNum + "<a href=\"javascript:;\">"+i+"</a>";
					
							};
						
						$this.find(".pagesnum").append(PagesNavNum).find("a:first").addClass("PageCur");

					
					//鍒ゆ柇鏄惁鏄剧ず鐪佺暐鍙�
					if($NavMth < PagesMth){
							
							$this.find("span.Ellipsis:last").show();
							var relNavMth = $NavMth - 1;
							$this.find(".pagesnum a").filter(":gt("+relNavMth+")").hide();
							
						}else{
							
								$this.find("span.Ellipsis:last").hide();
							};
					
					
				/*榛樿鏄剧ず宸插畬鎴�,涓嬮潰鏄帶鍒跺尯鍩熶唬鐮�*/
				
				
				//璺宠浆椤甸潰
				var $input = $this.find(".Pagination #PageNum");
				var $submit = $this.find(".Pagination .PageNumOK");
				
				//璺宠浆椤甸潰鏂囨湰妗�
				$input.keyup(function(){
					
						var pattern_d = /^\d+$/; //鍏ㄦ暟瀛楁鍒�
						
						if(!pattern_d.exec($input.val())) {   
                  		 	
							alert("鍙嬫儏鎻愮ず锛歕n\n璇峰～鍐欐纭殑鏁板瓧锛�");
							$input.focus().val("");
							return false
							
                		};
						
					});
				
				//璺宠浆椤甸潰纭畾鎸夐挳
				$submit.click(function(){
					
						if($input.val() == ""){
							
							alert("鍙嬫儏鎻愮ず锛歕n\n璇峰～鍐欐偍瑕佽烦杞埌绗嚑椤碉紒");
							$input.focus().val("");
							return false
							
							}if($input.val() > PagesMth){
								
								alert("鍙嬫儏鎻愮ず锛歕n\n鎮ㄨ烦杞殑椤甸潰涓嶅瓨鍦紒");
								$input.focus().val("");
								return false
								
								}else{
							
								showPages($input.val());
							
							};
					
					});
					
				
				//瀵艰埅鎺у埗鍒嗛〉
				var $PagesNav = $this.find(".pagesnum a"); //瀵艰埅鎸囧悜
				var $PagesFrist = $this.find(".homePage"); //棣栭〉
				var $PagesLast = $this.find(".lastPage"); //灏鹃〉
				var $PagesPrev = $this.find(".PagePrev"); //涓婁竴椤�
				var $PagesNext = $this.find(".PageNext"); //涓嬩竴椤�
				
				//瀵艰埅鎸囧悜
				$PagesNav.click(function(){
					
						var NavTxt = $(this).text();
						showPages(NavTxt);
					
					});
					
				//棣栭〉
				$PagesFrist.click(function(){
					
						showPages(1);
					
					});
					
				//灏鹃〉
				$PagesLast.click(function(){
					
						showPages(PagesMth);
					
					});
					
				//涓婁竴椤�
				$PagesPrev.click(function(){
						
						var OldNav = $this.find(".pagesnum a[class=PageCur]");

						if(OldNav.text() == 1){}else{
									
									var NavTxt = parseInt(OldNav.text()) - 1;
									showPages(NavTxt);
								
								};
					
					});
					
				//涓嬩竴椤�
				$PagesNext.click(function(){
						
						var OldNav = $this.find(".pagesnum a[class=PageCur]");
	
						if(OldNav.text() == PagesMth){}else{
									
									var NavTxt = parseInt(OldNav.text()) + 1;
									showPages(NavTxt);
								
								};
					
					});
			
			// 涓讳綋鏄剧ず闅愯棌鍒嗛〉鍑芥暟
			function showPages(page){

					$PagesNav.each(function(){
						
						var NavText = $(this).text();
						
						if(NavText == page){
					
							$(this).addClass("PageCur").siblings().removeClass("PageCur");					
				
						};
					});
				
				//鏄剧ず瀵艰埅鏍峰紡
				var AllMth = PagesMth / $NavMth;
				for(var i=1;i<=AllMth;i++){
					
						if(page > (i*$NavMth)){
							
								$PagesNav.filter(":gt("+(i*$NavMth-1)+")").show();
								$PagesNav.filter(":gt("+(i*$NavMth-1+$NavMth)+")").hide();
								$PagesNav.filter(":lt("+(i*$NavMth)+")").hide();
								
								$this.find("span.Ellipsis:first").show();							
							
							};
						
						if(page <= $NavMth){
							
								$PagesNav.filter(":gt("+($NavMth-1)+")").hide();
								$PagesNav.filter(":lt("+$NavMth+")").show();
								
								$this.find("span.Ellipsis:first").hide();								
							
							};

					};
					
					
					// 鏄剧ず鍐呭鍖哄煙
					var LeftPage = $Mth * (page-1);
					var NowPage = $Mth * page;
				
					$this.find($PagesClass).hide();
					$this.find($PagesClass).filter(":lt("+(NowPage)+")").show();
					$this.find($PagesClass).filter(":lt("+(LeftPage)+")").hide();
					
				};
				
				
			}; //鍒ゆ柇缁撴潫			
				
		}); //涓讳綋浠ｇ爜
	};
	
	// 榛樿鍙傛暟
	$.fn.kkPages.defaults = {
		
		PagesClass:'.item', //闇€瑕佸垎椤电殑鍏冪礌
		PagesMth:4, //姣忛〉鏄剧ず涓暟		
		PagesNavMth:5 //鏄剧ず瀵艰埅涓暟
	};
	
	$.fn.kkPages.setDefaults = function(settings) {
		$.extend( $.fn.kkPages.defaults, settings );
	};
	
})(jQuery);