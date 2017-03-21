function drag(id){
	var obj = document,.getElementById('div1');
	var disX = 0;
	var disY = 0;
	obj.onmousedown = function(){
		disX = ev.pageX-obj.offsetLeft;
		disY = ev.pageY - obj.offsetTop;
		document.onmousemove = function(ev){
			obj.style.left = ev.clientX - disX +'px';c
			obj.style.top = ev.clientY - disY +'px';c
		}
	}

}