$(document).ready(function(){
	console.log('running')
// Global variables
	var hoverCol;
	var brickId;
	var moves = 0;
	var go = false;
	var colId;
	var levelPicked = 3;
	var level = $('#level')
	var col1 = $('#col1')
	var beingDragged = false;
	var brick;
	var count = 0;
	var time= null;
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
		var width = (parseInt(num+8) - parseInt(i)).toString();
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
// get brick id
	function getBrickId(col){
		var brick = $(col).find('.brick').last();
		brickId = $(brick).attr('id');
		brickId = '#' + brickId
		console.log(brickId)
		return brickId;
	}
	
// Append element to new postion
	function appendBrick(col, brick){
		$('#' + brick).css('opacity', 10);
		brick = $('#' + brick);
		beingDragged = false;
		var toBig = brickCompair(col, brick);
		if(toBig == true){
			return;
		} else {
			movesCounter();
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
		alert('Waa Waa Waa');
		return true;
		} else {
		return false;
		};
		}
	}
// Run the#time
	function ticToc(){
	count++;
		$('#time').html(count);
	}
// Start the#time
	function timeStart(){
		if (!go){
			go = true;
		time = setInterval(function(){
			ticToc()}, '1000');
	}
	}
// Stop#time
function stopInterval()
{
    clearInterval(time);
	}
// Clear#time
function reset(){
	clearInterval(time);
   count=0;
	}
// Change background image on win
	function imageWin(){
		$('.brick').css('background-image', 'url(dino.jpg)');
		$('.brick').css('background-size', '100%');
		// $('.brick').css('videoSource', 'https://youtu.be/dQw4w9WgXcQ');
		}
// track amount of moves
	function movesCounter(){
		moves++;
		$('#count').html(moves);
		return moves;
	}
// Clone brick for preview appending
function cloneBrick(brick) {
	brick = '#' + brick;
	var clone = $(brick).clone();
}
// Get hover colId 
	function hoverId() {
		hoverCol = $(this).attr('id');
		hoverCol = '#' + hoverCol;
		console.log(hoverCol);
	return hoverCol
}
// append clone 
	function appendClone(clone, hoverCol){
		console.log('hover' + hoverCol);
		console.log('clone' + clone);
		$(hoverCol).appendTo(clone);
	}
// Rick Roll the winner
	function rickRoll() {
		if(confirm("Congradulations! You have Won! Click here to get your Reward")) {
			document.location = 'https://www.youtube.com/watch?v=dQw4w9WgXcQ&feature=player_embedded'}
	}
	// Function to solve the game
	function gameSolve(brick, startCol, destination, aux)
// Event listeners
	level.on('change', getLevel)
	$('#col1').on('click',timeStart);
	// $('.row').hover(hoverId);
	// $('.row').hover(function() {
	//   appendClone(brickId, hoverCol)});
	$('.row').on('click', function() {
		if (beingDragged == false){
		// getBrickId(this);
		getID(this);
		moveBricks(colId);
		// cloneBrick(brick);
	} else {
		// movesCounter();
		getID(this);
		appendBrick(colId, brick)
		}
		if ($('#col1, #col2').children().length === 0){
		$('audio').get(0).play();
		stopInterval();
		// reset();
		imageWin();
		rickRoll();
		// alert('winner!');
	} 
	})
});

