var calc = {
  calculateTip: function(total, tipPercent){
    return total * (tipPercent / 100);
  },

  calculateTax: function(total, tipPercent){
    return total * (tipPercent / 100);
  },

  calculateSubtotal: function(total, taxRate){
    var tax = this.calculateTax(total, taxRate);
    return total + tax;
  },

  calculateTotal: function(total, taxRate, tipPercent){
    return this.calculateSubtotal(total, taxRate) + this.calculateTip(total, tipPercent);
  },

  totalTips: function(arr){
    var total = 0;
    for (var i = 0; i < arr.length; i++) {
      total += arr[i].tip;
    }
    return total;
  },

  avgTip: function(arr){
    var total = this.totalTips(arr);
    return total / arr.length;
  }
};

module.exports = calc;
