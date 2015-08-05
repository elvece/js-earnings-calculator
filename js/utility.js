var calculator = {
  calculateTip: function(total, tipPercent){
    return total * (tipPercent / 100);
  },

  calculateTax: function(total, tipPercent){
    return total * (tipPercent / 100);
  },

  calculateSubtotal: function(total, taxRate){
    var tax = calculateTax(total, taxRate);
    return total + tax;
  },

  calculateTotal: function(total, taxRate, tipPercent){
    return calculateSubtotal(total, taxRate) + calculateTip(total, tipPercent);
  },

  totalTips: function(arr){
    var total = 0;
    for (var i = 0; i < arr.length; i++) {
      total += arr[i].tip;
    }
    return total;
  },

  avgTip: function(arr){
    var total = totalTips(arr);
    return total / arr.length;
  }
};

module.exports = {
  calculateTip: calculateTip,
  calculateTax: calculateTax,
  calculateSubtotal: calculateSubtotal,
  calculateTotal: calculateTotal,
  totalTips: totalTips,
  avgTip: avgTip
};
