import { Colors } from "@/constants/Colors";
import { Modal, StyleSheet, View } from "react-native";
import BButton from "./BButton";

type Props = {
  visible: boolean;
  onSettingsPress: () => void;
  onStatsPress: () => void;
  onCustomizeDeckPress: () => void;
  onCreditsPress: () => void;
  onBackPress: () => void;
};

export default function CollectionModal({
  visible,
  onBackPress,
  onCreditsPress,
  onCustomizeDeckPress,
  onSettingsPress,
  onStatsPress,
}: Props) {
  return (
    <Modal transparent onRequestClose={onBackPress} animationType="slide" visible={visible}>
      <View style={styles.modalContainer}>
        <View style={styles.contentContainer}>
          <View style={styles.optionsContainer}>
            <BButton style={styles.options} onPress={onSettingsPress}>
              Settings
            </BButton>
            <BButton style={styles.options} onPress={onStatsPress}>
              Stats
            </BButton>
            <BButton style={styles.options} onPress={onCustomizeDeckPress}>
              Customize Deck
            </BButton>
            <BButton style={styles.options} onPress={onCreditsPress}>
              Credits
            </BButton>
          </View>
          <BButton
            style={{ marginTop: 4 }}
            defaultColor={Colors.yellowButtonBackground}
            pressedColor={Colors.yellow2ButtonBackground}
            onPress={onBackPress}
          >
            Back
          </BButton>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  contentContainer: {
    backgroundColor: Colors.mainMenuBackground,
    padding: 6,
    paddingTop: 8,
    borderRadius: 10,
    borderColor: Colors.modalBorderColor,
    borderWidth: 2,
    rowGap: 4,
    width: 250,
  },
  optionsContainer: {
    rowGap: 4,
    paddingHorizontal: 30,
  },
  options: {
    width: "100%",
  },
});
