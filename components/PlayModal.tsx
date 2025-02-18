import type { TDeckID} from "@/constants/Decks";
import type { TStakeID} from "@/constants/Stakes";
import type { ModalProps} from "react-native";

import DeckDisplay from "@/components/Deck/DeckDisplay";
import StakeDisplay from "@/components/Stake/StakeDisplay";
import BArrow from "@/components/ui/BArrow";
import BButton from "@/components/ui/BButton";
import BHorizontalScroll from "@/components/ui/BHorizontalScroll";
import { Colors } from "@/constants/Colors";
import { deckIds, decks } from "@/constants/Decks";
import { stakeIds } from "@/constants/Stakes";

import { useState } from "react";
import { Modal, StyleSheet, View } from "react-native";

interface Props extends ModalProps {
  onPlayPress: (deckId: TDeckID, stakeId: TStakeID) => void;
  onBackPress: () => void;
  canContinue: boolean;
}

type GameType = "NewRun" | "Continue" | "Challenges";

export default function PlayModal({ onPlayPress, onBackPress, canContinue, ...rest }: Props) {
  const [gameType, setGameType] = useState<GameType>(canContinue ? "Continue" : "NewRun");
  const [deckIndex, setDeckIndex] = useState(0);
  const [stakeIndex, setStakeIndex] = useState(0);

  const handleDeckChange = (index: number) => {
    setDeckIndex(index);
    setStakeIndex(Math.min(stakeIndex, decks[deckIds[index]].stakeCompleted));
  };

  return (
    <Modal
      transparent
      onRequestClose={onBackPress}
      animationType="slide"
      visible
      supportedOrientations={["landscape"]}
      {...rest}
    >
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
            count={deckIds.length}
            index={deckIndex}
            setIndex={handleDeckChange}
            style={{ marginBottom: 6 }}
            showCounter
          >
            <DeckDisplay deckID={deckIds[deckIndex]} stakeIndex={stakeIndex} />
          </BHorizontalScroll>
          <BHorizontalScroll
            count={Math.min(decks[deckIds[deckIndex]].stakeCompleted + 1, stakeIds.length)}
            index={stakeIndex}
            setIndex={setStakeIndex}
            showCounter
            style={{ marginBottom: 6 }}
          >
            <StakeDisplay stakeID={stakeIds[stakeIndex]} />
          </BHorizontalScroll>
          <View style={styles.playRow}>
            <View style={{ flex: 2 }} />
            <BButton
              style={styles.playButton}
              textStyle={styles.playText}
              onPress={() => onPlayPress(deckIds[deckIndex], stakeIds[stakeIndex])}
            >
              PLAY
            </BButton>
            <View style={{ flex: 2 }} />
          </View>
          <BButton style={{ backgroundColor: Colors.yellow, marginTop: 4 }} onPress={onBackPress}>
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
    paddingTop: 2,
    rowGap: 4,
    width: 360,
  },
  gameSelectButton: {
    flex: 1,
    padding: 2,
  },
  gameSelection: {
    alignItems: "flex-end",
    columnGap: 6,
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 12,
    paddingHorizontal: 50,
  },
  gameSelectionArrow: {
    alignItems: "flex-end",
    flexDirection: "row",
    justifyContent: "space-around",
    paddingHorizontal: 50,
  },
  modalContainer: {
    alignItems: "center",
    flex: 1,
    justifyContent: "center",
  },
  playButton: {
    backgroundColor: Colors.blue,
    flex: 3,
    padding: 2,
  },
  playRow: {
    flexDirection: "row",
  },
  playText: {
    fontSize: 20,
    fontWeight: "bold",
  },
});
