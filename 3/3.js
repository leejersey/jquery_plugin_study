//方法的参数
// (function($){
// 	$.fn.shadow = function(){
// 		return this.each(function(){
// 			var $element = $(this);
// 			for(var i=0;i<5;i++){
// 				$element.clone()
// 						.css({
// 							position:'absolute',
// 							left:$element.offset().left + i,
// 							top:$element.offset().top + i,
// 							margin:0,
// 							zindex:-1,
// 							opacity:0.1
// 						})
// 						.appendTo('body');
// 			}
// 		})
		
// 	}
// })(jQuery);

//参数映射
// (function($){
// 	$.fn.shadow = function(options){
// 		return this.each(function(){
// 			var $element = $(this);
// 			for(var i=0;i<options.copies;i++){
// 				$element.clone()
// 						.css({
// 							position:'absolute',
// 							left:$element.offset().left + i,
// 							top:$element.offset().top + i,
// 							margin:0,
// 							zindex:-1,
// 							opacity:options.opacity
// 						})
// 						.appendTo('body');
// 			}
// 		})
		
// 	}
// })(jQuery);

//默认参数
(function($){
	$.fn.shadow = function(opts){
		var defaults ={
			copies:3,
			opacity:0.25
		};
		var options = $.extend(defaults,opts);
	
		return this.each(function(){
			var $element = $(this);
			for(var i=0;i<options.copies;i++){
				$element.clone()
						.css({
							position:'absolute',
							left:$element.offset().left + i,
							top:$element.offset().top + i,
							margin:0,
							zindex:-1,
							opacity:options.opacity
						})
						.appendTo('body');
			}
		})
		
	}
})(jQuery);