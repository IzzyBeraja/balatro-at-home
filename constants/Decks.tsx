import BText from "@/components/ui/BText";
import { TCard, all_cards } from "@/constants/Cards";
import { Colors } from "@/constants/Colors";
import React from "react";

export const deckIds = ["red", "blue", "yellow", "green", "black", "abandoned"] as const;

export type TDeckID = (typeof deckIds)[number];

export type TDeck = {
  id: TDeckID;
  name: string;
  image: string;
  discards: number;
  hands: number;
  startingMoney: number;
  gainsInterest: boolean;
  jokerSlots: number;
  consumableSlots: number;
  description: React.ReactNode;
  cards: TCard[];
  /** @deprecated get stake info from user data */
  stakeCompleted: number;
  /** @deprecated get unlocked info from user data */
  unlocked: boolean;
};

const defaultDeck = {
  cards: all_cards,
  consumableSlots: 1,
  description: <BText color={Colors.black}>The default deck</BText>,
  discards: 3,
  gainsInterest: true,
  hands: 4,
  id: "red",
  image: "deck1",
  jokerSlots: 1,
  name: "Default Deck",
  stakeCompleted: 8,
  startingMoney: 100,
  unlocked: true,
} as const satisfies TDeck;

export const decks = {
  abandoned: {
    ...defaultDeck,
    cards: defaultDeck.cards.filter(
      (card) => card.rank !== "J" && card.rank !== "Q" && card.rank !== "K"
    ),
    description: <BText color={Colors.black}>+1 consumable slot every round</BText>,
    id: "abandoned",
    image: "abandoned_deck",
    name: "Abandoned Deck",
  },
  black: {
    ...defaultDeck,
    description: <BText color={Colors.black}>+1 joker slot -1 hand every round</BText>,
    hands: defaultDeck.hands - 1,
    id: "black",
    image: "black_deck",
    jokerSlots: defaultDeck.jokerSlots + 1,
    name: "Black Deck",
  },
  blue: {
    ...defaultDeck,
    description: <BText color={Colors.black}>+1 hand every round</BText>,
    hands: defaultDeck.hands + 1,
    id: "blue",
    image: "blue_deck",
    name: "Blue Deck",
  },
  green: {
    ...defaultDeck,
    gainsInterest: false,
    id: "green",
    image: "green_deck",
    name: "Green Deck",
  },
  red: {
    ...defaultDeck,
    description: <BText color={Colors.black}>+1 discard every round</BText>,
    discards: defaultDeck.discards + 1,
    id: "red",
    image: "red_deck",
    name: "Red Deck",
  },
  yellow: {
    ...defaultDeck,
    description: <BText color={Colors.black}>Start with extra $10</BText>,
    id: "yellow",
    image: "yellow_deck",
    name: "Yellow Deck",
    startingMoney: defaultDeck.startingMoney + 10,
  },
} as const satisfies { [key in TDeckID]: { id: key } & TDeck };
