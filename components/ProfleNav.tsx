import type { ViewProps } from "react-native";

import BButton from "@/components/ui/BButton";
import BText from "@/components/ui/BText";
import { Colors } from "@/constants/Colors";

import { StyleSheet, View } from "react-native";

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
  innerContainer: {
    alignItems: "center",
    alignSelf: "stretch",
    backgroundColor: Colors.secondaryButtonBackground,
    borderRadius: 6,
    padding: 4,
  },
  outerContainer: {
    alignItems: "center",
    alignSelf: "center",
    backgroundColor: Colors.mainMenuBackground,
    borderRadius: 10,
    boxShadow: `0px 5px 0px 0px ${Colors.defaultShadowColor}`,
    justifyContent: "center",
    padding: 8,
    paddingTop: 4,
    width: 80,
  },
  outerText: {
    color: "white",
    fontSize: 12,
    marginBottom: 2,
  },
});
