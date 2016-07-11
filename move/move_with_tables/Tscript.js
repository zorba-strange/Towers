$(document).ready(function(){
	console.log('running');
	var drag = $('.draggable');
	var drop = $('.droppable');
	var position = $('.draggable').offSet();
// Identify draggable objects, return them back to where they were if
// dropped in an illiegal place.
	drop.droppable({
	drop: function(event, ui) {
		ui.draggable.addClass( 'dropped' );
		ui.draggable.data( 'droppedin', $(this));
		$(this).droppable( 'disable' );
	}
	});
	drag.draggable({
		revert: function(event, ui) {
			$(this).data('uiDraggable').originalPosition = {
			top: 0,
			left: 0
			}
			return !event
		},
		snap: '.droppable',
		snapMode: 'inner',
		drag: function(event, ui) {
			if($(this).data('droppedin')){
				$(this).data('droppedin').droppable('enable')
				$(this).data('droppedin', null);
				$(this).removeClass('dropped')
			}
		}});
});
