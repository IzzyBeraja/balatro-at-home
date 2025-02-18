import BButton from "@/components/ui/BButton";
import { Colors } from "@/constants/Colors";
import { Pressable, StyleProp, StyleSheet, Text, View, ViewProps, ViewStyle } from "react-native";

interface Props extends ViewProps {
  onPress: () => void;
}

export default function ProfileNav({ style, onPress, ...rest }: Props) {
  return (
    <View style={[styles.outerContainer, style]} {...rest}>
      <Text selectable={false} style={styles.outerText}>
        Profile
      </Text>
      <BButton onPress={onPress} style={styles.innerContainer} textStyle={styles.innerText}>
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
  innerText: {
    color: "white",
    fontSize: 12,
  },
});
