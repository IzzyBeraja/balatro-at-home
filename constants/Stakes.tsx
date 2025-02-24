import type { ImageSourcePropType } from "react-native";

import BText from "@/components/ui/BText";
import { Colors } from "@/constants/Colors";

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

export type TStakeID = (typeof stakeIds)[number];

export type TStake = {
  id: TStakeID;
  name: string;
  description: React.ReactNode;
  image: ImageSourcePropType;
  color: string;
};

export const stakes = {
  black: {
    color: "black",
    description: <BText color={Colors.black}>Eternal jokers</BText>,
    id: "black",
    image: require("@/assets/stakes/black_stake.png"),
    name: "Black Stake",
  },
  blue: {
    color: "blue",
    description: <BText color={Colors.black}>Base Difficulty</BText>,
    id: "blue",
    image: require("@/assets/stakes/blue_stake.png"),
    name: "Blue Stake",
  },
  gold: {
    color: "gold",
    description: <BText color={Colors.black}>Small Blind</BText>,
    id: "gold",
    image: require("@/assets/stakes/gold_stake.png"),
    name: "Gold Stake",
  },
  green: {
    color: "green",
    description: <BText color={Colors.black}>Ante scales faster</BText>,
    id: "green",
    image: require("@/assets/stakes/green_stake.png"),
    name: "Green Stake",
  },
  orange: {
    color: "orange",
    description: <BText color={Colors.black}>Eternal jokers</BText>,
    id: "orange",
    image: require("@/assets/stakes/orange_stake.png"),
    name: "Orange Stake",
  },
  purple: {
    color: "purple",
    description: <BText color={Colors.black}>Ante scales faster</BText>,
    id: "purple",
    image: require("@/assets/stakes/purple_stake.png"),
    name: "Purple Stake",
  },
  red: {
    color: "red",
    description: <BText color={Colors.black}>Small Blind</BText>,
    id: "red",
    image: require("@/assets/stakes/red_stake.png"),
    name: "Red Stake",
  },
  white: {
    color: "white",
    description: <BText color={Colors.black}>Base Difficulty</BText>,
    id: "white",
    image: require("@/assets/stakes/white_stake.png"),
    name: "White Stake",
  },
} as const satisfies { [key in TStakeID]: { id: key } & TStake };
