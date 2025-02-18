import type { TCard } from "@/constants/Cards";
import type { NumRange } from "@/game/random";

export function shuffleDeck(rng: Generator<number, number, NumRange>, cards: TCard[]) {
  const shuffledDeck = [...cards];

  shuffledDeck.forEach((_, i) => {
    const j = rng.next({ max: shuffleDeck.length, min: i }).value;
    [shuffledDeck[i], shuffledDeck[j]] = [shuffledDeck[j], shuffledDeck[i]];
  });

  return shuffledDeck;
}
