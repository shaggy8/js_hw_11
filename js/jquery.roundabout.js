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

		$elems.button.left.click(function() {
			if ($elems.list.css('left') == '0px') return;
			var rightMove = parseFloat($elems.list.css('left')) + $elems.box.width() + settings.imgMargin;
			$elems.list.animate({
				'left': rightMove
			}, 'slow')
		});;

		$elems.button.right.click(function() {
			var leftMove = parseFloat($elems.list.css('left')) - $elems.box.width() - settings.imgMargin;
			$elems.list.animate({
				'left': leftMove
			}, 'slow')
		});

		$mainBox.css({
				'position': 'relative',
				'padding-left': $elems.button.left.outerWidth(true),
				'padding-right': $elems.button.right.outerWidth(true),
				'width': settings.imgWidth * settings.boxSize + settings.imgMargin * (settings.boxSize - 1),
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