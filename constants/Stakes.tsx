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
  white: {
    id: "white",
    name: "White Stake",
    description: <BText color={Colors.black}>Base Difficulty</BText>,
    image: "whiteStake",
    color: "white",
  },
  red: {
    id: "red",
    name: "Red Stake",
    description: <BText color={Colors.black}>Small Blind</BText>,
    image: "redStake",
    color: "red",
  },
  green: {
    id: "green",
    name: "Green Stake",
    description: <BText color={Colors.black}>Ante scales faster</BText>,
    image: "greenStake",
    color: "green",
  },
  black: {
    id: "black",
    name: "Black Stake",
    description: <BText color={Colors.black}>Eternal jokers</BText>,
    image: "blackStake",
    color: "black",
  },
  blue: {
    id: "blue",
    name: "Blue Stake",
    description: <BText color={Colors.black}>Base Difficulty</BText>,
    image: "whiteStake",
    color: "blue",
  },
  purple: {
    id: "purple",
    name: "Purple Stake",
    description: <BText color={Colors.black}>Ante scales faster</BText>,
    image: "greenStake",
    color: "purple",
  },
  orange: {
    id: "orange",
    name: "Orange Stake",
    description: <BText color={Colors.black}>Eternal jokers</BText>,
    image: "blackStake",
    color: "orange",
  },
  gold: {
    id: "gold",
    name: "Gold Stake",
    description: <BText color={Colors.black}>Small Blind</BText>,
    image: "goldStake",
    color: "gold",
  },
} as const satisfies { [key in TStakeID]: { id: key } & TStake };
