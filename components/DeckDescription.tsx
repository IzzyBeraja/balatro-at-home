import { Colors } from "@/constants/Colors";
import { StyleSheet, Text, View } from "react-native";

type Props = {
  name: string;
  description: React.ReactNode;
};

export default function DeckDescription({
  name = "Deck Name",
  description = <Text>Deck Description</Text>,
}: Props) {
  return (
    <View style={styles.outerContainer}>
      <Text style={styles.text}>{name}</Text>
      <View style={styles.descriptionContainer}>{description}</View>
    </View>
  );
}

const styles = StyleSheet.create({
  outerContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    rowGap: 6,
    padding: 3,
    borderRadius: 6,
    backgroundColor: Colors.mainMenuBackground,
  },
  descriptionContainer: {
    flex: 1,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
    paddingHorizontal: 12,
    borderRadius: 6,
  },
  text: {
    color: "white",
    fontWeight: "bold",
  },
});
