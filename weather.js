/** http://openweathermap.org/current
 * .name
 * .main.temp
 * .main.temp_max
 * .main.temp_min
 * .weather[0].description
 * .weather[0].icon
 * .weather[0].id
 * .weather[0].main
 */

function getWeather() {
	//Fetch current weather info in JSON format
	var url = 'http://api.openweathermap.org/data/2.5/weather?id=5206379&appid=3aa8d2b200ad314410e9340650ad4140';
	$.getJSON(url, function(weather){
		var tHigh = Math.round(1.8*(weather.main.temp_max-273.15)+32);
		var tLow = Math.round(1.8*(weather.main.temp_min-273.15)+32);
		var t = Math.round(1.8*(weather.main.temp-273.15)+32);
		var icon = 'http://openweathermap.org/img/w/'+weather.weather[0].icon+'.png';
		
		document.getElementById('weather').innerHTML = 'Pittsburgh<br>';
		document.getElementById('weather').innerHTML += '<font style="font-size:2em; margin-right:10px;">'+t+'&deg</font>';
		document.getElementById('weather').innerHTML += '<font color=\"#ff4d4d\" style=\"vertical-align:.8em\">'+tHigh+'</font><font style=\"vertical-align:.5em\">&frasl;</font><font color=\"#4d88ff\" style=\"vertical-align:0em\">'+tLow+'</font>';
		document.getElementById('weather').innerHTML += '<img src=\"' + icon + '\" style=\"position:absolute; top:12; margin-left:10px\">';
	});
	
	//Fetch 5 day forecast info in JSON format
	var url = 'http://api.openweathermap.org/data/2.5/forecast/daily?lat=40.44062&lon=-79.995888&cnt=5&mode=json&appid=3aa8d2b200ad314410e9340650ad4140';
	$.getJSON(url, function(weather){
		var weatherToolTipHTML = "<table class=\"weatherTooltip\" style=\"color:black\">";
		var datesHTML="";
		var iconHTML="";
		var tDayHTML="";
		var tNightHTML="";
		var d = new Date();
		for(i in weather.list){
			var futureDay = new Date(d.getYear(), d.getMonth(), d.getDate()+parseInt(i));
			
			datesHTML+="<th>"+(futureDay.getMonth()+1)+"/"+futureDay.getDate()+"</th>";
			
			var icon = 'http://openweathermap.org/img/w/'+weather.list[i].weather[0].icon+'.png';
			iconHTML+= '<td><img src=\"' + icon + '\" style=\"\"></td>';
			
			var tDay = Math.round(1.8*(weather.list[i].temp.day-273.15)+32);
			tDayHTML+= '<td><font style="font-size:1em;">'+tDay+'&deg</font></td>';
			
			var tNight = Math.round(1.8*(weather.list[i].temp.eve-273.15)+32);
			tNightHTML+= '<td><font style="font-size:1em;">'+tNight+'&deg</font></td>';
		}
		weatherToolTipHTML+="<tr>"+datesHTML+"</tr><tr>"+iconHTML+"</tr><tr>"+tDayHTML+"</tr><tr>"+tNightHTML+"</tr></table>";
		
		$('#weather').tooltipster({
			theme: 'tooltipster-light',
	        content: $(weatherToolTipHTML),
	        interactive: true
	    });
	});
}