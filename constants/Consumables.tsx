import type { ImageSourcePropType } from "react-native";

export type TConsumable = {
  id: string;
  image: ImageSourcePropType;
};

export const consumables = [
  {
    id: "red",
    image: require("@/assets/decks/red_joker.png"),
  },
  {
    id: "black",
    image: require("@/assets/decks/black_joker.png"),
  },
  {
    id: "white",
    image: require("@/assets/decks/white_joker.png"),
  },
] as const satisfies TConsumable[];
