import { Colors } from "@/constants/Colors";
import type { Stake } from "@/constants/Stakes";
import { StyleSheet, View } from "react-native";

type Props = {
  selected: number;
  numCompleted: number;
  stakes: Stake[];
};

export default function DeckCounter({ selected, numCompleted, stakes }: Props) {
  const dotItem = () => (
    <View style={styles.block}>
      <View style={styles.dot} />
    </View>
  );

  const unlockedItem = (is_selected: boolean) => (
    <View style={[styles.block, is_selected && styles.selected]}>
      <View style={[styles.blockCenter, !is_selected && styles.unlocked]} />
    </View>
  );

  const completedItem = (i: number, is_selected: boolean) => (
    <View style={[styles.block, styles.completed, is_selected && styles.selected]}>
      <View style={[styles.blockCenter, styles.completed, { backgroundColor: stakes[i].color }]} />
    </View>
  );

  return (
    <View style={styles.container}>
      {Array.from({ length: stakes.length }).map((_, i) => {
        const is_selected = i === selected;
        if (i < numCompleted) return completedItem(i, is_selected);
        if (i === numCompleted) return unlockedItem(is_selected);
        return dotItem();
      })}
    </View>
  );
}

const blockWidth = 17;
const blockHeight = 9;

const styles = StyleSheet.create({
  container: {
    height: "100%",
    flexDirection: "column-reverse",
    justifyContent: "space-evenly",
    alignItems: "center",
    rowGap: 3,
  },
  block: {
    width: blockWidth,
    height: blockHeight,
    borderWidth: 1,
    borderColor: "transparent",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 2,
  },
  blockCenter: {
    borderWidth: 1,
    borderColor: Colors.mainMenuBackground,
    width: "100%",
    height: "100%",
    borderRadius: 2,
    backgroundColor: Colors.mainMenuBackground,
  },
  unlocked: {
    width: blockWidth - 5,
    height: blockHeight - 3,
  },
  completed: {
    borderColor: Colors.mainMenuBackground,
  },
  dot: {
    width: 4,
    height: 4,
    borderRadius: 4,
    backgroundColor: Colors.mainMenuBackground,
  },
  selected: {
    borderColor: "white",
  },
});
