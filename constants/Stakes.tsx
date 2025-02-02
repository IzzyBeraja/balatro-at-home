import { Text } from "react-native";

export type Stake = {
  id: string;
  name: string;
  description: React.ReactNode;
  image: string;
  color: string;
};

export const stakes = [
  {
    id: "white-stake",
    name: "White Stake",
    description: <Text>Base Difficulty</Text>,
    image: "whiteStake",
    color: "white",
  },
  {
    id: "red-stake",
    name: "Red Stake",
    description: <Text>Small Blind</Text>,
    image: "redStake",
    color: "red",
  },
  {
    id: "green-stake",
    name: "Green Stake",
    description: <Text>Ante scales faster</Text>,
    image: "greenStake",
    color: "green",
  },
  {
    id: "black-stake",
    name: "Black Stake",
    description: <Text>Eternal jokers</Text>,
    image: "blackStake",
    color: "black",
  },
  {
    id: "blue-stake",
    name: "White Stake",
    description: <Text>Base Difficulty</Text>,
    image: "whiteStake",
    color: "white",
  },
  {
    id: "yellow-stake",
    name: "Red Stake",
    description: <Text>Small Blind</Text>,
    image: "redStake",
    color: "red",
  },
  {
    id: "purple-stake",
    name: "Green Stake",
    description: <Text>Ante scales faster</Text>,
    image: "greenStake",
    color: "green",
  },
  {
    id: "orange-stake",
    name: "Black Stake",
    description: <Text>Eternal jokers</Text>,
    image: "blackStake",
    color: "black",
  },
];
