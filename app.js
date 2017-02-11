// Stores the min/max hourly customers, and the average cookies per customer, in object properties
var pikePlace = {
	min: 17,
	max: 88,
	avg: 5.2,
	hour: ['10am - 11am : ','11am - 12pm : ', '12pm - 1pm : ','1pm - 2pm : ','2pm - 3pm : ','3pm - 4pm : ','4pm - 5pm : ','Total : '],
	// Create empty array to store all sales by each hour
	sale: [],
	totalsale: 0,
	// Uses a method of that object to generate a random number of customers per hour
	getRandom: function(min, max) {
		return Math.random() * (max-min + 1) + min;
	},
	getHourlySale: function() {
		for (var i = 0; i < 7; i++) {
			var total = Math.floor(this.getRandom(this.min, this.max) * this.avg);
			// Total value will add into sale array upto 6times
			this.sale.push(total);
			this.totalsale += total;
		}
	},
	render: function() {
		this.getHourlySale();
		// Get an element from Id
		var parent = document.getElementById('parentElement1');
		var ulEl = document.createElement('ui');
		// Using for loop to display for each hours and getRandom
		for (var i = 0; i < 7; i++)	{
			// Get an element from li
			var liEl = document.createElement('li');
			// Create and populate an LI element for each of the data points that you want to render
			liEl.textContent = pikePlace.hour[i] + this.sale[i];
			// Append the li to ul
			parent.appendChild(liEl);
		}
		var total = document.createElement('li');
		// Create and populate an total element for sales out of array
		total.textContent = pikePlace.hour[7] + (this.totalsale);
		parent.appendChild(total);
	}
};
pikePlace.render();
console.log(pikePlace.totalsale);
//

// Stores the min/max hourly customers, and the average cookies per customer, in object properties
var seaTacAirPort = {
	min: 6,
	max: 24,
	avg: 1.2,
	hour: ['10am - 11am : ','11am - 12pm : ', '12pm - 1pm : ','1pm - 2pm : ','2pm - 3pm : ','3pm - 4pm : ','4pm - 5pm : ','Total : '],
	// Create empty array to store all sales by each hour
	sale: [],
	// Uses a method of that object to generate a random number of customers per hour
	getRandom: function() {
		return Math.random() * (this.max-this.min + 1) + this.min;
	},
	getHourlySale: function() {
		for (var i = 0; i < 7; i++) {
			var total = Math.floor(this.getRandom() * this.avg);
			// Total value will add into sale array upto 6times
			this.sale.push(total);
		}
	},
	render: function() {
		this.getHourlySale();
		// Get an element from Id
		var parent = document.getElementById('parentElement2');
		var ulEl = document.createElement('ui');
		// Using for loop to display for each hours and getRandom
		for (var i = 0; i < 7; i++)	{
			// Get an element from li
			var liEl = document.createElement('li');
			// Create and populate an LI element for each of the data points that you want to render
			liEl.textContent = seaTacAirPort.hour[i] + this.sale[i];
			// Append the li to ul
			parent.appendChild(liEl);
		}
		var total = document.createElement('li');
		// Create and populate an total element for sales out of array
		total.textContent = seaTacAirPort.hour[7] + (this.sale[0]+this.sale[1]+this.sale[2]+this.sale[3]+this.sale[4]+this.sale[5]+this.sale[6]);
		parent.appendChild(total);
	}
};
seaTacAirPort.render();
//

// Stores the min/max hourly customers, and the average cookies per customer, in object properties
var southCenter = {
	min: 11,
	max: 38,
	avg: 1.9,
	hour: ['10am - 11am : ','11am - 12pm : ', '12pm - 1pm : ','1pm - 2pm : ','2pm - 3pm : ','3pm - 4pm : ','4pm - 5pm : ','Total : '],
	// Create empty array to store all sales by each hour
	sale: [],
	// Uses a method of that object to generate a random number of customers per hour
	getRandom: function() {
		return Math.random() * (this.max-this.min + 1) + this.min;
	},
	getHourlySale: function() {
		for (var i = 0; i < 7; i++) {
			var total = Math.floor(this.getRandom() * this.avg);
			// Total value will add into sale array upto 6times
			this.sale.push(total);
		}
	},
	render: function() {
		this.getHourlySale();
		// Get an element from Id
		var parent = document.getElementById('parentElement3');
		var ulEl = document.createElement('ui');
		// Using for loop to display for each hours and getRandom
		for (var i = 0; i < 7; i++)	{
			// Get an element from li
			var liEl = document.createElement('li');
			// Create and populate an LI element for each of the data points that you want to render
			liEl.textContent = southCenter.hour[i] + this.sale[i];
			// Append the li to ul
			parent.appendChild(liEl);
		}
		var total = document.createElement('li');
		// Create and populate an total element for sales out of array
		total.textContent = southCenter.hour[7] + (this.sale[0]+this.sale[1]+this.sale[2]+this.sale[3]+this.sale[4]+this.sale[5]+this.sale[6]);
		parent.appendChild(total);
	}
};
southCenter.render();
//

// Stores the min/max hourly customers, and the average cookies per customer, in object properties
var bellevueSquare = {
	min: 20,
	max: 48,
	avg: 3.3,
	hour: ['10am - 11am : ','11am - 12pm : ', '12pm - 1pm : ','1pm - 2pm : ','2pm - 3pm : ','3pm - 4pm : ','4pm - 5pm : ','Total : '],
	// Create empty array to store all sales by each hour
	sale: [],
	// Uses a method of that object to generate a random number of customers per hour
	getRandom: function() {
		return Math.random() * (this.max-this.min + 1) + this.min;
	},
	getHourlySale: function() {
		for (var i = 0; i < 7; i++) {
			var total = Math.floor(this.getRandom() * this.avg);
			// Total value will add into sale array upto 6times
			this.sale.push(total);
		}
	},
	render: function() {
		this.getHourlySale();
		// Get an element from Id
		var parent = document.getElementById('parentElement4');
		var ulEl = document.createElement('ui');
		// Using for loop to display for each hours and getRandom
		for (var i = 0; i < 7; i++)	{
			// Get an element from li
			var liEl = document.createElement('li');
			// Create and populate an LI element for each of the data points that you want to render
			liEl.textContent = bellevueSquare.hour[i] + this.sale[i];
			// Append the li to ul
			parent.appendChild(liEl);
		}
		var total = document.createElement('li');
		// Create and populate an total element for sales out of array
		total.textContent = bellevueSquare.hour[7] + (this.sale[0]+this.sale[1]+this.sale[2]+this.sale[3]+this.sale[4]+this.sale[5]+this.sale[6]);
		parent.appendChild(total);
	}
};
bellevueSquare.render();
//

// Stores the min/max hourly customers, and the average cookies per customer, in object properties
var alki = {
	min: 3,
	max: 24,
	avg: 2.6,
	hour: ['10am - 11am : ','11am - 12pm : ', '12pm - 1pm : ','1pm - 2pm : ','2pm - 3pm : ','3pm - 4pm : ','4pm - 5pm : ','Total : '],
	// Create empty array to store all sales by each hour
	sale: [],
	// Uses a method of that object to generate a random number of customers per hour
	getRandom: function() {
		return Math.random() * (this.max-this.min + 1) + this.min;
	},
	getHourlySale: function() {
		for (var i = 0; i < 7; i++) {
			var total = Math.floor(this.getRandom() * this.avg);
			// Total value will add into sale array upto 6times
			this.sale.push(total);
		}
	},
	render: function() {
		this.getHourlySale();
		// Get an element from Id
		var parent = document.getElementById('parentElement5');
		var ulEl = document.createElement('ui');
		// Using for loop to display for each hours and getRandom
		for (var i = 0; i < 7; i++)	{
			// Get an element from li
			var liEl = document.createElement('li');
			// Create and populate an LI element for each of the data points that you want to render
			liEl.textContent = alki.hour[i] + this.sale[i];
			// Append the li to ul
			parent.appendChild(liEl);
		}
		var total = document.createElement('li');
		// Create and populate an total element for sales out of array
		total.textContent = alki.hour[7] + (this.sale[0]+this.sale[1]+this.sale[2]+this.sale[3]+this.sale[4]+this.sale[5]+this.sale[6]);
		parent.appendChild(total);
	}
};
alki.render();
//
