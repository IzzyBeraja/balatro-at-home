import type { ImageSourcePropType } from "react-native";

export const consumableIds = [
  "chariot",
  "death",
  "devil",
  "emperor",
  "empress",
  "fool",
  "hanged_man",
  "hermit",
  "hierophant",
  "judgement",
  "justice",
  "lovers",
  "magician",
  "moon",
  "priestess",
  "star",
  "strength",
  "sun",
  "temperance",
  "tower",
  "wheel_of_fortune",
  "world",
] as const;

export type TConsumableID = (typeof consumableIds)[number];

export type TConsumable = {
  id: TConsumableID;
  image: ImageSourcePropType;
};

export const newConsumable = {
  chariot: { id: "chariot", image: require("@/assets/tarot/chariot.png") },
  death: { id: "death", image: require("@/assets/tarot/death.png") },
  devil: { id: "devil", image: require("@/assets/tarot/devil.png") },
  emperor: { id: "emperor", image: require("@/assets/tarot/emperor.png") },
  empress: { id: "empress", image: require("@/assets/tarot/empress.png") },
  fool: { id: "fool", image: require("@/assets/tarot/fool.png") },
  hanged_man: { id: "hanged_man", image: require("@/assets/tarot/hanged_man.png") },
  hermit: { id: "hermit", image: require("@/assets/tarot/hermit.png") },
  hierophant: { id: "hierophant", image: require("@/assets/tarot/hierophant.png") },
  judgement: { id: "judgement", image: require("@/assets/tarot/judgement.png") },
  justice: { id: "justice", image: require("@/assets/tarot/justice.png") },
  lovers: { id: "lovers", image: require("@/assets/tarot/lovers.png") },
  magician: { id: "magician", image: require("@/assets/tarot/magician.png") },
  moon: { id: "moon", image: require("@/assets/tarot/moon.png") },
  priestess: { id: "priestess", image: require("@/assets/tarot/high_priestess.png") },
  star: { id: "star", image: require("@/assets/tarot/star.png") },
  strength: { id: "strength", image: require("@/assets/tarot/strength.png") },
  sun: { id: "sun", image: require("@/assets/tarot/sun.png") },
  temperance: { id: "temperance", image: require("@/assets/tarot/temperance.png") },
  tower: { id: "tower", image: require("@/assets/tarot/tower.png") },
  wheel_of_fortune: {
    id: "wheel_of_fortune",
    image: require("@/assets/tarot/wheel_of_fortune.png"),
  },
  world: { id: "world", image: require("@/assets/tarot/world.png") },
} as const satisfies {
  [key in TConsumableID]: { id: key } & TConsumable;
};
