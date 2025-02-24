import type { TDeckID } from "@/constants/Decks";
import type { ViewProps } from "react-native";

import { decks } from "@/constants/Decks";

import { Image, StyleSheet, View } from "react-native";

interface Props extends ViewProps {
  deckId: TDeckID;
}

export default function Deck({ deckId, style, ...rest }: Props) {
  return (
    <View style={[styles.deck, style]} {...rest}>
      <Image source={decks[deckId].image} style={styles.deck} />
    </View>
  );
}

const styles = StyleSheet.create({
  deck: {
    aspectRatio: 3 / 4,
    borderRadius: 4,
    height: 92,
  },
});
