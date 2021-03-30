const sumAsync = (a: number, b: number): Promise<number> => Promise.resolve(a + b)

const sumTwice = async (a: number, b: number): Promise<number> => {
  const firstSum = await sumAsync(a, b)
  return await sumAsync(firstSum, b)
}

const promise = Promise.resolve(10)
  .then(x => sumAsync(x, 1))
  .then(x => x + 1)
  .then(x => sumAsync(x, 1))
  .then(x => sumTwice(x, 10))
  .then(console.log)