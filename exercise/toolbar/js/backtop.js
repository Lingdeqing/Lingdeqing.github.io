define(['jquery', 'scrollto'], function ($, scrollto) {

	function BackTop(el, opts){
		this.$el = $(el);
		this.opts = $.extend({}, BackTop.DEFAULTS, opts);

		this.scroll = new scrollto.ScrollTo({
			dest:0,
			speed:this.opts.speed
		});

		if(this.opts.mode == 'move'){
			this.$el.on('click', $.proxy(this._move, this));
		} else {
			this.$el.on('click', $.proxy(this._go, this));
		}
		
		this._checkPos();
		$(window).on('scroll', $.proxy(this._checkPos, this));
	}
	BackTop.DEFAULTS = {
		mode:'move',
		speed:800,
		pos: $(window).height()
	}

	BackTop.prototype._move = function(){
		this.scroll.move();
	}

	BackTop.prototype._go = function(){
		this.scroll.go();
	}

	BackTop.prototype._checkPos = function(){
		if($(window).scrollTop() > this.opts.pos){
			$('#backTop').fadeIn();
		} else {
			$('#backTop').fadeOut();
		}
	}

	$.fn.extend({
		backtop: function(opts){
			this.each(function(){
				new BackTop(this, opts)
			})
			return this;
		}
	});

	return {
		BackTop:BackTop
	}
})