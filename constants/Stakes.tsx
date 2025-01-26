import { Text } from "react-native";

export type Stake = {
  name: string;
  description: React.ReactNode;
  image: string;
  color: string;
};

export const stakes = [
  {
    name: "White Stake",
    description: <Text>Base Difficulty</Text>,
    image: "whiteStake",
    color: "white",
  },
  {
    name: "Red Stake",
    description: <Text>Small Blind</Text>,
    image: "redStake",
    color: "red",
  },
  {
    name: "Green Stake",
    description: <Text>Ante scales faster</Text>,
    image: "greenStake",
    color: "green",
  },
  {
    name: "Black Stake",
    description: <Text>Eternal jokers</Text>,
    image: "blackStake",
    color: "black",
  },
  {
    name: "White Stake",
    description: <Text>Base Difficulty</Text>,
    image: "whiteStake",
    color: "white",
  },
  {
    name: "Red Stake",
    description: <Text>Small Blind</Text>,
    image: "redStake",
    color: "red",
  },
  {
    name: "Green Stake",
    description: <Text>Ante scales faster</Text>,
    image: "greenStake",
    color: "green",
  },
  {
    name: "Black Stake",
    description: <Text>Eternal jokers</Text>,
    image: "blackStake",
    color: "black",
  },
];
