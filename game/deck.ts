import { TCard } from "@/constants/Cards";
import { NumRange } from "@/game/random";

export function shuffleDeck(rng: Generator<number, number, NumRange>, cards: TCard[]) {
  const shuffledDeck = [...cards];

  shuffledDeck.forEach((_, i) => {
    const j = rng.next({ min: i, max: shuffleDeck.length }).value;
    [shuffledDeck[i], shuffledDeck[j]] = [shuffledDeck[j], shuffledDeck[i]];
  });

  return shuffledDeck;
}
