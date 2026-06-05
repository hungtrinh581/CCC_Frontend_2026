console.log('Đoạn 1:', x);
var x = 5;

try {
  console.log(y);
  let y = 10;
} catch (error) {
  console.log('Đoạn 2:', error.name);
}

try {
  const z = 15;
  z = 20;
  console.log(z);
} catch (error) {
  console.log('Đoạn 3:', error.name);
}

const arr = [1, 2, 3];
arr.push(4);
console.log('Đoạn 4:', arr);

let a = 1;
{
  let a = 2;
  console.log('Trong block:', a);
}
console.log('Ngoài block:', a);
