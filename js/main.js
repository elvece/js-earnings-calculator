$(document).on('ready', function() {

// var Calc = require('../js/utility.js');

//check if object exists in local storage
// if (!localStorage.getItem('bills')){
//   localStorage.setItem('bills', JSON.stringify([]));
// }
// if (!localStorage.getItem('earnings')){
//   localStorage.setItem('earnings', JSON.stringify([]));
// }
  //if doesnt exist
    //manually add new object to local storage
    //{bills: []}
    //{earnings: []}
  //else
    //do nothing


//global array that holds all created objects(runing totals)
  var superTotals = [];

//submit button click functions
  $("input[type = 'submit']").on('click', function(e){
    //***GRAB FORM VALUES***//
    //prevents default form behavior
    e.preventDefault();
    //container for each meal value total
    var totalMealValues = {};
    //grabs values from the form for each section and added them to the totalMealValues object
    totalMealValues.mealPrice = parseInt($("input[name = 'meal-price']").val());
    totalMealValues.taxRate = parseInt($("input[name = 'meal-taxrate']").val());
    totalMealValues.tipPercent = parseInt($("input[name = 'meal-tiprate']").val());
    //clears values of form after clicking submit
    $('.form-input').val('');

    //***TOTAL MEAL CHARGES SECTION (calculate and appends)***//
    //makes variable for area to put total charges per customer` results in
    var mealField = $('.totals')[0].children;
    //empties the total charges per customer section
    $('.meal').empty();
    //calculates customer totals
    var customerTotals = calculateTotals(totalMealValues);
    //calculates and appends subtotal
    mealField[0].innerHTML += "<span class='meal'> $"+customerTotals.subtotal.toFixed(2)+"</span>";
    //calculates and appends tip
    mealField[1].innerHTML += "<span class='meal'> $"+customerTotals.tip.toFixed(2)+"</span>";
    //calculates and appends total
    mealField[2].innerHTML += "<span class='meal'> $"+customerTotals.total.toFixed(2)+"</span>";

// //get object from local Storage, parsing the data
// var localStorageArray = JSON.parse(localStorage.getItem('bills'));
// //push new bill to array
// localStorageArray.push(bill);
// localStorage.setItem('bills', JSON.stringify(localStorageArray));

    //pushes customer total objects to master array
    superTotals.push(customerTotals);

    //***TOTAL EARNINGS SECTION (calculates and appends)***//
    //empties total earnings section ??need for local storage
    $('.total-earnings').empty();
    //makes variable for area to put running totals results in
    var totalField = $('.totals')[1].children;
    //calculates and appends total tips
    var runningTotals = calculateRunningTotals(superTotals);
    totalField[0].innerHTML += "<span class='total-earnings'> $"+runningTotals.totalTips.toFixed(2)+"</span>";
    //calculates and appends meal count
    totalField[1].innerHTML += "<span class='total-earnings'> "+runningTotals.mealCount+"</span>";
    //calculates and appends average tip
    totalField[2].innerHTML += "<span class='total-earnings'> $"+runningTotals.avgTip.toFixed(2)+"</span>";

    console.log(totalMealValues);
    console.log(superTotals);

  });

//reset button
  $("input:last").on('click', function(e){
    $('.meal').empty();
    $('.total-earnings').empty();
    $('.form-input').val('');
    superTotal = [];
  });

//clear button
  $("input:nth-child(5)").on('click', function(){
    $('.form-input').val('');
  });

});

//init: create an empty array in local storage (local storage object)
//add bill --> GET, SET
//render bill --> GET

