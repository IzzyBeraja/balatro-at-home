import BButton from "@/components/ui/BButton";
import { Colors } from "@/constants/Colors";
import { StyleProp, StyleSheet, View, ViewStyle } from "react-native";

interface Props {
  onPlayPress: () => void;
  onOptionsPress: () => void;
  onCollectionPress: () => void;
  collectionVisible: boolean;
  style?: StyleProp<ViewStyle>;
}

export default function MainNav({ onPlayPress, onOptionsPress, onCollectionPress, style }: Props) {
  return (
    <View style={[styles.outerContainer, style]}>
      <BButton
        onPress={onPlayPress}
        style={styles.button}
        textStyle={styles.playButtonText}
        defaultColor={Colors.blueButtonBackground}
        pressedColor={Colors.blue2ButtonBackground}
      >
        PLAY
      </BButton>
      <BButton
        onPress={onOptionsPress}
        textStyle={styles.optionsButtonText}
        defaultColor={Colors.yellowButtonBackground}
        pressedColor={Colors.yellow2ButtonBackground}
        style={styles.optionsButton}
      >
        OPTIONS
      </BButton>
      <BButton
        onPress={onCollectionPress}
        style={styles.button}
        textStyle={styles.collectionButtonText}
        defaultColor={Colors.greenButtonBackground}
        pressedColor={Colors.green2ButtonBackground}
      >
        COLLECTION
      </BButton>
    </View>
  );
}

const styles = StyleSheet.create({
  outerContainer: {
    flexDirection: "row",
    backgroundColor: Colors.mainMenuBackground,
    padding: 6,
    paddingBottom: 8,
    width: 340,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    gap: 8,
    boxShadow: `0px 5px 0px -1px ${Colors.defaultShadowColor}`,
  },
  button: {
    flex: 1,
    paddingVertical: 8,
    height: "100%",
  },
  optionsButton: {
    flex: 0.7,
    height: "80%",
  },
  playButtonText: {
    fontSize: 24,
    fontWeight: "bold",
  },
  optionsButtonText: {
    fontSize: 12,
    fontWeight: "bold",
  },
  collectionButtonText: {
    fontSize: 16,
    fontWeight: "bold",
  },
});
