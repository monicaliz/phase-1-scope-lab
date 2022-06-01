// Write your solution in this file!

//customerName in global scope
var customerName = "bob"
const leastFavoriteCustomer = "mark"

// function that takes customerName and capitilizes it
function upperCaseCustomerName () {
    customerName =  customerName.toUpperCase()
}
// function that declares a global variable from within
function setBestCustomer () {
bestCustomer = 'not bob'
}
//function that changes bestCustomer to new var
function overwriteBestCustomer() {
    bestCustomer = 'maybe bob'
}
//change leastfavcustomer
function changeLeastFavoriteCustomer() {
    leastFavoriteCustomer = "not mark"
}