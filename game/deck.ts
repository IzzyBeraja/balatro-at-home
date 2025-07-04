import type { TPlayingCard } from "@/constants/PlayingCards";
import type { TRandomGenerator } from "@/game/random";

export function shuffleDeck(rng: TRandomGenerator, cards: TPlayingCard[]) {
  const shuffledDeck = [...cards];

  shuffledDeck.forEach((_, i) => {
    const j = rng.next(i, shuffledDeck.length);
    [shuffledDeck[i], shuffledDeck[j]] = [shuffledDeck[j], shuffledDeck[i]];
  });

  return shuffledDeck;
}
