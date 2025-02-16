import { Text } from "react-native";

export const stakeIds = [
  "white",
  "red",
  "green",
  "black",
  "blue",
  "purple",
  "orange",
  "gold",
] as const;

export type StakeID = (typeof stakeIds)[number];

export type Stake = {
  id: StakeID;
  name: string;
  description: React.ReactNode;
  image: string;
  color: string;
};

export const stakes = {
  white: {
    id: "white",
    name: "White Stake",
    description: <Text>Base Difficulty</Text>,
    image: "whiteStake",
    color: "white",
  },
  red: {
    id: "red",
    name: "Red Stake",
    description: <Text>Small Blind</Text>,
    image: "redStake",
    color: "red",
  },
  green: {
    id: "green",
    name: "Green Stake",
    description: <Text>Ante scales faster</Text>,
    image: "greenStake",
    color: "green",
  },
  black: {
    id: "black",
    name: "Black Stake",
    description: <Text>Eternal jokers</Text>,
    image: "blackStake",
    color: "black",
  },
  blue: {
    id: "blue",
    name: "Blue Stake",
    description: <Text>Base Difficulty</Text>,
    image: "whiteStake",
    color: "blue",
  },
  purple: {
    id: "purple",
    name: "Purple Stake",
    description: <Text>Ante scales faster</Text>,
    image: "greenStake",
    color: "purple",
  },
  orange: {
    id: "orange",
    name: "Orange Stake",
    description: <Text>Eternal jokers</Text>,
    image: "blackStake",
    color: "orange",
  },
  gold: {
    id: "gold",
    name: "Gold Stake",
    description: <Text>Small Blind</Text>,
    image: "goldStake",
    color: "gold",
  },
} as const satisfies { [key in StakeID]: { id: key } & Stake };
