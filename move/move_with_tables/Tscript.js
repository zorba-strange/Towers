$(document).ready(function(){
	console.log('running');
	var drag = $('.draggable');
	var drop = $('.droppable');
	var currentDrop;
	var currentIdNum;
// Identify draggable objects, return them back to where they were if
// dropped in an illiegal place.
	drop.droppable({
	drop: function(event, ui) {
		var dropId = ui.draggable.attr("id");
		// ui.draggable.addClass( 'dropped' );
		// ui.draggable.data( 'droppedin', $(this));
		currentIdNum = dropId.charAt(1);
		$(this).attr('id', dropId.charAt(1));
		currentDrop = $(this).attr('id');
		$('#' + dropId).addClass(currentDrop);
		if($(this).hasClass('col1')){
			console.log('col1');
			var idLast = $('.col1').last().attr('id');
			var dropingId = dropId.charAt(1);
			console.log('last id', idLast);
			console.log('dopping id', dropingId)
			if (parseInt(idLast) < parseInt(dropingId)) {
					console.log('too big');
				}
				};
		// $(this).droppable( 'disable' );
		// if($(this).parent().attr('id') == 'tr1') {
		//   console.log('we are in the top row');
		//   console.log($('.col1'));
		//   // row.find('td').each(function(index) {
		//   //   console.log(index.attr('id'));
		//   //   });
		// } else {
		//   console.log('not in top row');
		//   var row = $(this).parent().siblings();
		//   console.log($('.col2'));
		// }
		return currentDrop;
	}
	});
	drag.draggable({
		start: function(event, ui){
			var dragId = $(this).attr("id");
			// $('#' + currentIdNum).removeAttr('id');
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
				// $(this).data('droppedin').droppable('enable')
				// $(this).data('droppedin', null);
				// $(this).removeClass('dropped')
			},
				});
});
