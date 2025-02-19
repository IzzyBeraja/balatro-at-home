import { randomGenerator } from "@/game/random";

import { useMemo } from "react";

export function useRandom(seed?: string) {
  return useMemo(() => randomGenerator(seed), [seed]);
}
