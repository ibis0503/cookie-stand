'use strict';
// build Constructor Functions
function cookieStand(name, min, max, avg) {
	this.name = name;
	this.min = min;
	this.max = max;
	this.avg = avg;
	this.sale = [];
	this.totalsale = 0;
	this.getRandom = function(min, max) {
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
	}
};

// Set a variable
var pikePlace = new cookieStand('Pike Place', 17, 88, 5.2);
var seaTac = new cookieStand('SeaTac Airport', 6, 24, 1.2);
var southCenter = new cookieStand('Southcenter', 11, 38, 1.9);
var bellevueSquare = new cookieStand('Bellevue Square', 11, 38, 1.9);
var alki = new cookieStand('Alki', 3, 24, 2.6);
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
	var store_name = document.getElementById('name');
	var min_cust = document.getElementById('min');
	var max_cust = document.getElementById('max');
	var avg_cookie = document.getElementById('avg');
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
console.log(pikePlace.name);
console.log(newCookieStore.name);
