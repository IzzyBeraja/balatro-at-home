import { StyleSheet, View, ViewProps } from "react-native";

interface Props extends ViewProps {
  deckImage: string;
}

export default function Deck({ deckImage, style, ...rest }: Props) {
  return <View style={[styles.deck, style]} {...rest} />;
}

const styles = StyleSheet.create({
  deck: {
    backgroundColor: "white",
    height: 90,
    width: 60,
    borderRadius: 4,
  },
});
