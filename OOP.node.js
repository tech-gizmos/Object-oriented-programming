// Class with Class/Static Properties and Methods
class Calculator {
  // Class property
  static PI = 3.14;

  // Class method
  static square(x) {
    return x * x;
  }

  // Class method
  static circleArea(radius) {
    return Calculator.PI * Calculator.square(radius);
  }
}

// Accessing class property
console.log("PI:", Calculator.PI);

// Using class method
console.log("Square of 5:", Calculator.square(5));
console.log("Area of a circle with radius 3:", Calculator.circleArea(3));



//  Descriptive Statistics using ES6+ Classes
class SimpleStatistics {
  constructor(data) {
    this.data = data;
  }

  // Method to calculate the mean
  calculateMean() {
    const sum = this.data.reduce((acc, value) => acc + value, 0);
    return sum / this.data.length;
  }
}

// Example usage
const dataset = [1, 2, 3, 4, 5];
const stats = new SimpleStatistics(dataset);

console.log("Mean:", stats.calculateMean());
