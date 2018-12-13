const amount_input = document.getElementById('amount');
const percent_input = document.getElementById('percent');
const calculate_button = document.getElementById('calculate');
const ten_percent = document.getElementById('ten-percent');
const fifteen_percent = document.getElementById('fifteen-percent');
const eighteen_percent = document.getElementById('eighteen-percent');
const tip_display = document.getElementById('tip');
const total_display = document.getElementById('total');


calculate_button.addEventListener('click', click_calculate);

function click_calculate(e) {
  const percent = Number(percent_input.value);
	const amount = Number(amount_input.value);
	const tip = amount * percent / 100;
	const total = amount + tip;
	tip_display.innerHTML = tip.toFixed(2);
	total_display.innerHTML = total.toFixed(2);
	
	console.log(tip)
	console.log(total)
}

click_calculate()
