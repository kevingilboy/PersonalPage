var name = "Kevin";

function displayHeader(){
	var d = new Date();
	if(d.getHours()<12 && d.getHours()>3) document.getElementById("greeting").innerText = "Good Morning, " + name;
	else if(d.getHours()>=12 && d.getHours()<17) document.getElementById("greeting").innerText = "Good Afternoon, " + name;
	else document.getElementById("greeting").innerText = "Good Evening, " + name;
}

function getTime() {
    var today = new Date();
    var h = today.getHours();
    if(h>=12) h-=12;
    if(h==0) h+=12;
    var m = today.getMinutes();
    m = checkTime(m);
    try{
    	document.getElementById('clock').innerHTML = h + ":" + m;
    }catch(err){}
    var t = setTimeout(getTime,5000);
}
function checkTime(i) {
    if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
}
