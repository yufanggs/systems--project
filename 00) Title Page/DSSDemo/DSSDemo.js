function scribbleMouseDown(evt){
	//alert("Mouse Down!");
}
function scribbleMouseMove(evt){
	//MouseEvent evt has attributes described at https://developer.mozilla.org/en-US/docs/Web/API/MouseEvent
	//console.log("mouse moving with x: "+evt.clientX+" y: "+ evt.pageY+" button: "+evt.buttons);
	var canvasElement = document.getElementById("scribbleArea");
	// The mouse coordinates are relative to the document. 
	// So we need to know where the canvas element is relative to the document.
	var canvasRect = canvasElement.getBoundingClientRect();
	var newX = evt.clientX-canvasRect.left;
	var newY = evt.clientY-canvasRect.top;
	// Our canvas has also been stretched to fit 
	// so divide its natural dimensions by its new dimensions
	var scaleX = canvasElement.width/canvasRect.width;
	var scaleY = canvasElement.height/canvasRect.height;
	newX = newX*scaleX;
	newY = newY*scaleY;
	//console.log("x: "+ newX+" y: "+newY);
	// Draw a circle if the left mouse is down
	if (evt.buttons==1){
		var context = canvasElement.getContext("2d");
		var radius = 2*scaleX;
		context.beginPath();
		context.arc(newX, newY, radius, 0, 2 * Math.PI);
		context.fillStyle = 'green';
		context.fill();
		context.closePath();
	}
}
