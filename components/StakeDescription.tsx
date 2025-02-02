import { Colors } from "@/constants/Colors";
import { StyleSheet, Text, View } from "react-native";

type Props = {
  name: string;
  description: React.ReactNode;
};

export default function StakeDescription({
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
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 6,
    paddingTop: 0,
    padding: 2,
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
    fontSize: 10,
    fontWeight: "bold",
  },
});
