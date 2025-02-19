const seedBase = 36;

export function genSeed() {
  return Math.floor(Math.random() * 2 ** seedBase)
    .toString(seedBase)
    .toUpperCase();
}

export interface TRandomGenerator {
  next: (min: number, max: number) => number;
}

export function randomGenerator(seed?: string): TRandomGenerator {
  const multiplier = 1664525;
  const increment = 1013904223;
  const modulus = 2 ** 32;

  let state = parseInt(seed ?? genSeed(), seedBase) % modulus;

  function genSeed() {
    return Math.floor(Math.random() * 2 ** seedBase)
      .toString(seedBase)
      .toUpperCase();
  }

  function next(min: number, max: number): number {
    state = (multiplier * state + increment) % modulus;
    return Math.floor(min + (state / modulus) * (max - min));
  }

  return { next };
}
