// Currying

const sum = (a: number, b: number) => a + b

const sumCurried = (a: number) => (b: number) => a + b

sum(1, 2) // 3
sumCurried(1)(2) // 3


// Partial application

const sum4 = (a: number) => sum(a, 4)

const sum4Functional = sumCurried(4)

sum4(1) // 5
sum4Functional(4) // 5