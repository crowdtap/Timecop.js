beforeEach(function() {
  this.addMatchers({
    toHaveFunction: function(methodName) {
      return typeof this.actual[methodName] === 'function';
    },

    toBeCloseInTimeTo: function(otherDate, delta) {
      delta = delta || 500;
      return otherDate.getTime() - delta <= this.actual.getTime() &&
             otherDate.getTime() + delta >= this.actual.getTime();
    },

    toBeTheSameTimeAs: function(otherDate) {
      return otherDate.getTime() === this.actual.getTime();
    }
  });
});
