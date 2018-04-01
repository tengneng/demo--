function Elem(id){
	this.elem = document.getElementById(id);
}

Elem.prototype.html = function(val){
	var elem = this.elem;
	if(val){
		elem.innerHTML = val;
		return this //链式操作
	}else{
		return elem.innerHTML;
	}
}

Elem.prototype.on = function(type,fn) {
    var elem = this.elem;
    elem.addEventListener(type,fn)
    return this //链式操作
}

var div1 = new Elem('myid');
div1.html('<p>hello world</p>').on('click',function(){
	alert('clicked!');
}).html('<p>JavaScript</p>');