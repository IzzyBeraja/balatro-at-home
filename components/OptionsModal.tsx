import type { ModalProps } from "react-native";

import BButton from "@/components/ui/BButton";
import { Colors } from "@/constants/Colors";

import { Modal, StyleSheet, View } from "react-native";

interface Props extends ModalProps {
  onSettingsPress: () => void;
  onStatsPress: () => void;
  onCustomizeDeckPress: () => void;
  onCreditsPress: () => void;
  onBackPress: () => void;
}

export default function OptionsModal({
  onBackPress,
  onCreditsPress,
  onCustomizeDeckPress,
  onSettingsPress,
  onStatsPress,
  ...rest
}: Props) {
  return (
    <Modal
      animationType="slide"
      supportedOrientations={["landscape"]}
      transparent
      visible
      onRequestClose={onBackPress}
      {...rest}
    >
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
          <BButton color={Colors.yellow} style={{ marginTop: 4 }} onPress={onBackPress}>
            Back
          </BButton>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  contentContainer: {
    backgroundColor: Colors.mainMenuBackground,
    borderColor: Colors.modalBorderColor,
    borderRadius: 10,
    borderWidth: 2,
    boxShadow: `0px 3px 0px 0px ${Colors.modalShadowColor}`,
    padding: 6,
    paddingTop: 8,
    rowGap: 4,
    width: 250,
  },
  modalContainer: {
    alignItems: "center",
    flex: 1,
    justifyContent: "center",
  },
  options: {
    width: "100%",
  },
  optionsContainer: {
    paddingHorizontal: 30,
    rowGap: 6,
  },
});
