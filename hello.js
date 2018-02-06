var number = 6.6;
var string = "6"

if (number === string) {
    console.log('Number is equal to string');
}
else {
    console.log('Number is not equal to string');
}

console.log(number + string);
console.log(number * string);

var classes = ['Java', 'JavaScript', 'C#'] // This is an array

if (classes.length === 3) {
    console.log('exactly 3 classes')
}

if (classes.length > 5) {
    console.log('wow, that is a lot of classes!')
}

// Index of returns -1 if the item is not found
if (classes.indexOf('Java') != -1) {
    console.log('Java is in your array.')
}

if (classes.indexOf('C++') == -1) {
    console.log('C++ is NOT in your array.')
    classes.push('C++'); // Lets add C++ if it's not there
}

if (classes.indexOf('Ruby') != -1) {
    console.log('Ruby is in your array.')
}

console.log(classes);
console.log(classes[0]); // The first element
// Can you console.log the second element?
console.log(classes[1]); // The second element

classes[2] = 'Python'; //Change a class to something else
console.log(classes); // ['Java', 'JavaScript', 'Python']

classes[10] = 'Ruby';
console.log(classes);

var cats = 4;

if (cats > 5) {
    console.log('You have more than 5 cats.')
}
else if (cats == 5) {
    console.log('You have exactly 5 cats.')
}
else {
    console.log('You have 5 or fewer cats.')
}


var text = "Hello World";

console.log(number);

console.log(text);

// Create for loop to display numbers 1 through 5
for (var x = 1 ; x < 6 ; x++) {
    console.log(x);
}


// loop over classes array
for (var c = 0 ; c < classes.length ; c++) {
    console.log(classes[c]);
}

classes.forEach(function(c) {
    console.log(c);
});


// modify this loop to count the number of spaces in our className
var spaces = 0;
var className = 'Web Client and Server Programming';
for (var letter = 0 ; letter < className.length ; letter++) {
    console.log(className[letter]);
    if (className[letter]==' ') {
        spaces++
    }
}

console.log('There are ' + spaces + ' spaces in "' + className + '"')


// display how many letters in my name
var name = 'Kenya'
console.log('There are ' + name.length + ' letters in ' + name);

// TODO create if statement: if name is less than 10 letters or more than 10


function add(a, b) {
    var out = a + b;
    return out;
}

console.log(add(4, 6));
console.log(add(4)); // displays NaN (not a number)
console.log(add('HTML & ', 'CSS'));

//--------------------------------------------------------------------------------//

exampleList = ['Zebra', 'Squid', 'Cat'];
exampleList2 = ['Owl', 'Plankton', 'Llama'];

console.log(containsOwl(exampleList));
console.log(containsOwl(exampleList2));

/* A very specific function testing if a list contains "Owl" in any case. How could you make this more
generally useful? */
function containsOwl(birdList) {
    var owl = 'owl';

    for (var i = 0 ; i < birdList.length ; i++) {
        if (birdList[i].toLowerCase() == owl) {
            return true;
        }
    }
    return false;
}

//-----------------------------------------------------------------------//

console.log('b' + 'a' + + 'a' + 'a');







