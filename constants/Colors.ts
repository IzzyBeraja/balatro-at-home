export const Colors = {
  black: "rgb(0,0,0)",
  blue: "rgb(0,147,254)",
  defaultShadowColor: "rgb(15,26,31)",
  green: "rgb(66,159,121)",
  green2: "rgb(66,123,98)",
  mainMenuBackground: "rgb(59,81,85)",
  modalBorderColor: "rgb(172,193,195)",
  modalShadowColor: "rgb(118,116,132)",
  red: "rgb(254,76,64)",
  scoreboard: "rgb(43,53,55)",
  scoreboardAccent: "rgb(20,31,34)",
  secondaryButtonBackground: "rgb(111,131,134)",
  white: "rgb(255,255,255)",
  yellow: "rgb(253,153,0)",
} as const;

export type TColors = (typeof Colors)[keyof typeof Colors];
