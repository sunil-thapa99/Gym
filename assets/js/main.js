var windowWidth = screen.width;
var windowHeight = screen.height;
document.onmousemove = movement;
function movement(event) {
	var content = document.getElementById('innerContent');
	// Calculate mouse X and Y co-ordinates from mouse position
	var mouseX = ((windowWidth/2) - event.clientX) * 0.1;
	var mouseY = ((windowHeight/2) - event.clientY) * 0.1;
	// Modify margins as mouse moves
	content.style.marginLeft = mouseX + 'px';
	content.style.marginTop = mouseY + 'px';
}