$(document).ready(function() {
console.log('running')
function Drop() {
	$('#dragableOne').draggable({
		revert : function(event, ui) {
		$(this).data('uiDraggable').originalPossition = {
			top: 5,
			left: 5
			};
			return !event;
		}
	});
}
	
	$('.snapTarget').droppable({
		drop: function( event, ui ) {
	console.log('snapTarget drop');
	$(this).addClass('.holdingItem');
	holdingCheck();
}
});
function holdingCheck() {
	if($('.snapTarget').hasClass('.holdingItem') == true) {
	console.log('has box');
	} else {
	console.log('has no box');
	}
	}
	Drop();
});
