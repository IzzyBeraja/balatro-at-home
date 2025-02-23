import type { ImageSourcePropType } from "react-native";

export const card_suits = ["hearts", "diamonds", "clubs", "spades"] as const;
export const card_values = [2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K", "A"] as const;

export type TCard = {
  suit: (typeof card_suits)[number];
  rank: (typeof card_values)[number];
  chips: number;
  image: ImageSourcePropType;
};

export const all_cards = [
  { chips: 2, image: require("@/assets/cards/red_deck.png"), rank: 2, suit: "hearts" },
  { chips: 3, image: require("@/assets/cards/red_deck.png"), rank: 3, suit: "hearts" },
  { chips: 4, image: require("@/assets/cards/red_deck.png"), rank: 4, suit: "hearts" },
  { chips: 5, image: require("@/assets/cards/red_deck.png"), rank: 5, suit: "hearts" },
  { chips: 6, image: require("@/assets/cards/red_deck.png"), rank: 6, suit: "hearts" },
  { chips: 7, image: require("@/assets/cards/red_deck.png"), rank: 7, suit: "hearts" },
  { chips: 8, image: require("@/assets/cards/red_deck.png"), rank: 8, suit: "hearts" },
  { chips: 9, image: require("@/assets/cards/red_deck.png"), rank: 9, suit: "hearts" },
  { chips: 10, image: require("@/assets/cards/red_deck.png"), rank: 10, suit: "hearts" },
  { chips: 10, image: require("@/assets/cards/red_deck.png"), rank: "J", suit: "hearts" },
  { chips: 10, image: require("@/assets/cards/red_deck.png"), rank: "Q", suit: "hearts" },
  { chips: 10, image: require("@/assets/cards/red_deck.png"), rank: "K", suit: "hearts" },
  { chips: 11, image: require("@/assets/cards/red_deck.png"), rank: "A", suit: "hearts" },
  { chips: 2, image: require("@/assets/cards/red_deck.png"), rank: 2, suit: "diamonds" },
  { chips: 3, image: require("@/assets/cards/red_deck.png"), rank: 3, suit: "diamonds" },
  { chips: 4, image: require("@/assets/cards/red_deck.png"), rank: 4, suit: "diamonds" },
  { chips: 5, image: require("@/assets/cards/red_deck.png"), rank: 5, suit: "diamonds" },
  { chips: 6, image: require("@/assets/cards/red_deck.png"), rank: 6, suit: "diamonds" },
  { chips: 7, image: require("@/assets/cards/red_deck.png"), rank: 7, suit: "diamonds" },
  { chips: 8, image: require("@/assets/cards/red_deck.png"), rank: 8, suit: "diamonds" },
  { chips: 9, image: require("@/assets/cards/red_deck.png"), rank: 9, suit: "diamonds" },
  { chips: 10, image: require("@/assets/cards/red_deck.png"), rank: 10, suit: "diamonds" },
  { chips: 10, image: require("@/assets/cards/red_deck.png"), rank: "J", suit: "diamonds" },
  { chips: 10, image: require("@/assets/cards/red_deck.png"), rank: "Q", suit: "diamonds" },
  { chips: 10, image: require("@/assets/cards/red_deck.png"), rank: "K", suit: "diamonds" },
  { chips: 11, image: require("@/assets/cards/red_deck.png"), rank: "A", suit: "diamonds" },
  { chips: 2, image: require("@/assets/cards/red_deck.png"), rank: 2, suit: "clubs" },
  { chips: 3, image: require("@/assets/cards/red_deck.png"), rank: 3, suit: "clubs" },
  { chips: 4, image: require("@/assets/cards/red_deck.png"), rank: 4, suit: "clubs" },
  { chips: 5, image: require("@/assets/cards/red_deck.png"), rank: 5, suit: "clubs" },
  { chips: 6, image: require("@/assets/cards/red_deck.png"), rank: 6, suit: "clubs" },
  { chips: 7, image: require("@/assets/cards/red_deck.png"), rank: 7, suit: "clubs" },
  { chips: 8, image: require("@/assets/cards/red_deck.png"), rank: 8, suit: "clubs" },
  { chips: 9, image: require("@/assets/cards/red_deck.png"), rank: 9, suit: "clubs" },
  { chips: 10, image: require("@/assets/cards/red_deck.png"), rank: 10, suit: "clubs" },
  { chips: 10, image: require("@/assets/cards/red_deck.png"), rank: "J", suit: "clubs" },
  { chips: 10, image: require("@/assets/cards/red_deck.png"), rank: "Q", suit: "clubs" },
  { chips: 10, image: require("@/assets/cards/red_deck.png"), rank: "K", suit: "clubs" },
  { chips: 11, image: require("@/assets/cards/red_deck.png"), rank: "A", suit: "clubs" },
  { chips: 2, image: require("@/assets/cards/red_deck.png"), rank: 2, suit: "spades" },
  { chips: 3, image: require("@/assets/cards/red_deck.png"), rank: 3, suit: "spades" },
  { chips: 4, image: require("@/assets/cards/red_deck.png"), rank: 4, suit: "spades" },
  { chips: 5, image: require("@/assets/cards/red_deck.png"), rank: 5, suit: "spades" },
  { chips: 6, image: require("@/assets/cards/red_deck.png"), rank: 6, suit: "spades" },
  { chips: 7, image: require("@/assets/cards/red_deck.png"), rank: 7, suit: "spades" },
  { chips: 8, image: require("@/assets/cards/red_deck.png"), rank: 8, suit: "spades" },
  { chips: 9, image: require("@/assets/cards/red_deck.png"), rank: 9, suit: "spades" },
  { chips: 10, image: require("@/assets/cards/red_deck.png"), rank: 10, suit: "spades" },
  { chips: 10, image: require("@/assets/cards/red_deck.png"), rank: "J", suit: "spades" },
  { chips: 10, image: require("@/assets/cards/red_deck.png"), rank: "Q", suit: "spades" },
  { chips: 10, image: require("@/assets/cards/red_deck.png"), rank: "K", suit: "spades" },
  { chips: 11, image: require("@/assets/cards/red_deck.png"), rank: "A", suit: "spades" },
] satisfies TCard[];
