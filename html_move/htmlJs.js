console.log('running');
var zindex = 0;
function initDrag(block, e){
	// get the coordinates 
	console.log('initDrag');
	x = e.clientX;
	y = e.clientY;
	blockLeftPos = parseInt(block.style.left);
	blockTopPos = parseInt(block.style.top);
	currentBlock = block;
	document.onmousemove = drag;
}

// drag the element
function drag(e){
	console.log('dragging');
	if (!e) e=event;
	zindex++;
	// get the coordinates as you drag
	var dragX = blockLeftPos + e.clientX - x;
	var dragY = blockTopPos + e.clientY - y;
	currentBlock.style.zIndex = zindex;
	currentBlock.style.left = dragX + 'px';
	currentBlock.style.top = dragY + 'px';
}
// drop disk
function drop(disk){
	document.onmousemove = stopDrag;
}

function stopDrag() {
	return false;
}
