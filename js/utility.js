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
