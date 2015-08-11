//refactored
function calculateTotals(obj){
  //container for customer totals
  var totalObj = {};
  //subtotal
  var subtotal = (obj.mealPrice * (obj.taxRate / 100)) + obj.mealPrice;
  //tip total
  var tip = obj.mealPrice * (obj.tipPercent / 100);
  //total total
  var total = subtotal + tip;
  //add calculated values to total object
  totalObj.subtotal = subtotal;
  totalObj.tip = tip;
  totalObj.total = total;
  //returns created object
  return totalObj;
}

function calculateRunningTotals(arr){
  //container for running totals
  var totalObj = {};
  //calculates meal count
  var mealCount = arr.length;
  //calculates total tips
  var totalTips = 0;
  for (var i = 0; i < arr.length; i++) {
  total += arr[i].tip;
  }
  //calculates average tip
  var avgTip = totalTips / mealCount;
  //add values to running totals object
  totalObj.mealCount = mealCount;
  totalObj.totalTips = totalTips;
  totalObj.avgTip = avgTip;
  //returns created object
  return totalObj;
}



// //Local Storage
// function LocalStorage(name, data){
//   this.name = name;
//   this.data = data;
// }

// LocalStorage.prototype.init = function() {
//   //create object in ilocal storage
// };


module.exports = {
calculateTotals: calculateTotals,
calculateRunningTotals: calculateRunningTotals
};
