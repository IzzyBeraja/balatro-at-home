import React from "react";
import { Text } from "react-native";

export type DeckType = {
  name: string;
  image: string;
  discards: number;
  hands: number;
  startingMoney: number;
  gainsInterest: boolean;
  jokerSlots: number;
  consumableSlots: number;
  description: React.ReactNode;
  cards: CardType[];
  /** @deprecated get stake info from user data */
  stakeCompleted: number;
  /** @deprecated get unlocked info from user data */
  unlocked: boolean;
};

export const card_suits = ["hearts", "diamonds", "clubs", "spades"] as const;
export const card_values = [2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K", "A"] as const;

export type CardType = {
  suit: (typeof card_suits)[number];
  rank: (typeof card_values)[number];
  chips: number;
  image: string;
};

const defaultDeck: DeckType = {
  name: "Default Deck",
  image: "deck1",
  discards: 3,
  hands: 4,
  startingMoney: 100,
  gainsInterest: true,
  jokerSlots: 1,
  consumableSlots: 1,
  description: <Text>The default deck</Text>,
  cards: [
    { suit: "hearts", chips: 2, rank: 2, image: "2_of_hearts" },
    { suit: "hearts", chips: 3, rank: 3, image: "3_of_hearts" },
    { suit: "hearts", chips: 4, rank: 4, image: "4_of_hearts" },
    { suit: "hearts", chips: 5, rank: 5, image: "5_of_hearts" },
    { suit: "hearts", chips: 6, rank: 6, image: "6_of_hearts" },
    { suit: "hearts", chips: 7, rank: 7, image: "7_of_hearts" },
    { suit: "hearts", chips: 8, rank: 8, image: "8_of_hearts" },
    { suit: "hearts", chips: 9, rank: 9, image: "9_of_hearts" },
    { suit: "hearts", chips: 10, rank: 10, image: "10_of_hearts" },
    { suit: "hearts", chips: 10, rank: "J", image: "jack_of_hearts" },
    { suit: "hearts", chips: 10, rank: "Q", image: "queen_of_hearts" },
    { suit: "hearts", chips: 10, rank: "K", image: "king_of_hearts" },
    { suit: "hearts", chips: 11, rank: "A", image: "ace_of_hearts" },
    { suit: "diamonds", chips: 2, rank: 2, image: "2_of_diamonds" },
    { suit: "diamonds", chips: 3, rank: 3, image: "3_of_diamonds" },
    { suit: "diamonds", chips: 4, rank: 4, image: "4_of_diamonds" },
    { suit: "diamonds", chips: 5, rank: 5, image: "5_of_diamonds" },
    { suit: "diamonds", chips: 6, rank: 6, image: "6_of_diamonds" },
    { suit: "diamonds", chips: 7, rank: 7, image: "7_of_diamonds" },
    { suit: "diamonds", chips: 8, rank: 8, image: "8_of_diamonds" },
    { suit: "diamonds", chips: 9, rank: 9, image: "9_of_diamonds" },
    { suit: "diamonds", chips: 10, rank: 10, image: "10_of_diamonds" },
    { suit: "diamonds", chips: 10, rank: "J", image: "jack_of_diamonds" },
    { suit: "diamonds", chips: 10, rank: "Q", image: "queen_of_diamonds" },
    { suit: "diamonds", chips: 10, rank: "K", image: "king_of_diamonds" },
    { suit: "diamonds", chips: 11, rank: "A", image: "ace_of_diamonds" },
    { suit: "clubs", chips: 2, rank: 2, image: "2_of_clubs" },
    { suit: "clubs", chips: 3, rank: 3, image: "3_of_clubs" },
    { suit: "clubs", chips: 4, rank: 4, image: "4_of_clubs" },
    { suit: "clubs", chips: 5, rank: 5, image: "5_of_clubs" },
    { suit: "clubs", chips: 6, rank: 6, image: "6_of_clubs" },
    { suit: "clubs", chips: 7, rank: 7, image: "7_of_clubs" },
    { suit: "clubs", chips: 8, rank: 8, image: "8_of_clubs" },
    { suit: "clubs", chips: 9, rank: 9, image: "9_of_clubs" },
    { suit: "clubs", chips: 10, rank: 10, image: "10_of_clubs" },
    { suit: "clubs", chips: 10, rank: "J", image: "jack_of_clubs" },
    { suit: "clubs", chips: 10, rank: "Q", image: "queen_of_clubs" },
    { suit: "clubs", chips: 10, rank: "K", image: "king_of_clubs" },
    { suit: "clubs", chips: 11, rank: "A", image: "ace_of_clubs" },
    { suit: "spades", chips: 2, rank: 2, image: "2_of_spades" },
    { suit: "spades", chips: 3, rank: 3, image: "3_of_spades" },
    { suit: "spades", chips: 4, rank: 4, image: "4_of_spades" },
    { suit: "spades", chips: 5, rank: 5, image: "5_of_spades" },
    { suit: "spades", chips: 6, rank: 6, image: "6_of_spades" },
    { suit: "spades", chips: 7, rank: 7, image: "7_of_spades" },
    { suit: "spades", chips: 8, rank: 8, image: "8_of_spades" },
    { suit: "spades", chips: 9, rank: 9, image: "9_of_spades" },
    { suit: "spades", chips: 10, rank: 10, image: "10_of_spades" },
    { suit: "spades", chips: 10, rank: "J", image: "jack_of_spades" },
    { suit: "spades", chips: 10, rank: "Q", image: "queen_of_spades" },
    { suit: "spades", chips: 10, rank: "K", image: "king_of_spades" },
    { suit: "spades", chips: 11, rank: "A", image: "ace_of_spades" },
  ],
  stakeCompleted: 0,
  unlocked: true,
};

export const decks: DeckType[] = [
  {
    ...defaultDeck,
    name: "Red Deck",
    image: "red_deck",
    discards: defaultDeck.discards + 1,
    description: <Text>+1 discard every round</Text>,
  },
  {
    ...defaultDeck,
    name: "Blue Deck",
    image: "blue_deck",
    hands: defaultDeck.hands + 1,
    description: <Text>+1 hand every round</Text>,
  },
  {
    ...defaultDeck,
    name: "Yellow Deck",
    image: "yellow_deck",
    startingMoney: defaultDeck.startingMoney + 10,
    description: <Text>Start with extra $10</Text>,
  },
  {
    ...defaultDeck,
    name: "Green Deck",
    image: "green_deck",
    gainsInterest: false,
  },
  {
    ...defaultDeck,
    name: "Black Deck",
    image: "black_deck",
    jokerSlots: defaultDeck.jokerSlots + 1,
    hands: defaultDeck.hands - 1,
    description: <Text>+1 joker slot -1 hand every round</Text>,
  },
];
