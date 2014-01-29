var zooAnimals = [
	{
		name: 'Zebra',
		lunchTime: 1000,
	},
	{
		name: 'Lion',
	    lunchTime: 1300,
	},
	{
		name: 'Python',
	    lunchTime: 1000,
	},
	{
	    name: 'Crocodile',
	    lunchTime: 1200
	},
];

_.first(zooAnimals)
//will return the first object in the array zooAnimals
//In this case, it will return the object {name: 'Zebra', lunchTime: 1000}
_.first(zooAnimals, [2])
//will return the first two objects in the array of zooAnimals
//In this case, it will return [{name: 'Zebra', lunchTime: 1000}, {name: 'Lion', lunchTime: 1300}]
_.last(zooAnimals)
//will return the last object in the array of zooAnimals
//In this case, it will return {name: 'Crocodile', lunchTime: 1200}
_.last(zooAnimals, [2])
//will return the last two objects in the array of zooAnimals
//In this case, it will return the array [{name: 'Python', lunchTime: 1000}, {name: 'Crocodile', lunchTime: 1200}]
_.rest(zooAnimals)
//will return each object in the array of zooAnimals, except for the first
//In this case, it will return the array [{name: 'Lion', lunchTime: 1300}, {name: 'Python', lunchTime: 1000},
//  {name: 'Crocodile', lunchTime: 1200}]
_.rest(zooAnimals[2])
//will return each object in the array of zooAnimals beginning with the [2]index and onward
//In this case, it will return the array [{name: 'Python', lunchTime: 1000}, {name: 'Crocodile', lunchTime: 1200}]
_.initial(zooAnimals)
//will return each object in the array of zooAnimals, except for the last element
//In this case, it will return the array [{name: 'Zebra', lunchTime: 1000}, {name: 'Lion', lunchTime: 1300}
//  {name: 'Python', lunchTime: 1200}]
_.initial(zooAnimals, [2])
//will return each object in the array of zooAnimals, except for the last 2 elements
//In this case, it will return the array [{name: 'Zebra', lunchTime: 1000}, {name: 'Lion', lunchTime: 1200}]


var gameStats = [
	{
		name: 'Magic Johnson',
		points: 23,
		rebounds: 9,
		assists: 5,
	},
	{
		name: 'Michael Jordan',
	    points: 30,
	    rebounds: 10,
	    assists: 11,
	},
	{
		name: 'Larry Bird',
	    points: 18,
	    rebounds: 3,
	    assists: 5,
	},
	{
	    name: 'Wilt Chamberlain',
	    points: 27,
	    rebounds: 7,
	    assists: 2,
	},
	{
		name: 'Kevin McHale',
		points: 12,
		rebounds: 3,
		assists: 2,
	}
];

_.pluck(gameStats, 'rebounds')
//will return the value of the property 'rebound' for each object
//In this case, it will return the array [9, 10, 3, 7, 3]
_.max(gameStats, function(highScorer){ 
	return highScorer.points; 
});
//will return the object with the highest value in the 'points' property
//In this case the object returned is {name: 'Michael Jordan', points: 30, rebounds: 10, assists: 11}
//  because the higest value in the points properties is 30





