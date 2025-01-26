import React from "react";
import { Text } from "react-native";

export type Deck = {
  name: string;
  image: string;
  description: React.ReactNode;
  stakeUnlocked: number;
  unlocked: boolean;
};

export const decks: Deck[] = [
  {
    name: "Deck 1",
    image: "deck1",
    stakeUnlocked: 0,
    description: <Text>The first deck</Text>,
    unlocked: true,
  },
  {
    name: "Deck 2",
    image: "deck2",
    stakeUnlocked: 1,
    description: <Text>The second deck</Text>,
    unlocked: true,
  },
  {
    name: "Deck 3",
    image: "deck3",
    stakeUnlocked: 2,
    description: <Text>The third deck</Text>,
    unlocked: true,
  },
  {
    name: "Deck 4",
    image: "deck4",
    stakeUnlocked: 3,
    description: <Text>The fourth deck</Text>,
    unlocked: true,
  },
  {
    name: "Deck 5",
    image: "deck5",
    stakeUnlocked: 2,
    description: <Text>The fifth deck</Text>,
    unlocked: false,
  },
];
