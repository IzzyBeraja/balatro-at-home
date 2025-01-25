import BArrow from "@/components/ui/BArrow";
import BButton from "@/components/ui/BButton";
import BHorizontalScroll from "@/components/ui/BHorizontalScroll";
import { Colors } from "@/constants/Colors";
import { useState } from "react";
import { Modal, StyleSheet, View } from "react-native";

type Props = {
  onPlayPress: () => void;
  onBackPress: () => void;
  canContinue: boolean;
};

type GameType = "NewRun" | "Continue" | "Challenges";

export default function PlayModal({ onPlayPress, onBackPress, canContinue }: Props) {
  const [gameType, setGameType] = useState<GameType>(canContinue ? "Continue" : "NewRun");
  const [index, setIndex] = useState(0);

  return (
    <Modal transparent onRequestClose={onBackPress} animationType="slide" visible>
      <View style={styles.modalContainer}>
        <View style={styles.contentContainer}>
          <View style={styles.gameSelectionArrow}>
            <BArrow visible={gameType === "NewRun"} />
            {canContinue && <BArrow visible={gameType === "Continue"} />}
            <BArrow visible={gameType === "Challenges"} />
          </View>
          <View style={styles.gameSelection}>
            <BButton style={styles.gameSelectButton} onPress={() => setGameType("NewRun")}>
              New Run
            </BButton>
            {canContinue && (
              <BButton style={styles.gameSelectButton} onPress={() => setGameType("Continue")}>
                Continue
              </BButton>
            )}
            <BButton style={styles.gameSelectButton} onPress={() => setGameType("Challenges")}>
              Challenges
            </BButton>
          </View>
          <BHorizontalScroll
            count={4}
            index={index}
            setIndex={setIndex}
            style={{ marginBottom: 12 }}
            showCounter
          >
            <View style={{ width: 100, height: 100 }} />
          </BHorizontalScroll>
          <BHorizontalScroll count={0} index={index} setIndex={setIndex}>
            <View style={{ width: 100, height: 50 }} />
          </BHorizontalScroll>
          <View style={styles.playRow}>
            <View style={{ flex: 2 }} />
            <BButton
              style={styles.playButton}
              textStyle={styles.playText}
              defaultColor={Colors.blueButtonBackground}
              pressedColor={Colors.blue2ButtonBackground}
              onPress={onPlayPress}
            >
              PLAY
            </BButton>
            <View style={{ flex: 2 }} />
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
    paddingTop: 2,
    borderRadius: 10,
    borderColor: Colors.modalBorderColor,
    borderWidth: 2,
    rowGap: 4,
    width: 400,
    boxShadow: `0px 3px 0px 0px ${Colors.modalShadowColor}`,
  },
  gameSelection: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "flex-end",
    columnGap: 6,
    paddingHorizontal: 50,
    marginBottom: 12,
  },
  playRow: {
    flexDirection: "row",
  },
  gameSelectButton: {
    padding: 2,
    flex: 1,
  },
  playButton: {
    padding: 2,
    flex: 3,
  },
  playText: {
    fontSize: 20,
    fontWeight: "bold",
  },
  gameSelectionArrow: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "flex-end",
    paddingHorizontal: 50,
  },
});
