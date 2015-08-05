$(document).on('ready', function() {

  // var Calc = require('../js/utility.js');

//global array that holds all created objects
  var superTotal = [];

//submit button click functions
  $("input[type = 'submit']").on('click', function(e){
    e.preventDefault();

    var totalValues = {};

    totalValues.mealPrice = parseInt($("input[name = 'meal-price']").val());

    totalValues.taxRate = parseInt($("input[name = 'meal-taxrate']").val());

    totalValues.tipPercent = parseInt($("input[name = 'meal-tiprate']").val());

    //clears values of form after clicking submit
    $('.form-input').val('');

    var mealField = $('.totals')[0].children;

    //total charges section
    $('.meal').empty();
    mealField[0].innerHTML += "<span class='meal'> $"+Calc.calculateSubtotal(totalValues.mealPrice, totalValues.taxRate).toFixed(2)+"</span>";

    mealField[1].innerHTML += "<span class='meal'> $"+Calc.calculateTip(totalValues.mealPrice, totalValues.tipPercent).toFixed(2)+"</span>";

    mealField[2].innerHTML += "<span class='meal'> $"+Calc.calculateTotal(totalValues.mealPrice, totalValues.taxRate, totalValues.tipPercent).toFixed(2)+"</span>";

    //pushes everything to master array
    superTotal.push({
      tip: Number(Calc.calculateTip(totalValues.mealPrice, totalValues.tipPercent)),
      mealPrice: Number(totalValues.mealPrice)
    });

    //total earnings section
    $('.total-earnings').empty();

    var totalField = $('.totals')[1].children;

    totalField[0].innerHTML += "<span class='total-earnings'> $"+Calc.totalTips(superTotal).toFixed(2)+"</span>";

    totalField[1].innerHTML += "<span class='total-earnings'> "+superTotal.length+"</span>";

    totalField[2].innerHTML += "<span class='total-earnings'> $"+Calc.avgTip(superTotal).toFixed(2)+"</span>";

    console.log(totalValues);
    console.log(superTotal);

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


