
//grab user-submiteed values from the form with jQuery, making sure you clear the values after each form submission
$(document).on('ready', function() {
  $("input[type = 'submit']").on('click', function(e){
    e.preventDefault();
    var totalValues = {};
    totalValues.mealPrice = parseInt($("input[name = 'meal-price']").val());
    totalValues.taxRate = parseInt($("input[name = 'meal-taxrate']").val());
    totalValues.tipPercent = parseInt($("input[name = 'meal-tiprate']").val());
    $('.form-input').val('');

    var mealField = $('.totals')[0].children;

    $('#meal').empty();
    mealField[0].innerHTML += "<span id='meal'> $"+calculateSubtotal(totalValues.mealPrice, totalValues.taxRate)+"</span>";
    mealField[1].innerHTML += "<span id='meal'> $"+calculateTip(totalValues.mealPrice, totalValues.tipPercent)+"</span>";
    mealField[2].innerHTML += "<span id='meal'> $"+calculateTotal(totalValues.mealPrice, totalValues.taxRate, totalValues.tipPercent)+"</span>";




    // var inputFields = $('form input:first-child');
    // for (var i = 0; i < inputFields.length; i++) {
    //   temp.push(inputFields[i].value);
    //   inputFields[i].value = "";
    // }
    // totalValues.push(temp);
    console.log(totalValues);
  });
});


//calculate total charges, from the user submitted values and then append to the DOM








//refactor of for loop with map--not ideal in this case?
// userValues = inputFields.map(function(input){
//   return inputFields[input].value;
// });
