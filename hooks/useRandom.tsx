import { randomGenerator } from "@/utils/random";

export function useRandom(seed: string) {
  const random = randomGenerator(seed);
  random.next();
  return random;
}
