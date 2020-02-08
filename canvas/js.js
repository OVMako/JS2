var canvas = document.getElementById('c1');
var ctx = canvas.getContext('2d');
var myColor = 'black';

document.getElementById('color').oninput = function(){
	myColor = this.value;
}


tick = 0	
canvas.onmousedown = function(event){
	canvas.onmousemove = function(event){
		var x = event.offsetX;
		var y = event.offsetY; 
		//ctx.fillRect(x-5, y-5, 10, 10);
		ctx.arc(x, y, 10, 0, Math.PI*2, false)
		
		ctx.fillStyle = myColor;
		ctx.fill();
	}
	canvas.onmouseup = function(){
		canvas.onmousemove = null;
	}
}