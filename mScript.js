function allowDrop(ev) {
	ev.preventDefault();
	}

// Allow the element to be drag able
function drag(ev) {
	ev.dataTransfer.getData
}

	// checking to make sure the browers supports html5 DnD
// if (Modernizr.draganddrop) {
//   // browers supports
// } else {
// // fall back library
// };

// make dragging object opacity to give user visual feedback.
function dragStart(ev) {
this.style.opacity = '.4';

dragSrcEl = this;
ev.originalEvent.dataTransfer.effectAllowed = 'move';
ev.dataTransfer.setData('text/html', ev.target.id);
console.log('setting that data');
}
// In the case of dragging something like a link, we need to prevent the
// browser's default behavior, which is to navigate to that link. To do
// this, call e.preventDefault() in the dragover event. Another good
// practice is to return false in that same handler. Browsers are
// somewhat inconsistent about needing these, but they don't hurt to
// add.
function handleDragOver(ev) {
	if(ev.preventDefault) {
		ev.preventDefault();
	};
	ev.dataTransfer.dropEffect = 'move';
	
	return false;
};
// This will make whatever element we hover over have a dotted
// border
function handleDragEnter(ev) {
	this.classList.add('over');
	console.log('enter');
};
// This will remove the dotted border when we leave it
function handleDragLeave(ev) {
	this.classList.remove('over');
	console.log('leave');
};
// this stops the browers from redirecting
// will remove the class .over when dropped
// this is currently not running not sure why
function handleDropEnd(ev) {
	console.log('dropEnd');
	ev.stopPropagation();
	if (dragSrcEl != this){
		dragSrcEl.innerHTML = this.HTML;
		this.innHTML = ev.dataTransfer.getData('text/html');
	}
	return false;
}
// handle shit when the drag ends.
function handleDragEnd(ev) {
	console.log(this);
	this.classList.remove('.over');
	console.log('drop end remove over');
};
var dragSrcEl = null;
// jQuery event handler for drag start
$(document).ready(function() {
	$('#largeBox').on('drag', dragStart);
	$('.base').on('dragenter', handleDragEnter);
	$('.base').on('dragleave', handleDragLeave);
	$('#largeBox').on('drop', handleDropEnd);
	$('#largeBox').on('dragend', handleDragEnd);
});

