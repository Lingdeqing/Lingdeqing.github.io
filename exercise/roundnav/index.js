requirejs.config({
	paths:{
		jquery:'jquery-3.1.0.min'
	}
})

requirejs(['jquery'], function ($) {

	var PI = Math.PI, sin = Math.sin, cos = Math.cos,
		sqrt = Math.sqrt, pow = Math.pow;

	var navWrap = $('#navWrap'),
		navBtn = navWrap.find('a.nav-btn'),
		navItems = navWrap.find('a.nav-item'),
		gap = 2*PI / navItems.length,
		a = navWrap.width()/2, b = navWrap.height()/2;//椭圆长轴和短轴

	navBtn.on('click', function(e){
		
		e.preventDefault();

		navItems.each(function(index, item){
			var beta = gap * index,//弧度
			    r = sqrt(1 / (pow(cos(beta) / a, 2) + 
					pow(sin(beta) / b, 2)) ),	    
				x = a + r * cos(beta),
				y = b - r * sin(beta);

			$(this).css({
				left:x,
				top:y,
			})
		})
		
		navWrap.toggleClass('active');
	});

})