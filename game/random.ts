const seedBase = 36;

export function genSeed() {
  return Math.floor(Math.random() * 2 ** seedBase)
    .toString(seedBase)
    .toUpperCase();
}

export interface NumRange {
  min: number;
  max: number;
}

export function* randomGenerator(seed: string): Generator<number, number, NumRange> {
  const multiplier = 1664525;
  const increment = 1013904223;
  const modulus = 2 ** 32;

  let state = parseInt(seed, seedBase) % modulus;
  // Returns 0 on first call, then waits for range when next is called again
  let range: NumRange = yield 0;

  while (true) {
    state = (multiplier * state + increment) % modulus;
    const { min, max } = range;
    const randomValue = Math.floor(min + (state / modulus) * (max - min));
    range = yield randomValue;
  }
}
