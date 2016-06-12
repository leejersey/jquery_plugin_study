//数组求和插件
(function($){
	$.sum = function(array){
		var total = 0;
		$.each(array,function(index,value){
			value = $.trim(value);
			value = parseFloat(value) || 0;

			total += value;
		})

		return total;
	}
})(jQuery);

//数组求平均值插件
(function($){
	$.average = function(array){
		if($.isArray(array)){
			return $.sum(array)/array.length;
		}
		return '';
	}
})(jQuery);