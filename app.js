// Stores the min/max hourly customers, and the average cookies per customer, in object properties
var pikePlace = {
	min: 17,
	max: 88,
	avg: 5.2,
	// Uses a method of that object to generate a random number of customers per hour
	getRandom: function(min, max) {
		return Math.random() * (max-min + 1) + min;
	},
	hour: ['10am - 11am : ','11am - 12pm : ', '12pm - 1pm : ','1pm - 2pm : ','2pm - 3pm : ','3pm - 4pm : ','4pm - 5pm : ']
};

// Function for displaying the values of each array as lists in the browser
function cookies_purchased_hour() {
	// Using for loop to display for each hours
	for (var i = 0; i < 7; i++)  {
		// pikePlace.getRandom(pikePlace.min, pikePlace.max)* 5.2 = simulated amounts of cookies purchased for each hour
		document.write(pikePlace.hour[i] + Math.floor(pikePlace.getRandom(pikePlace.min, pikePlace.max)*(pikePlace.avg))+ '<br />');
	}
}

var liEl = document.getElementById("hour"); // This is a reference to the li element
hour.textContent = cookies_purchased_hour();

// var pikePlaceHourlyTotal = pikePlaceHourlyTotal1 + pikePlaceHourlyTotal2
