function pie(perc, color, indent) {
	var pie_svg = document.getElementById("pie_svg");
	var circle1 = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
	var percValue = (2.48 * perc);
	pie_svg.appendChild(circle1);
	circle1.setAttribute('cx', 50);
	circle1.setAttribute('cy', 50);
	circle1.setAttribute('r', 39.5);
	circle1.setAttribute('fill', 'none');
	circle1.setAttribute('stroke', color);
	circle1.setAttribute('stroke-width', '17px');
	circle1.setAttribute('stroke-dasharray', percValue+' 2000');
	circle1.setAttribute('stroke-dashoffset', -indent*2.48);
}
//percentage.style.strokeDashoffset = 301-(3.01*percent);
console.log(pie_svg);
//pie(70, 'green');
//pie(60, 'red');
pie(30, 'rgb(78,183,168)', 35);
pie(25, 'rgb(231,87,53)', 10);
pie(10, 'rgb(116,116,116)', 0);
