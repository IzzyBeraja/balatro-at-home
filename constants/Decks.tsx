import React from "react";
import { Text } from "react-native";

export type DeckType = {
  name: string;
  image: string;
  description: React.ReactNode;
  stakeCompleted: number;
  unlocked: boolean;
};

export const decks: DeckType[] = [
  {
    name: "Deck 1",
    image: "deck1",
    stakeCompleted: 0,
    description: <Text>The first deck</Text>,
    unlocked: true,
  },
  {
    name: "Deck 2",
    image: "deck2",
    stakeCompleted: 1,
    description: <Text>The second deck</Text>,
    unlocked: true,
  },
  {
    name: "Deck 3",
    image: "deck3",
    stakeCompleted: 2,
    description: <Text>The third deck</Text>,
    unlocked: true,
  },
  {
    name: "Deck 4",
    image: "deck4",
    stakeCompleted: 3,
    description: <Text>The fourth deck</Text>,
    unlocked: true,
  },
  {
    name: "Deck 5",
    image: "deck5",
    stakeCompleted: 8,
    description: <Text>The fifth deck</Text>,
    unlocked: false,
  },
];
