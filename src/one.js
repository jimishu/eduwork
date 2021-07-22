let a = 20;
function f1 (a, b) {
  return a + b;
}

function f2 (a) {
  return a;
}

let m = { a, f1, f2 };
module.exports = m;