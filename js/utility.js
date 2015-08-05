function calculateTip(total, tipPercent){
  return total * (tipPercent / 100);
}

function calculateTax(total, taxRate){
  return total * (taxRate / 100);
}


function calculateSubtotal(total, taxRate){
  var tax = calculateTax(total, taxRate);
  return total + tax;
}

function calculateTotal(total, taxRate, tipPercent){
  return calculateSubtotal(total, taxRate) + calculateTip(total, tipPercent);
}

function totalTips(arr){
  var total = 0;
  for (var i = 0; i < arr.length; i++) {
    total += arr[i].tip;
  }
  return total;
}

function avgTip(arr){
  var total = totalTips(arr);
  return total / arr.length;
}

module.exports = {
  calculateTip: calculateTip,
  calculateTax: calculateTax,
  calculateSubtotal: calculateSubtotal,
  calculateTotal: calculateTotal,
  totalTips: totalTips,
  avgTip: avgTip
};
