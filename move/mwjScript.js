$(document).ready(function() {
console.log('running')
function Drop() {
	$('#dragableOne').draggable({
		snap: '.snapTarget',
		snapMode: 'inner',
		revert : function(event, ui) {
		$(this).data('uiDraggable').originalPossition = {
			top: 0,
			left: 0
			};
			return !event;
		}
	});
}
	
	$('.snapTarget').droppable({
		out: function(event, ui) {
		$(this).removeClass('holding');
		$(this).addClass('empty');
		console.log(this.id, this.className);
		},
		drop: function( event, ui ) {
		$(this).removeClass('empty');
		$(this).addClass('holding');
	console.log(this.id, this.className);
}
});
	Drop();
});
