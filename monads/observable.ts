// https://rxviz.com/

const { fromEvent } = Rx;
const { map, filter, throttleTime, takeUntil } = RxOperators;

// Mouse event
fromEvent(document, 'mousemove').pipe(
  // Coordinates
  map(event => [event.clientX, event.clientY]),
  // Every 0.3 seconds
  throttleTime(300),
  // X coordinate is divisible by 2
  filter(([x]) => x % 2 === 0),
  // Show coordinates
  map(([x, y]) => `${x},${y}`),
  // End on click
  takeUntil(fromEvent(document, 'click'))
)