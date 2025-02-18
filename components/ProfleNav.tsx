import BButton from "@/components/ui/BButton";
import BText from "@/components/ui/BText";
import { Colors } from "@/constants/Colors";
import { StyleSheet, View, ViewProps } from "react-native";

interface Props extends ViewProps {
  onPress: () => void;
}

export default function ProfileNav({ style, onPress, ...rest }: Props) {
  return (
    <View style={[styles.outerContainer, style]} {...rest}>
      <BText selectable={false}>Profile</BText>
      <BButton onPress={onPress} style={styles.innerContainer}>
        P1
      </BButton>
    </View>
  );
}

const styles = StyleSheet.create({
  outerContainer: {
    backgroundColor: Colors.mainMenuBackground,
    padding: 8,
    paddingTop: 4,
    width: 80,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    alignSelf: "center",
    boxShadow: `0px 5px 0px 0px ${Colors.defaultShadowColor}`,
  },
  outerText: {
    marginBottom: 2,
    color: "white",
    fontSize: 12,
  },
  innerContainer: {
    padding: 4,
    alignSelf: "stretch",
    alignItems: "center",
    borderRadius: 6,
    backgroundColor: Colors.secondaryButtonBackground,
  },
});
