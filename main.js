"use strict"

function renderCoffee(coffee){
    var html = '<div class="coffee">';
    html += '<div>' + '<h3>' + coffee.name + '</h3>' + " " + '<p class="type-of-roast">' + coffee.roast + ' <i class="icon fas fa-coffee">' + '</i>' +
    '</p>' + '</div>';
    html += '</div>'
    return html;
}

function renderCoffees(coffees) {
    var html = '';
    for(var i = 0; i < coffees.length; i++) {
        html += renderCoffee(coffees[i]);
    }
    return html;
}

function addCoffee () {
    var brandNewRoast = newCoffeeRoastInput.value;
    var brandNewName = newCoffeeNameInput.value;
    var newCoffeeObject = {
        name: brandNewName,
        roast: brandNewRoast
    };
    coffees.push(newCoffeeObject)
    tbody.innerHTML = renderCoffees(coffees);
}




function updateCoffees(e) {
    e.preventDefault(); // don't submit the form, we just want to update the data
    var selectedRoast = roastSelection.value;
    var filteredCoffees = [];
    coffees.forEach(function(coffee) {
        if (coffee.roast === selectedRoast) {
            filteredCoffees.push(coffee);
        }
    });
    tbody.innerHTML = renderCoffees(filteredCoffees);
    // if(roastSelection.value === "all"){
    //     tbody.innerHTML = renderCoffees(coffees);
    // }
}

function updateCoffeesByInput(e) {
    e.preventDefault();
    var userInput = coffeeInput.value.toLowerCase()
    var userCoffees = [];
    coffees.forEach(function(coffee) {
        if (coffeeInput.value === ""){
            userCoffees.push(coffee);
        } else if (coffee.name.toLowerCase().includes(userInput)) {
            userCoffees.push(coffee);
        }
    });
    tbody.innerHTML = renderCoffees(userCoffees);
}


// from http://www.ncausa.org/About-Coffee/Coffee-Roasts-Guide
var coffees = [
    {id: 1, name: 'Light City', roast: 'light'},
    {id: 2, name: 'Half City', roast: 'light'},
    {id: 3, name: 'Cinnamon', roast: 'light'},
    {id: 4, name: 'City', roast: 'medium'},
    {id: 5, name: 'American', roast: 'medium'},
    {id: 6, name: 'Breakfast', roast: 'medium'},
    {id: 7, name: 'High', roast: 'dark'},
    {id: 8, name: 'Continental', roast: 'dark'},
    {id: 9, name: 'New Orleans', roast: 'dark'},
    {id: 10, name: 'European', roast: 'dark'},
    {id: 11, name: 'Espresso', roast: 'dark'},
    {id: 12, name: 'Viennese', roast: 'dark'},
    {id: 13, name: 'Italian', roast: 'dark'},
    {id: 14, name: 'French', roast: 'dark'},
];

var tbody = document.querySelector('#coffees');
// var submitButton = document.querySelector('#submit');
// var secondSubmitButton = document.querySelector('#user-input')
var roastSelection = document.querySelector('#roast-selection');
var coffeeInput = document.querySelector('#coffee-input');
var newCoffeeRoastInput = document.querySelector('#new-coffee-roast');
var newCoffeeNameInput = document.querySelector('#new-coffee-name');
var newCoffeeSubmitButton = document.querySelector('#new-coffee-button');

tbody.innerHTML = renderCoffees(coffees);

roastSelection.addEventListener('input', updateCoffees);
coffeeInput.addEventListener('input', updateCoffeesByInput);
newCoffeeSubmitButton.addEventListener('click', addCoffee)