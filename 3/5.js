//可定制的默认值
(function($){
	$.fn.shadow = function(opts){

		var options = $.extend({}, $.fn.shadow.defaults, opts);
	
		return this.each(function(){
			var $element = $(this);
			for(var i=0;i<options.copies;i++){
				var offset = options.copyoffset(i);
				$element.clone()
						.css({
							position:'absolute',
							left:$element.offset().left + offset.x,
							top:$element.offset().top + offset.y,
							margin:0,
							zindex:-1,
							opacity:options.opacity
						})
						.appendTo('body');
			}

		})
	}
	$.fn.shadow.defaults ={
			copies:5,
			opacity:0.1,
			copyoffset:function(index){
				return {x:index,y:index};
			}
		}
})(jQuery);