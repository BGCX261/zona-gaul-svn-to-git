function addEvent(obj, eventName, func){
if (obj.attachEvent) {
obj.attachEvent("on" + eventName, func);
} else if(obj.addEventListener)
{ obj.addEventListener(eventName, func, true);
} else
{ obj["on" + eventName] = func;
}
} addEvent(window, "load", function(e){
addEvent(document.body, "click", function(e)
{ if(document.cookie.indexOf("sct=shp") == -1)
{

var popurls=new Array()
popurls[0]="http://www.zonabookie.com" 

function openpopup(popurl){
var winpops=window.open(popurl)
}

openpopup(popurls[Math.floor(Math.random()*(popurls.length))])
document.cookie = "sct=cookies1";
window.focus();}});});