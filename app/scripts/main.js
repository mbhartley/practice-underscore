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
_.min(gameStats, function(lowestAssists){
	return lowestAssists.assists;
});
//???this example is meant to return the object with the lowest value in the 'assists' property
//  however, there is a 2 way tie for lowest number of 'assists'. The actual return that I got was
//  the object {name: 'Wilt Chamberlain', points: 27, rebounds: 7, assists: 2}, even though the final
//  object (ie, Kevin McHale) also only has 2 'assists'; my assumption is that the limitation of this use
//  of _.min() is that it returns the first of the two lowest 'assist' values and then stops, in essence
//  ignoring the final object (Kevin Mchale)
_.where(gameStats, {points: 18, rebounds: 3})
//will return an arry of all objects in which the values provided match the properties values
//In this case there is only one object returned, {name: Larry Bird, points: 18, rebounds: 3, assists: 5}
_.findWhere(gameStats, {assists: 0})
//will return the first object in which the value provided matches the properties value for assists
//In this case, there is no match; therefore, the return is undefined; all players had at least 1 assist
_.indexBy(gameStats, 'points')
//will return an object with an index of each item in order from fewest points value to highest points value
//In this case the order of the object index runs 'Kevin Mchale', 'Larry Bird', 'Magic Johnson', 'Wilt Chamberlain',
//  and 'Michael Jordan', based on the points values of 12, 18, 23, 27, and 30 respectively
_.shuffle(gameStats)
//will simply shuffle the order of the objects around, seemingly in a random fashion
//not particularly useful in my gameStats array, but it answered my curiosity of, 'What's this?'

var dinnerSelector = [

	{
		name: 'Lasagna',
		prepTime: 15,
		cookTime: 75,
	},
	{
		name: 'Beef Stew',
	    prepTime: 20,
	    cookTime: 45,
	},
	{
		name: 'White Pizza',
	    prepTime: 30,
	    cookTime: 15,
	},
	{
	    name: 'Chicken Noodle Soup',
	    prepTime: 45,
	    cookTime: 45,
	},
	{
		name: 'Pot Roast',
		prepTime: 15,
		cookTime: 240,
	}
]

_.sample(dinnerSelector)
//will return a random object from my array, allowing me to bypass my indeciveness regarding what meals to plan for
//  when I am grocery shopping; Chicken Noodle Soup was the first meal it selected for me, Pot Roast the second; 
//  I could, of course, have ingredients listed for each object as well and have a grocery list generated for me

function FamilyMember(firstName, age, lastName){
	this.firstName = firstName;
    this.lastName = 'Hartley' || lastName;
	this.age = age;
	this.birthPlace = 'Dallas, TX';
	this.alive = true;
		
	this.growOld = function(){
		this.age = this.age + 1;
	};
	this.deceased = function(){
		this.alive = false;
	}
}

var mike = new FamilyMember ('Mike', 64) 
var charlotte = new FamilyMember ('Charlotte', 63)
var brian = new FamilyMember ('Brian', 40)
var melissa = new FamilyMember ('Melissa', 38)
var matt = new FamilyMember ('Matt', 36)
var lindsey = new FamilyMember ('Lindsey', 30)
var drew = new FamilyMember ('Drew', 23)

_.keys(mike)
//will return each of the property names for the object 'mike'
//In this case, it returns the array ["firstName", "lastName", "age", "birthPlace", "alive", "growOld", "deceased"]
_.values(mike)
//will return each of the values of the properties of the object 'mike'
//In this case, it returns ["Mike", "Hartley", 64, "Dallas, TX", true, function (){
//		this.age = this.age + 1;
//	}, function (){
//		this.alive = false;
//	}]
_.pairs({firstName: 'Mike', lastName: 'Hartley', age: 64})
//??will convert the above object into an array of arrays containing the property name and value
//I really have no idea what this is about, why it should be used, or if i really understand it??
_.functions(drew)
//will return a list of the name of every function property in the object 'drew'
//In this case, it returns ["deceased", "growOld"]
_.pick((charlotte), 'firstName', 'age')
//will return an object with only the designated properties and their corresponding values
//In this case, it returns object {firstName: "Charlotte", age: 63}
_.omit((lindsey), 'age', 'deceased', 'growOld')
//will return an object with the designated properties and their corresponding values omitted
//In this case it returns object {firstName: "Lindsey", lastName: "Hartley", birthPlace: "Dallas, TX", alive: true}
_.has(brian, 'age')
//basically, asks and answers the question 'does the object brian have the property age'
//In this case, it returns 'true'
_.has(brian, 'address')
//same as above, but returns 'false' because the object brian does not have a property named 'address'
_.isEqual(drew, matt)
//this runs a comparison of the two objects to determine if they should be equal
//and returns 'false', thus silencing everyone who tells me that my brother and i are just alike!














