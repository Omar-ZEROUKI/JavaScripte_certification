// GCD et LCM de deux nombres
const gcd = (a, b) => b === 0 ? a : gcd(b, a % b);
const lcmTwo = (a, b) => (a * b) / gcd(a, b);

// Génère la plage
const range = arr => {
  const [min, max] = arr.sort((a, b) => a - b);
  return Array.from({ length: max - min + 1 }, (_, i) => i + min);
};

// Calcul LCM de tous les nombres de la plage
const smallestCommons = arr =>
  range(arr).reduce((acc, n) => lcmTwo(acc, n));

// Tests
console.log(smallestCommons([1, 5]));  // 60
console.log(smallestCommons([5, 1]));  // 60 (ordre inversé)
console.log(smallestCommons([2, 10])); // 2520
