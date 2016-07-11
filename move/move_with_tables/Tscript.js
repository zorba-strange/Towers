$(document).ready(function(){
	console.log('running');
	var drag = $('.draggable');
	var drop = $('.droppable');
	var currentDrop;
// Identify draggable objects, return them back to where they were if
// dropped in an illiegal place.
	drop.droppable({
	drop: function(event, ui) {
		var dropId = ui.draggable.attr("id");
		// ui.draggable.addClass( 'dropped' );
		// ui.draggable.data( 'droppedin', $(this));
		$(this).addClass(dropId)
		// $(this).droppable( 'disable' );
		currentDrop = $(this).attr('id');
		return currentDrop;
	}
	});
	drag.draggable({
		start: function(event, ui){
			var dragId = $(this).attr("id");
			$('#' + currentDrop).removeClass(dragId);
		},
		revert: function(event, ui) {
		var offset = $(this).offset();
			$(this).data('uiDraggable').originalPosition = {
			top: offset.top,
			left: offset.left
			}
			return !event
		},
		snap: '.droppable',
		snapMode: 'inner',
		drag: function(event, ui) {
			if($(this).data('droppedin')){
				// $(this).data('droppedin').droppable('enable')
				// $(this).data('droppedin', null);
				// $(this).removeClass('dropped')
			}},
				});
});
