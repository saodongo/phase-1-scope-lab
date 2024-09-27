// 1. Declare a global variable called customerName and assign it the value 'bob'
var customerName = 'bob';

// 2. Write a function that uppercases the global customerName
function upperCaseCustomerName() {
  customerName = customerName.toUpperCase(); // Reassigns customerName with its uppercase version
}

// 3. Write a function that declares a global variable bestCustomer and assigns it 'not bob'
function setBestCustomer() {
  bestCustomer = 'not bob'; // Without var, let, or const, this becomes a global variable
}

// 4. Write a function that overwrites the bestCustomer variable
function overwriteBestCustomer() {
  bestCustomer = 'maybe bob'; // Changes the value of the global bestCustomer variable
}

// 5. Declare a constant in global scope called leastFavoriteCustomer
const leastFavoriteCustomer = 'initial value';

// 6. Write a function that attempts to change the constant leastFavoriteCustomer
function changeLeastFavoriteCustomer() {
  leastFavoriteCustomer = 'new value'; // This will throw an error because constants can't be reassigned
}

