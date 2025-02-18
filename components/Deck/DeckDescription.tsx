import BText from "@/components/ui/BText";
import { Colors } from "@/constants/Colors";
import { StyleSheet, View, ViewProps } from "react-native";

interface Props extends ViewProps {
  name: string;
  description: React.ReactNode;
}

export default function DeckDescription({
  name = "Deck Name",
  description = <BText>Deck Description</BText>,
  style,
  ...rest
}: Props) {
  return (
    <View style={[styles.outerContainer, style]} {...rest}>
      <BText>{name}</BText>
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
});
