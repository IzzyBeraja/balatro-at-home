import { CardType, all_cards } from "@/constants/Cards";
import React from "react";
import { Text } from "react-native";

export type Deck = {
  id: string;
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

const defaultDeck = {
  id: "default",
  name: "Default Deck",
  image: "deck1",
  discards: 3,
  hands: 4,
  startingMoney: 100,
  gainsInterest: true,
  jokerSlots: 1,
  consumableSlots: 1,
  description: <Text>The default deck</Text>,
  cards: all_cards,
  stakeCompleted: 8,
  unlocked: true,
} as const satisfies Deck;

export type DeckID = (typeof deck_array)[number]["id"];

export const decks = {
  red: {
    ...defaultDeck,
    id: "red",
    name: "Red Deck",
    image: "red_deck",
    discards: defaultDeck.discards + 1,
    description: <Text>+1 discard every round</Text>,
  },
  blue: {
    ...defaultDeck,
    id: "blue",
    name: "Blue Deck",
    image: "blue_deck",
    hands: defaultDeck.hands + 1,
    description: <Text>+1 hand every round</Text>,
  },
  yellow: {
    ...defaultDeck,
    id: "yellow",
    name: "Yellow Deck",
    image: "yellow_deck",
    startingMoney: defaultDeck.startingMoney + 10,
    description: <Text>Start with extra $10</Text>,
  },
  green: {
    ...defaultDeck,
    id: "green",
    name: "Green Deck",
    image: "green_deck",
    gainsInterest: false,
  },
  black: {
    ...defaultDeck,
    id: "black",
    name: "Black Deck",
    image: "black_deck",
    jokerSlots: defaultDeck.jokerSlots + 1,
    hands: defaultDeck.hands - 1,
    description: <Text>+1 joker slot -1 hand every round</Text>,
  },
  abandoned: {
    ...defaultDeck,
    id: "abandoned",
    name: "Abandoned Deck",
    image: "abandoned_deck",
    cards: defaultDeck.cards.filter(
      (card) => card.rank !== "J" && card.rank !== "Q" && card.rank !== "K"
    ),
    description: <Text>+1 consumable slot every round</Text>,
  },
} as const satisfies Record<string, Deck>;

export const deck_array = Object.values(decks);
