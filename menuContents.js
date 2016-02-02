$(document).ready(function(){
	createDropdowns();
	
	$('#sidebar').mouseenter(function(){
		$(".mainNode").css("opacity",1);
	});
	
	$('#sidebar').mouseleave(function(){
		$(".mainNode").css("opacity",.5);
	});
	$('.dropdown').mouseenter(function(){
		$(this.childNodes[1]).css('display','block');
	});
	$('.dropdown').mouseleave(function(){
		$(this.childNodes[1]).css('display','none');
	});
});

var htmlToAdd = "";
function createDropdowns(){
	htmlToAdd = "";
	createSubfolder("dropdown");
	document.getElementById("items").innerHTML = htmlToAdd;
	for(i in document.getElementById('items').childNodes){
		if (document.getElementById('items').childNodes[i].className == 'dropdown contains')
			document.getElementById('items').childNodes[i].className += " mainNode";
	}
}
function createSubfolder(path){
	for(menuItem in eval(path)){
		var name = eval(path)[menuItem].name;
		if(eval(path)[menuItem].url!=null && eval(path)[menuItem].contents!=null) {
			var url = eval(path)[menuItem].url;
			htmlToAdd+="<div class=\"dropdown\"><a href=\""+url+"\" class=\"contains\">"+name+"</a><div class=\"dropdown-content\">";
			createSubfolder(path+"["+menuItem+"].contents");
			htmlToAdd+="</div></div>";
			//htmlToAdd+="<hr>";
		}	
		else{
			if(eval(path)[menuItem].url!=null) {
				var url = eval(path)[menuItem].url;
				htmlToAdd+="<a href=\""+url+"\">"+name+"</a>";
			}	
			if(eval(path)[menuItem].contents!=null){
				htmlToAdd+="<div class=\"dropdown contains\">"+name+"<div class=\"dropdown-content\">";
				createSubfolder(path+"["+menuItem+"].contents");
				htmlToAdd+="</div></div>";
				//htmlToAdd+="<hr>";
			}
		}
	}
}