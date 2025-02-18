export const card_suits = ["hearts", "diamonds", "clubs", "spades"] as const;
export const card_values = [2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K", "A"] as const;

export type TCard = {
  suit: (typeof card_suits)[number];
  rank: (typeof card_values)[number];
  chips: number;
  image: string;
};

export const all_cards = [
  { chips: 2, image: "2_of_hearts", rank: 2, suit: "hearts" },
  { chips: 3, image: "3_of_hearts", rank: 3, suit: "hearts" },
  { chips: 4, image: "4_of_hearts", rank: 4, suit: "hearts" },
  { chips: 5, image: "5_of_hearts", rank: 5, suit: "hearts" },
  { chips: 6, image: "6_of_hearts", rank: 6, suit: "hearts" },
  { chips: 7, image: "7_of_hearts", rank: 7, suit: "hearts" },
  { chips: 8, image: "8_of_hearts", rank: 8, suit: "hearts" },
  { chips: 9, image: "9_of_hearts", rank: 9, suit: "hearts" },
  { chips: 10, image: "10_of_hearts", rank: 10, suit: "hearts" },
  { chips: 10, image: "jack_of_hearts", rank: "J", suit: "hearts" },
  { chips: 10, image: "queen_of_hearts", rank: "Q", suit: "hearts" },
  { chips: 10, image: "king_of_hearts", rank: "K", suit: "hearts" },
  { chips: 11, image: "ace_of_hearts", rank: "A", suit: "hearts" },
  { chips: 2, image: "2_of_diamonds", rank: 2, suit: "diamonds" },
  { chips: 3, image: "3_of_diamonds", rank: 3, suit: "diamonds" },
  { chips: 4, image: "4_of_diamonds", rank: 4, suit: "diamonds" },
  { chips: 5, image: "5_of_diamonds", rank: 5, suit: "diamonds" },
  { chips: 6, image: "6_of_diamonds", rank: 6, suit: "diamonds" },
  { chips: 7, image: "7_of_diamonds", rank: 7, suit: "diamonds" },
  { chips: 8, image: "8_of_diamonds", rank: 8, suit: "diamonds" },
  { chips: 9, image: "9_of_diamonds", rank: 9, suit: "diamonds" },
  { chips: 10, image: "10_of_diamonds", rank: 10, suit: "diamonds" },
  { chips: 10, image: "jack_of_diamonds", rank: "J", suit: "diamonds" },
  { chips: 10, image: "queen_of_diamonds", rank: "Q", suit: "diamonds" },
  { chips: 10, image: "king_of_diamonds", rank: "K", suit: "diamonds" },
  { chips: 11, image: "ace_of_diamonds", rank: "A", suit: "diamonds" },
  { chips: 2, image: "2_of_clubs", rank: 2, suit: "clubs" },
  { chips: 3, image: "3_of_clubs", rank: 3, suit: "clubs" },
  { chips: 4, image: "4_of_clubs", rank: 4, suit: "clubs" },
  { chips: 5, image: "5_of_clubs", rank: 5, suit: "clubs" },
  { chips: 6, image: "6_of_clubs", rank: 6, suit: "clubs" },
  { chips: 7, image: "7_of_clubs", rank: 7, suit: "clubs" },
  { chips: 8, image: "8_of_clubs", rank: 8, suit: "clubs" },
  { chips: 9, image: "9_of_clubs", rank: 9, suit: "clubs" },
  { chips: 10, image: "10_of_clubs", rank: 10, suit: "clubs" },
  { chips: 10, image: "jack_of_clubs", rank: "J", suit: "clubs" },
  { chips: 10, image: "queen_of_clubs", rank: "Q", suit: "clubs" },
  { chips: 10, image: "king_of_clubs", rank: "K", suit: "clubs" },
  { chips: 11, image: "ace_of_clubs", rank: "A", suit: "clubs" },
  { chips: 2, image: "2_of_spades", rank: 2, suit: "spades" },
  { chips: 3, image: "3_of_spades", rank: 3, suit: "spades" },
  { chips: 4, image: "4_of_spades", rank: 4, suit: "spades" },
  { chips: 5, image: "5_of_spades", rank: 5, suit: "spades" },
  { chips: 6, image: "6_of_spades", rank: 6, suit: "spades" },
  { chips: 7, image: "7_of_spades", rank: 7, suit: "spades" },
  { chips: 8, image: "8_of_spades", rank: 8, suit: "spades" },
  { chips: 9, image: "9_of_spades", rank: 9, suit: "spades" },
  { chips: 10, image: "10_of_spades", rank: 10, suit: "spades" },
  { chips: 10, image: "jack_of_spades", rank: "J", suit: "spades" },
  { chips: 10, image: "queen_of_spades", rank: "Q", suit: "spades" },
  { chips: 10, image: "king_of_spades", rank: "K", suit: "spades" },
  { chips: 11, image: "ace_of_spades", rank: "A", suit: "spades" },
] satisfies TCard[];
