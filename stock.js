/**
 * t = name
 * l_cur = price
 * c = change
 * c_fix = abs(change)
 * cp = % change
 * pcls_fix = previous price
 */

function getStocks() {
	//Fetch stock info in JSON format
	var url = 'http://www.google.com/finance/info?q=NSE:.dji,.inx,MUTF:fusex,NSE:GOOG,AAPL&callback=?';
	$.getJSON(url, function(stock){
		//Format to ticker HTML
		tickerHTML = '<marquee behavior="scroll" scrollamount="3" direction="left">';
		tickerToolTipHTML = '<table class=\"tickerTooltip\" style=\"color:black;border-collapse:collapse;\">';
		for(i in stock){
			if(stock[i].c>=0){
				tickerHTML+=stock[i].t + " " + stock[i].l_cur + "(<font color=\"#70db70\">" + stock[i].c + "," + stock[i].cp + "%</font>)" + " | ";
				tickerToolTipHTML += '<tr><td>'+stock[i].t+'</td><td>'+stock[i].l_cur+'</td><td><font color=\"#70db70\">' + stock[i].c + ' (' + stock[i].cp + '%)</font></td></tr>';
			}
			else{
				tickerHTML+=stock[i].t + " " + stock[i].l_cur + "(<font color=\"#ff4d4d\">" + stock[i].c + "," + stock[i].cp + "%</font>)" + " | ";	
				tickerToolTipHTML += '<tr><td>'+stock[i].t+'</td><td>'+stock[i].l_cur+'</td><td><font color=\"#ff4d4d\">' + stock[i].c + ' (' + stock[i].cp + '%)</font></td></tr>';
			}
		}
		document.getElementById('ticker').innerHTML = tickerHTML+'</marquee>';
		var t = setTimeout(getStocks, 300000);
		
		tickerToolTipHTML += '</table>';
		$('#ticker').tooltipster({
			theme: 'tooltipster-light',
	        content: $(tickerToolTipHTML),
	        interactive: true
	    });
	});
	
		

}