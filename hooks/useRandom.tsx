import { randomGenerator } from "@/game/random";
import { useMemo } from "react";

export function useRandom(seed: string) {
  return useMemo(() => {
    const rng = randomGenerator(seed);
    rng.next();
    return rng;
  }, [seed]);
}
