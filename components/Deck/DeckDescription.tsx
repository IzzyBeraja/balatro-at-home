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
  descriptionContainer: {
    alignItems: "center",
    backgroundColor: "white",
    borderRadius: 6,
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 12,
    width: "100%",
  },
  outerContainer: {
    alignItems: "center",
    backgroundColor: Colors.mainMenuBackground,
    borderRadius: 6,
    flex: 1,
    justifyContent: "center",
    padding: 3,
    rowGap: 6,
  },
});
