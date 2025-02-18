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
  id: "red",
  name: "Default Deck",
  image: "deck1",
  discards: 3,
  hands: 4,
  startingMoney: 100,
  gainsInterest: true,
  jokerSlots: 1,
  consumableSlots: 1,
  description: <BText color={Colors.black}>The default deck</BText>,
  cards: all_cards,
  stakeCompleted: 8,
  unlocked: true,
} as const satisfies TDeck;

export const decks = {
  red: {
    ...defaultDeck,
    id: "red",
    name: "Red Deck",
    image: "red_deck",
    discards: defaultDeck.discards + 1,
    description: <BText color={Colors.black}>+1 discard every round</BText>,
  },
  blue: {
    ...defaultDeck,
    id: "blue",
    name: "Blue Deck",
    image: "blue_deck",
    hands: defaultDeck.hands + 1,
    description: <BText color={Colors.black}>+1 hand every round</BText>,
  },
  yellow: {
    ...defaultDeck,
    id: "yellow",
    name: "Yellow Deck",
    image: "yellow_deck",
    startingMoney: defaultDeck.startingMoney + 10,
    description: <BText color={Colors.black}>Start with extra $10</BText>,
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
    description: <BText color={Colors.black}>+1 joker slot -1 hand every round</BText>,
  },
  abandoned: {
    ...defaultDeck,
    id: "abandoned",
    name: "Abandoned Deck",
    image: "abandoned_deck",
    cards: defaultDeck.cards.filter(
      (card) => card.rank !== "J" && card.rank !== "Q" && card.rank !== "K"
    ),
    description: <BText color={Colors.black}>+1 consumable slot every round</BText>,
  },
} as const satisfies { [key in TDeckID]: { id: key } & TDeck };
