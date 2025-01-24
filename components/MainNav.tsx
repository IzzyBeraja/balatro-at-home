import { Colors } from "@/constants/Colors";
import { Pressable, StyleProp, StyleSheet, Text, View, ViewStyle } from "react-native";

type Props = {
  onPlayPress: () => void;
  onOptionsPress: () => void;
  onCollectionPress: () => void;
  style?: StyleProp<ViewStyle>;
};

export default function MainNav({ onPlayPress, onOptionsPress, onCollectionPress, style }: Props) {
  return (
    <View style={[styles.outerContainer, style]}>
      <Pressable
        onPress={onPlayPress}
        style={({ pressed }) => [
          styles.buttonBase,
          {
            backgroundColor: pressed
              ? Colors.playButtonPressedBackground
              : Colors.playButtonBackground,
          },
        ]}
      >
        <Text selectable={false} style={[styles.text, styles.playButtonText]}>
          PLAY
        </Text>
      </Pressable>
      <Pressable
        onPress={onOptionsPress}
        style={({ pressed }) => [
          styles.buttonBase,
          styles.optionsButton,
          {
            backgroundColor: pressed
              ? Colors.optionsButtonPressedBackground
              : Colors.optionsButtonBackground,
          },
        ]}
      >
        <Text selectable={false} style={[styles.text, styles.optionsButtonText]}>
          OPTIONS
        </Text>
      </Pressable>
      <Pressable
        onPress={onCollectionPress}
        style={({ pressed }) => [
          styles.buttonBase,
          {
            backgroundColor: pressed
              ? Colors.collectionButtonPressedBackground
              : Colors.collectionButtonBackground,
          },
        ]}
      >
        <Text selectable={false} style={[styles.text, styles.collectionButtonText]}>
          COLLECTION
        </Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  outerContainer: {
    flexDirection: "row",
    backgroundColor: Colors.mainMenuNavBackground,
    padding: 6,
    width: 400,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    gap: 8,
  },
  buttonBase: {
    flex: 1,
    height: "100%",
    padding: 12,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },
  optionsButton: {
    flex: 0.7,
    height: "80%",
  },
  text: {
    color: "white",
  },
  playButtonText: {
    fontSize: 28,
  },
  optionsButtonText: {
    fontSize: 16,
  },
  collectionButtonText: {
    fontSize: 20,
  },
});
