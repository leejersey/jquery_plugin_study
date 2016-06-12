//隐式迭代
// (function($){
// 	$.fn.swapClass = function(class1,class2){
// 		this.each(function(){
// 			$element = $(this);
// 			if($element.hasClass(class1)){
// 				$element.removeClass(class1).addClass(class2);
// 			}
// 			else if($element.hasClass(class2)){
// 				$element.removeClass(class2).addClass(class1);
// 			}
// 		})
		
// 	}
// })(jQuery);

//方法连缀
(function($){
	$.fn.swapClass = function(class1,class2){
		return this.each(function(){
			$element = $(this);
			if($element.hasClass(class1)){
				$element.removeClass(class1).addClass(class2);
			}
			else if($element.hasClass(class2)){
				$element.removeClass(class2).addClass(class1);
			}
		})
		
	}
})(jQuery);