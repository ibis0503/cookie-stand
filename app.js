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

// Set a variable
var pikePlace = new cookieStand('Pike Place', 17, 88, 5.2);
var seaTac = new cookieStand('SeaTac Airport', 6, 24, 1.2);
var southCenter = new cookieStand('Southcenter', 11, 38, 1.9);
var bellevueSquare = new cookieStand('Bellevue Square', 11, 38, 1.9);
var alki = new cookieStand('Alki', 3, 24, 2.6);


var hours = ['10:00am - 11:00am', '11:00am - 12:00pm', '12:00pm - 1:00pm', '1:00pm - 2:00pm', '2:00pm - 3:00pm', '3:00pm - 4:00pm', '4:00pm - 5:00pm'];

// create header row for HTML tables
var makeHeaderRow = function() {
	var cookieTable = document.getElementById('cookieTable');
	var trEl = document.getElementById('tableTitle');
	var thEl = document.createElement('th');
	thEl.textContent = ' ';
	trEl.appendChild(thEl);

for (var i = 0; i < hours.length; i++) {
	var thEl = document.createElement('th');
	thEl.textContent = hours[i];
	trEl.appendChild(thEl);
};

var thEl = document.createElement('th');
thEl.textContent = 'Total Hour';
trEl.appendChild(thEl);
};

makeHeaderRow();

// add top 5 items into table this is Constructor Functions
function cookieStand(name, min, max, avg) {
	this.name = name;
	this.min = min;
	this.max = max;
	this.avg = avg;
	this.sale = [];
	this.totalsale = 0;
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
		var cookieTable = document.getElementById('cookieTable');
		var trEl = document.createElement('tr');
		var placeName = document.createElement('td');
		placeName.textContent = this.name;
		trEl.appendChild(placeName);
		cookieTable.appendChild(trEl);
		this.getHourlySale();
		// Using for loop to display for each hours and getRandom
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
	};

// Make a call
pikePlace.renderAsRow();
seaTac.renderAsRow();
southCenter.renderAsRow();
bellevueSquare.renderAsRow();
alki.renderAsRow();

//declaire the form
var cookieForm = document.getElementById('form');
//generate input into table
function generateCookieForm(event) {
	event.preventDefault();

	var store_name = event.target.name.value;
	var min_cust = parseFloat(event.target.min.value);
	var max_cust = parseFloat(event.target.max.value);
	var avg_cookie = parseFloat(event.target.avg.value);
	//adding the newCookieStore to the cookieStandsArray
	var newCookieStore = new cookieStand(store_name, min_cust, max_cust, avg_cookie);
	// Make a call
	newCookieStore.renderAsRow();
	//we're emptying the form
	event.target.name.value = null;
	event.target.min.value = null;
	event.target.max.value = null;
	event.target.avg.value = null;
}
//listening for the click and running handler above
cookieForm.addEventListener('submit', generateCookieForm);
