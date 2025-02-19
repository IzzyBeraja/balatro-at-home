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
        color={Colors.blue}
        style={styles.button}
        textStyle={styles.playButtonText}
        onPress={onPlayPress}
      >
        PLAY
      </BButton>
      <BButton
        color={Colors.yellow}
        style={styles.optionsButton}
        textStyle={styles.optionsButtonText}
        onPress={onOptionsPress}
      >
        OPTIONS
      </BButton>
      <BButton
        color={Colors.green}
        style={styles.button}
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
  collectionButtonText: {
    fontSize: 16,
    fontWeight: "bold",
  },
  optionsButton: {
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
  playButtonText: {
    fontSize: 24,
    fontWeight: "bold",
  },
});
