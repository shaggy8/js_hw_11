(function ($) {

	$.fn.roundabout = function(options) {

		var settings = $.extend({
			'boxSize': 3,
			'imgMargin': 20,
			'imgWidth': 320,
		}, options);
		var $mainBox = this;
		var $elems = {
			'box': $mainBox.find('div.roundabout-box'),
			'list': $mainBox.find('ul.roundabout-list'),
			'items': $mainBox.find('li.roundabout-item'),
			'imgs': $mainBox.find('li.roundabout-item>img'),
			'button': {
				'left': $mainBox.find('button.roundabout-arrow-left'),
				'right': $mainBox.find('button.roundabout-arrow-right'),
			}
		};


		$elems.imgs.css({
			'width': settings.imgWidth,
		});

		$elems.items.css({
			'float': 'left',
			'margin-right': settings.imgMargin,
			'text-align': 'center',
		});

		$elems.list.css({
			'position': 'relative',
			'left': 0,
			'padding': 0,
			'width': 10000,
			'list-style': 'none',
		});

		$elems.box.css({
				'width': settings.imgWidth * settings.boxSize + settings.imgMargin * (settings.boxSize - 1),
				'overflow': 'hidden',
		});

		$mainBox.css({
				'position': 'relative',
				'padding-left': $elems.button.left.outerWidth(true),
				'padding-right': $elems.button.right.outerWidth(true),
				'width': settings.imgWidth * settings.boxSize + settings.imgMargin * (settings.boxSize - 1),
			});


		$elems.button.left.click(function() {

			var left = parseFloat($elems.list.css('left'));
			var move = left + $elems.box.width() + settings.imgMargin;
			var end = - (settings.imgMargin + settings.imgWidth) * ($elems.imgs.length - settings.boxSize);
			if (left > - $elems.box.width()) {
				move = 0;
			}
			if (left === 0) {
				move = end;
			}
			$elems.list.animate({
				'left': move,
			}, 'slow')
		});;

		$elems.button.right.click(function() {

			var left = parseFloat($elems.list.css('left'));
			var move = left - $elems.box.width() - settings.imgMargin;
			var end = - (settings.imgMargin + settings.imgWidth) * ($elems.imgs.length - settings.boxSize);
			if (left < end + $elems.box.width()) {
				move = end;
			}
			if (left === end) {
				move = 0;
			}
			$elems.list.animate({
				'left': move,
			}, 'slow')
		});


		$elems.imgs.load(function() {

			$elems.button.left
				.css({
					'position': 'absolute',
					'left': 0,
					'top': $mainBox.innerHeight() / 2 - $elems.button.left.outerHeight() / 2,
					'z-index': 5,
				});

			$elems.button.right
				.css({
					'position': 'absolute',
					'right': 0,
					'top': $mainBox.innerHeight() / 2 - $elems.button.right.outerHeight() / 2,
					'z-index': 5,
				});
		});


		return this;
	}; 

})(jQuery);