// Stores the min/max hourly customers, and the average cookies per customer, in object properties
var pikePlace = {
	min: 17,
	max: 88,
	avg: 5.2,
	// Uses a method of that object to generate a random number of customers per hour
	getRandom: function(min, max) {
		return Math.random() * (max-min + 1) + min;
	},
	hour: ['10am - 11am : ','11am - 12pm : ', '12pm - 1pm : ','1pm - 2pm : ','2pm - 3pm : ','3pm - 4pm : ','4pm - 5pm : ', 'Total : '],
	render: function() {
		// Get an element from Id
		var parent = document.getElementById('parentElement');
		// Using for loop to display for each hours and getRandom
		for (var i = 0; i < 7; i++)	{
			// Get an element from li
			var child = document.createElement('li');
			// Create and populate an LI element for each of the data points that you want to render
			child.textContent = pikePlace.hour[i] + Math.floor(this.getRandom(pikePlace.min, pikePlace.max)*(pikePlace.avg));
			// Append the li to ul
			parent.appendChild(child);
		}
			var total = document.createElement('li');
			total.textContent = pikePlace.hour[7] + Math.floor(this.getRandom(pikePlace.min, pikePlace.max)*(pikePlace.avg));
			parent.appendChild(total);
	}
};
pikePlace.render();
// var pikePlaceHourlyTotal = pikePlaceHourlyTotal1 + pikePlaceHourlyTotal2
