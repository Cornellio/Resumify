

// Solution for string quiz 2:

function sformat(name) {
	name = name.toLowerCase();
	firstName = [];
	firstName = name.split(' ');
	firstNameStr = firstName[0];
	firstNameLetter1 = firstNameStr[0];
	firstNameLetter1 = firstNameLetter1.toUpperCase();

	firstName = firstNameLetter1 + firstNameStr.slice(1);

	lastName = name.split(' ').slice(1);
	lastName = lastName.toString();
	lastName = lastName.toUpperCase();

	result = firstName + ' ' + lastName;
	return result
}

// console.log(sformat('aliana Cornell'))


var weirdObject = {
    "property": "Time for an astronomy lesson!",
    "property1": "Cameron's minor in college was astronomy",
    "property-2": "The 4 Galilean largest moons of Jupiter are:",
    "property 3": "Io, Ganymede, Callisto, Europa",
    "property$": "Saturn's moon Enceladus has liquid water ocean under its icy surface",
    " property": "The Sun contains 99.87% of the mass of the entire solar system",
    "property()": "There are 5 dwarf planets in our solar system:",
    "property[]": "Pluto, Ceres, Eris, Haumea, Makemake",
    "8property": "Mars has two tiny moons: Phobos and Deimos"
};


for (var key in weirdObject) {
  console.log(key, weirdObject[key])
}

for (var key in weirdObject) {
  if (weirdObject.hasOwnProperty(key)) {
    console.log(key, weirdObject[key]);
  }
}

console.log(me)

// console.log(weirdObject['8property']);

// property
var dotNotation0 = true;
var bracketNotation0 = true;

// property1
var dotNotation1 = false;
var bracketNotation1 = false;

// property-2
var dotNotation2 = false;
var bracketNotation2 = false;

// property 3
var dotNotation3 = false;
var bracketNotation3 = false;

// property$
var dotNotation4 = false;
var bracketNotation4 = false;

// *space*property
var dotNotation5 = false;
var bracketNotation5 = false;

// property()
var dotNotation6 = false;
var bracketNotation6 = false;

// property[]
var dotNotation7 = false;
var bracketNotation7 = false;

// 8property
var dotNotation8 = false;
var bracketNotation8 = false;
