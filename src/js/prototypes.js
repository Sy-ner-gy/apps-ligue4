//Window
window.onS = function(events,func){
	events.split(' ').forEach(event => {
		this.addEventListener(event,func)
		});
}
window.$S=function(e){return e.search("#")>-1?document.querySelector(e):document.querySelectorAll(e)}

//Elements
Element.prototype.onS = function(events,func){
	events.split(' ').forEach(event => {
		this.addEventListener(event,func)
		});
}
Element.prototype.$S=function(e){return e.search("#")>-1?document.querySelector(e):document.querySelectorAll(e)}
Element.prototype.toggle=function(){this.classList.toggle("close")}
