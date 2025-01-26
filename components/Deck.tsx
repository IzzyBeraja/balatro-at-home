import { StyleSheet, View } from "react-native";

type Props = {
  deckImage: string;
};

export default function Deck({ deckImage }: Props) {
  return <View style={styles.deck} />;
}

const styles = StyleSheet.create({
  deck: {
    backgroundColor: "white",
    height: 100,
    width: 70,
    borderRadius: 4,
  },
});
