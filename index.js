function drag(id){
	var obj = document,.getElementById('div1');
	var disX = 0;
	var disY = 0;
	obj.onmousedown = function(){
		disX = ev.pageX-obj.offsetLeft;
		document.onmousemove = function(){
			obj.style.left= ev.pageX - disX+'px';
			obj.style.top =ev.pageY = disY +'px';
		}
	}

}