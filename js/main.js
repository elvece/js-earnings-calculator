
//grab user-submiteed values from the form with jQuery, making sure you clear the values after each form submission
$(document).on('ready', function() {

  // var calc = require('../js/utility.js');

  var superTotal = [];

  $("input[type = 'submit']").on('click', function(e){
    e.preventDefault();
    var totalValues = {};
    totalValues.mealPrice = parseInt($("input[name = 'meal-price']").val());
    totalValues.taxRate = parseInt($("input[name = 'meal-taxrate']").val());
    totalValues.tipPercent = parseInt($("input[name = 'meal-tiprate']").val());
    $('.form-input').val('');

    var mealField = $('.totals')[0].children;

    $('.meal').empty();
    mealField[0].innerHTML += "<span class='meal'> $"+calc.calculateSubtotal(totalValues.mealPrice, totalValues.taxRate).toFixed(2)+"</span>";
    mealField[1].innerHTML += "<span class='meal'> $"+calc.calculateTip(totalValues.mealPrice, totalValues.tipPercent).toFixed(2)+"</span>";
    mealField[2].innerHTML += "<span class='meal'> $"+calc.calculateTotal(totalValues.mealPrice, totalValues.taxRate, totalValues.tipPercent).toFixed(2)+"</span>";

    superTotal.push({
      tip: Number(calc.calculateTip(totalValues.mealPrice, totalValues.tipPercent)),
      mealPrice: Number(totalValues.mealPrice)
    });

    $('.total-earnings').empty();
    var totalField = $('.totals')[1].children;
    totalField[0].innerHTML += "<span class='total-earnings'> $"+calc.totalTips(superTotal).toFixed(2)+"</span>";
    totalField[1].innerHTML += "<span class='total-earnings'> "+superTotal.length+"</span>";
    totalField[2].innerHTML += "<span class='total-earnings'> $"+calc.avgTip(superTotal).toFixed(2)+"</span>";

    console.log(totalValues);
    console.log(superTotal);

  });

  $("input:last").on('click', function(e){
    $('.meal').empty();
    $('.total-earnings').empty();
    $('.form-input').val('');
    superTotal = [];
  });

  $("input:nth-child(5)").on('click', function(){
    $('.form-input').val('');
  });

});


