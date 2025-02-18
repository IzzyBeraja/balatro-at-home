import type { StyleProp, ViewStyle } from "react-native";

import BButton from "@/components/ui/BButton";
import { Colors } from "@/constants/Colors";

import { StyleSheet, View } from "react-native";

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
        style={[styles.button, styles.playButton]}
        textStyle={styles.playButtonText}
        onPress={onPlayPress}
      >
        PLAY
      </BButton>
      <BButton
        style={styles.optionsButton}
        textStyle={styles.optionsButtonText}
        onPress={onOptionsPress}
      >
        OPTIONS
      </BButton>
      <BButton
        style={[styles.button, styles.collectionButton]}
        textStyle={styles.collectionButtonText}
        onPress={onCollectionPress}
      >
        COLLECTION
      </BButton>
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    flex: 1,
    height: "100%",
    paddingVertical: 8,
  },
  collectionButton: {
    backgroundColor: Colors.green,
  },
  collectionButtonText: {
    fontSize: 16,
    fontWeight: "bold",
  },
  optionsButton: {
    backgroundColor: Colors.yellow,
    flex: 0.7,
    height: "80%",
  },
  optionsButtonText: {
    fontSize: 12,
    fontWeight: "bold",
  },
  outerContainer: {
    alignItems: "center",
    backgroundColor: Colors.mainMenuBackground,
    borderRadius: 10,
    boxShadow: `0px 5px 0px -1px ${Colors.defaultShadowColor}`,
    flexDirection: "row",
    gap: 8,
    justifyContent: "center",
    padding: 6,
    paddingBottom: 8,
    width: 340,
  },
  playButton: {
    backgroundColor: Colors.blue,
  },
  playButtonText: {
    fontSize: 24,
    fontWeight: "bold",
  },
});
