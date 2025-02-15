import { Colors } from "@/constants/Colors";
import { StyleSheet, Text, View, ViewProps } from "react-native";

interface Props extends ViewProps {
  name: string;
  description: React.ReactNode;
}

export default function StakeDescription({
  name = "Deck Name",
  description = <Text>Deck Description</Text>,
  style,
  ...rest
}: Props) {
  return (
    <View style={[styles.outerContainer, style]} {...rest}>
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
