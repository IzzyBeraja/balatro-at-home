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
  image: string;
  color: string;
};

export const stakes = {
  black: {
    color: "black",
    description: <BText color={Colors.black}>Eternal jokers</BText>,
    id: "black",
    image: "blackStake",
    name: "Black Stake",
  },
  blue: {
    color: "blue",
    description: <BText color={Colors.black}>Base Difficulty</BText>,
    id: "blue",
    image: "whiteStake",
    name: "Blue Stake",
  },
  gold: {
    color: "gold",
    description: <BText color={Colors.black}>Small Blind</BText>,
    id: "gold",
    image: "goldStake",
    name: "Gold Stake",
  },
  green: {
    color: "green",
    description: <BText color={Colors.black}>Ante scales faster</BText>,
    id: "green",
    image: "greenStake",
    name: "Green Stake",
  },
  orange: {
    color: "orange",
    description: <BText color={Colors.black}>Eternal jokers</BText>,
    id: "orange",
    image: "blackStake",
    name: "Orange Stake",
  },
  purple: {
    color: "purple",
    description: <BText color={Colors.black}>Ante scales faster</BText>,
    id: "purple",
    image: "greenStake",
    name: "Purple Stake",
  },
  red: {
    color: "red",
    description: <BText color={Colors.black}>Small Blind</BText>,
    id: "red",
    image: "redStake",
    name: "Red Stake",
  },
  white: {
    color: "white",
    description: <BText color={Colors.black}>Base Difficulty</BText>,
    id: "white",
    image: "whiteStake",
    name: "White Stake",
  },
} as const satisfies { [key in TStakeID]: { id: key } & TStake };
