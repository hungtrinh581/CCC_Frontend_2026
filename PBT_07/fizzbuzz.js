function classicFizzBuzz() {
  for (let i = 1; i <= 100; i++) {
    let output = '';
    if (i % 3 === 0) output += 'Fizz';
    if (i % 5 === 0) output += 'Buzz';
    console.log(output || i);
  }
}

function customFizzBuzz(n, rules) {
  for (let i = 1; i <= n; i++) {
    const word = rules.filter(rule => i % rule.divisor === 0).map(rule => rule.word).join('');
    console.log(word || i);
  }
}

customFizzBuzz(30, [
  { divisor: 3, word: 'Fizz' },
  { divisor: 5, word: 'Buzz' },
  { divisor: 7, word: 'Jazz' },
]);
