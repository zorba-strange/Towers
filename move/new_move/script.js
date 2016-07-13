$(document).ready(function(){
	console.log('running')
// Global variables
	var colId;
	var levelPicked = 3;
	var level = $('#level')
	var col1 = $('#col1')
	var beingDragged = false;
	var brick;
	createBricks(levelPicked);
// FUNCTIONS \\
// Gets the level(number of bricks)
	function getLevel() {
		levelPicked = $('#level').val();
		createBricks(levelPicked);
		return levelPicked;
	}
// Create the number of bricks picked by user. Default is 3
	function createBricks(num) {
		$('.brick').remove();
		num = parseInt(num);
		for(i = 1; i != num+1; i++){
		var brickId = 'brick' + i;
			col1.append("<div class=brick draggable id=" + brickId + "></div>");
		$('.brick').height(Math.floor(100/num)+'%')
		// var width = (parseInt(i) + parseInt(num)).toString();
		var width = (parseInt(num+2) - parseInt(i)).toString();
		$('#' + brickId).css('width', width + 'em')
		};
	}
// Get the id of the col clicked
	function getID(col){
		colId = $(col).attr('id');
		beingDragged = true;
		return colId
}
// Move bricks from one colum to the next
	function moveBricks(colId) {
		var firstKid = $('#' + colId).find('.brick').last();
		brick = $(firstKid).attr('id')
		$('#' + brick).css('opacity', 0.5);
		return brick
	}
// Append element to new postion
	function appendBrick(col, brick){
		console.log('appending');
		$('#' + brick).css('opacity', 10);
		brick = $('#' + brick);
		beingDragged = false;
		var toBig = brickCompair(col, brick);
		if(toBig == true){
			console.log('to big');
			return;
		} else {
			$('#' + col).append(brick);
			$('#' + col).on('click', moveBricks);
		};
}
// Compair brick sizes when dropping
	function brickCompair(col, brick){
		var firstKidId = $('#' + col).find('.brick').last().attr('id');
		var brickId = $(brick).attr('id');
		if(firstKidId === undefined) {
			return;
		}else {
		if (parseInt(firstKidId.charAt(5)) > parseInt(brickId.charAt(5))){
		return true;
		} else {
		return false;
		};
		}
	}
// Event listeners
	level.on('change', getLevel)
	$('.row').on('click', function() {
		if (beingDragged == false){
		getID(this);
		moveBricks(colId);
	} else {
		console.log('else');
		getID(this);
		appendBrick(colId, brick)
		}
		if ($('#col1, #col2').children().length === 0){
		console.log('winner!');
	} else {
		console.log('not winner');
	}
	})

});















