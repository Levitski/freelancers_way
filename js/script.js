$(document).ready(function(){
	animation_init()
});

function animation_init(){
	$('[anim]').each(function(){
		var $this = $(this);
		var $items = $this.find('[anim-item]');
		var time = $this.attr('anim-item-time') || 400;
		var delay = $this.attr('anim-item-delay') || 0;
		var duration = $this.attr('anim-item-duration') || ((time * 2) + 'ms');
		$items.each(function(){
			var $item = $(this);
			var anim = $item.attr('anim-item') || '';
			if(anim != ''){
				if(!$item.hasClass('visible')){
					$item.addClass('invisible');
				}
				$item.viewportChecker({
					classToAdd: 'visible animated ' + anim + 'In',
					classToRemove: 'invisible',
					offset: 50,
				});
				$item.css({
					'animation-delay': delay + 'ms',
					'animation-duration': duration,
				});
				delay += time;
			}
		});
		var anim = $this.attr('anim') || ''; // fade
		if(anim != ''){
			if(!$this.hasClass('visible')){
				$this.addClass('invisible');
			}
			$this.viewportChecker({
				classToAdd: 'visible animated ' + anim + 'In',
				classToRemove: 'invisible',
				offset: 50,
			});
		}
	});
	
	return true;
}