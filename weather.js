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
	//Fetch stock info in JSON format
	var url = 'http://api.openweathermap.org/data/2.5/weather?q=Pittsburgh&appid=44db6a862fba0b067b1930da0d769e98';
	$.getJSON(url, function(weather){
		var description = weather.weather[0].main;
		var tHigh = Math.round(1.8*(weather.main.temp_max-273.15)+32);
		var tLow = Math.round(1.8*(weather.main.temp_min-273.15)+32);
		var t = Math.round(1.8*(weather.main.temp-273.15)+32);
		var icon = 'http://openweathermap.org/img/w/'+weather.weather[0].icon+'.png';
		
		document.getElementById('weather').innerHTML = 'Pittsburgh<br>';
		document.getElementById('weather').innerHTML += '<font style="font-size:2em; margin-right:10px;">'+t+'&deg</font>';
		document.getElementById('weather').innerHTML += '<font color=\"#ff4d4d\" style=\"vertical-align:.8em\">'+tHigh+'</font><font style=\"vertical-align:.5em\">&frasl;</font><font color=\"#4d88ff\" style=\"vertical-align:0em\">'+tLow+'</font>';
		document.getElementById('weather').innerHTML += '<img src=\"' + icon + '\" style=\"position:absolute; top:12; margin-left:10px\">';
	});
}