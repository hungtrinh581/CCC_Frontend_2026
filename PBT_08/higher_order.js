function pipe(...fns) { return input => fns.reduce((value, fn) => fn(value), input); }

function memoize(fn) {
  const cache = new Map();
  return (...args) => {
    const key = JSON.stringify(args);
    if (cache.has(key)) return cache.get(key);
    const result = fn(...args);
    cache.set(key, result);
    return result;
  };
}

function debounce(fn, delay) {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => fn(...args), delay);
  };
}

async function retry(fn, maxAttempts = 3) {
  let lastError;
  for (let attempt = 1; attempt <= maxAttempts; attempt++) {
    try { return await fn(); } catch (error) { lastError = error; }
  }
  throw lastError;
}

const miniArray = {
  map(arr, fn) {
    const output = [];
    for (let i = 0; i < arr.length; i++) output.push(fn(arr[i], i, arr));
    return output;
  },
  filter(arr, fn) {
    const output = [];
    for (let i = 0; i < arr.length; i++) if (fn(arr[i], i, arr)) output.push(arr[i]);
    return output;
  },
  reduce(arr, fn, initialValue) {
    let acc = initialValue;
    let start = 0;
    if (acc === undefined) { acc = arr[0]; start = 1; }
    for (let i = start; i < arr.length; i++) acc = fn(acc, arr[i], i, arr);
    return acc;
  },
};

const process = pipe(x => x * 2, x => x + 10, x => x.toString(), x => 'Kết quả: ' + x);
console.log(process(5));
const expensiveCalc = memoize((n) => {
  console.log('Đang tính...');
  let result = 0;
  for (let i = 0; i < n; i++) result += i;
  return result;
});
console.log(expensiveCalc(1000000));
console.log(expensiveCalc(1000000));
console.log(miniArray.map([1, 2, 3], x => x * 2));
console.log(miniArray.filter([1, 2, 3, 4], x => x > 2));
console.log(miniArray.reduce([1, 2, 3, 4], (a, b) => a + b, 0));
