import { Colors } from "@/constants/Colors";
import { Pressable, StyleProp, StyleSheet, Text, View, ViewStyle } from "react-native";
import BButton from "./BButton";

type Props = {
  onPress: () => void;
  style?: StyleProp<ViewStyle>;
};

export default function ProfileEntrypoint({ style, onPress }: Props) {
  return (
    <View style={[styles.outerContainer, style]}>
      <Text selectable={false} style={styles.outerText}>
        Profile
      </Text>
      <BButton
        defaultColor={Colors.secondaryButtonBackground}
        pressedColor={Colors.mainMenuBackground}
        onPress={onPress}
        style={styles.innerContainer}
      >
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
    width: 100,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    alignSelf: "center",
    boxShadow: `0px 5px 0px 0px ${Colors.defaultShadowColor}`,
  },
  outerText: {
    marginBottom: 2,
    color: "white",
  },
  innerContainer: {
    padding: 6,
    alignSelf: "stretch",
    alignItems: "center",
    borderRadius: 10,
  },
  innerText: {
    color: "white",
  },
});
