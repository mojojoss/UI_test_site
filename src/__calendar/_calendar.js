function createCalendar(id, year, month) {
	var today = new Date().getDate();
	var thisMonth = new Date().getMonth();
	console.log(today);
	var elem = document.getElementById(id);

	var mon = month - 1;
	var d = new Date(year, mon);



	var table = '<table><tr><th>MON</th><th>TUE</th><th>WED</th><th>THU</th><th>FRI</th><th>SAT</th><th>SUN</th></tr><tr>';


	for (var i = 0; i < getDay(d); i++) {
		table += '<td></td>';
	}


	while (d.getMonth() == mon) {
		if (d.getDate() == today) {
			if (d.getMonth() == thisMonth) {
				table += '<td class="today">' + d.getDate() + '</td>';
			} else {
				table += '<td>' + d.getDate() + '</td>';
			}
		}
		if (d.getDate() != today){
				table += '<td>' + d.getDate() + '</td>';
			}
			
			if (getDay(d) % 7 == 6) {
				table += '</tr><tr>';
			}

			d.setDate(d.getDate() + 1);
		}


		if (getDay(d) != 0) {
			for (var i = getDay(d); i < 7; i++) {
				table += '<td></td>';
			}
		}


		table += '</tr></table>';


		elem.innerHTML = table;
	}

	function getDay(date) {
		var day = date.getDay();
		if (day == 0) day = 7;
		return day - 1;
	}


	var today = new Date();
	var changed_month = today.getMonth();
	var month_name = [
	'January',
	'February',
	'March',
	'April',
	'May',
	'June',
	'July',
	'August',
	'September',
	'October',
	'November',
	'December'
]



	createCalendar("calendar", 2018, changed_month + 1);

	$('#day').html('<p class="today-top">' + today.getDate() + '</p>');

	function putMonth(c) {
		$('#month').html('<p class="month-top">' + month_name[c] + '</p><div class="month-left-button" onclick="month_left_change()"></div><div class="month-right-button" onclick="month_right_change()"></div>');

	}

	putMonth(changed_month);

	var month_left_change = function () {
		changed_month -= 1;
		if (changed_month < 0) {
			changed_month = 11;
			console.log(changed_month);
			putMonth(changed_month);
			createCalendar("calendar", 2018, changed_month + 1);
		} else {
			console.log(changed_month);
			putMonth(changed_month);
			createCalendar("calendar", 2018, changed_month + 1);
		}
	}
	var month_right_change = function () {
		changed_month += 1;
		if (changed_month > 11) {
			changed_month = 0;
			console.log(changed_month);
			putMonth(changed_month);
			createCalendar("calendar", 2018, changed_month + 1);
		} else {
			console.log(changed_month);
			putMonth(changed_month);
			createCalendar("calendar", 2018, changed_month + 1);
		}
	}
