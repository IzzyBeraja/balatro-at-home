import Deck from "@/components/Deck";
import DeckCounter from "@/components/DeckCounter";
import DeckDescription from "@/components/DeckDescription";
import { Colors } from "@/constants/Colors";
import { StyleProp, StyleSheet, View, ViewStyle } from "react-native";

type Props = {
  name: string;
  image: string;
  description: React.ReactNode;
  unlocked: boolean;
  style?: StyleProp<ViewStyle>;
};

export default function DeckDisplay({ name, image, description, unlocked, style }: Props) {
  const deckImage = unlocked ? image : "locked";
  return (
    <View style={[styles.container, style]}>
      <Deck deckImage={deckImage} />
      <DeckDescription name={name} description={description} />
      <DeckCounter />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
    backgroundColor: Colors.defaultShadowColor,
    padding: 6,
    borderRadius: 6,
  },
});
