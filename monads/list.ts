const list = [1, 2, 3, 45, 1304, 24, 10293, 291916]

const r = list
  .filter(x => x % 2 === 0)
  .map(x => x * 3)
  .reduce((txt, x) => `${txt}\n${x}`, 'Divisible by 2, multiplied by 3:')

console.log(r)