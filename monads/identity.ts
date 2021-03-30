Object.defineProperty(Object.prototype, 'apply', {
  value: function (f) { return f(this) },
  enumerable: false,
  writable: false
})

interface Object {
  apply<T, U>(this: T, func: (obj: T) => U): U
}

interface Number extends Object {}

const sumn = (a: number, b: number) => a + b
const multiply = (a: number, b: number) => a * b
const substract = (a: number, b: number) => a - b
const divide = (a: number, b: number) => a / b

const myNumber = 10

console.log('Result ugly: ' + 
  divide(substract(multiply(sumn(myNumber, 4), 2), 5), 3).toFixed(2)
)

console.log('Result pretty: ' + 
  myNumber
    .apply(x => sumn(x, 4))
    .apply(x => multiply(x, 2))
    .apply(x => substract(x, 5))
    .apply(x => divide(x, 3))
    .toFixed(2)
)