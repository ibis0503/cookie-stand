'use strict';

var allItems = [];
// call 'form' into variable form
var form = document.getElementById('form');
// call 'table' into table
var table = document.getElementById('cookieTable');
// call 'table-body' into tbody
var tbody = document.getElementById('table-body');
// call 'tfoot' into tfoot[0]
var tfoot = document.getElementsByTagName('tfoot')[0];


// add top 5 items into table this is Constructor Functions
function cookieStand(name, min, max, avg) {
	this.name = name;
	this.min = min;
	this.max = max;
	this.avg = avg;
	this.sale = [];
	this.totalsale = 0;
	this.renderAsRow();
};

	cookieStand.prototype.getRandom = function(min, max) {
		return Math.random() * (max-min + 1) + min;
	};

	// Create prototype for hourly sale
	cookieStand.prototype.getHourlySale = function() {
		for (var i = 0; i < 7; i++) {
			var total = Math.floor(this.getRandom(this.min, this.max) * this.avg);
			// Total value will add into sale array upto 6times
			this.sale.push(total);
			// Total value add to totalsale
			this.totalsale += total;
		}
	};

	// Create prototype for generate input inside of HTML tables
	cookieStand.prototype.renderAsRow = function() {
		// Bring hourly sale data
		this.getHourlySale();
		// create tr and td element
		var trEl = document.createElement('tr');
		var placeName = document.createElement('td');
		// place store name on tr
		placeName.textContent = this.name;
		trEl.appendChild(placeName);

		// Using for loop to display for each hours sale and getRandom
		for (var i = 0; i < 7; i++)	{
			// Get an element from li
			var cookieStandData = document.createElement('td');
			// Create and populate an LI element for each of the data points that you want to render
			cookieStandData.textContent = this.sale[i];
			// Append the li to ul
			trEl.appendChild(cookieStandData);
			cookieTable.appendChild(trEl);
		}

		var total = document.createElement('td');
		// Create and populate an total element for sales out of array
		total.textContent = this.totalsale;
		trEl.appendChild(total);
		cookieTable.appendChild(trEl);
		// var cookieTable = document.getElementById('cookieTable');
		// cookieTable.appendChild(trEl);
		document.getElementById('cookieTable').appendChild(trEl);
	};

// Set a variable
new cookieStand('Pike Place', 17, 88, 5.2);
new cookieStand('SeaTac Airport', 6, 24, 1.2);
new cookieStand('Southcenter', 11, 38, 1.9);
new cookieStand('Bellevue Square', 11, 38, 1.9);
new cookieStand('Alki', 3, 24, 2.6);

// 1.generate input into table
// function generateCookieForm(event)
// 2. declaire the form
// var cookieForm = document.getElementById('form');
// 3. listening for the click and running handler above
// cookieForm.addEventListener('submit', generateCookieForm);
var cookieForm = document.getElementById('form');
cookieForm.addEventListener('submit', function(event){
	event.preventDefault();

	var store_name = event.target.name.value;
	var min_cust = parseFloat(event.target.min.value);
	var max_cust = parseFloat(event.target.max.value);
	var avg_cookie = parseFloat(event.target.avg.value);
	//adding the newCookieStore to the cookieStandsArray
	new cookieStand(store_name, min_cust, max_cust, avg_cookie);
	//we're emptying the form
	event.target.name.value = null;
	event.target.min.value = null;
	event.target.max.value = null;
	event.target.avg.value = null;
});
