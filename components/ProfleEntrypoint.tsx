import { Colors } from "@/constants/Colors";
import { Pressable, StyleProp, StyleSheet, Text, View, ViewStyle } from "react-native";

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
      <Pressable
        onPress={onPress}
        style={({ pressed }) => [
          styles.innerContainer,
          {
            backgroundColor: pressed ? Colors.mainMenuBackground : Colors.secondaryButtonBackground,
          },
        ]}
      >
        <Text selectable={false} style={styles.innerText}>
          P1
        </Text>
      </Pressable>
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
