var ZooAnimals = [
	{name: 'Zebra',
	 lunchTime: 1000},

	{name: 'Lion',
	 lunchTime: 1300},

	{name: 'Python',
	 lunchTime: 1000},

	{name: 'Crocodile',
	 lunchTime: 1200},
];

_.first(ZooAnimals)
//_.first(ZooAnimals) will return the first object in the array ZooAnimals
//In this case, it will return the object {name: 'Zebra', lunchTime: 1000}

_.rest(ZooAnimals)
//_.rest(ZooAnimals) will return each object in the array, except for the first
//In this case, it will return the array [{name: 'Lion', lunchTime: 1300}, {name: 'Python', lunchTime: 1000},
//  {name: 'Crocodile', lunchTime: 1200}]