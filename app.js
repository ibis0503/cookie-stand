// Stores the min/max hourly customers, and the average cookies per customer, in object properties
var pikePlace = {
	min: 17,
	max: 88,
	avg: 5.2,
  // Uses a method of that object to generate a random number of customers per hour
	getRandom: function(min, max) {
		return Math.random() * (max-min + 1) + min;
	}
}
pikePlace.getRandom(pikePlace.min, pikePlace.max)
// pikePlace.getRandom(pikePlace.min, pikePlace.max)* 5.2 = simulated amounts of cookies purchased for each hour
var pikePlaceHourlyTotal = Math.floor((pikePlace.getRandom(pikePlace.min, pikePlace.max))*(pikePlace.avg))
var pikePlaceHourlyTotal2 = Math.floor((pikePlace.getRandom(pikePlace.min, pikePlace.max))*(pikePlace.avg))
// Using for loop to calculate for each hours

// Display the values of each array as unordered lists in the browser

// Display the lists on index.html.

console.log(pikePlace.getRandom(pikePlace.min, pikePlace.max));
console.log(pikePlace.avg)
console.log(pikePlaceHourlyTotal);
console.log(pikePlaceHourlyTotal2);
