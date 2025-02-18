import type { ViewProps } from "react-native";

import { Colors } from "@/constants/Colors";
import { stakeIds, stakes } from "@/constants/Stakes";

import { StyleSheet, View } from "react-native";

const blockWidth = 17;
const blockHeight = 9;

interface Props extends ViewProps {
  selected: number;
  numCompleted: number;
}

export default function DeckCounter({ selected, numCompleted, style, ...rest }: Props) {
  return (
    <View style={[styles.container, style]} {...rest}>
      {Array.from({ length: stakeIds.length }).map((_, i) => {
        const is_selected = i === selected;
        if (i < numCompleted)
          return (
            <CompletedItem
              key={i}
              stakeColor={stakes[stakeIds[i]].color}
              is_selected={is_selected}
            />
          );
        if (i === numCompleted) return <UnlockedItem key={i} is_selected={is_selected} />;
        return <DotItem key={i} />;
      })}
    </View>
  );
}

const DotItem = () => (
  <View style={styles.block}>
    <View style={styles.dot} />
  </View>
);

const UnlockedItem = ({ is_selected }: { is_selected: boolean }) => (
  <View style={[styles.block, is_selected && styles.selected]}>
    <View style={[styles.blockCenter, !is_selected && styles.unlocked]} />
  </View>
);

type CompletedItemProps = {
  stakeColor: string;
  is_selected: boolean;
};

const CompletedItem = ({ stakeColor, is_selected }: CompletedItemProps) => (
  <View style={[styles.block, styles.completed, is_selected && styles.selected]}>
    <View style={[styles.blockCenter, styles.completed, { backgroundColor: stakeColor }]} />
  </View>
);

const styles = StyleSheet.create({
  block: {
    alignItems: "center",
    borderColor: "transparent",
    borderRadius: 2,
    borderWidth: 1,
    height: blockHeight,
    justifyContent: "center",
    width: blockWidth,
  },
  blockCenter: {
    backgroundColor: Colors.mainMenuBackground,
    borderColor: Colors.mainMenuBackground,
    borderWidth: 1,
    height: "100%",
    width: "100%",
  },
  completed: {
    borderColor: Colors.mainMenuBackground,
  },
  container: {
    alignItems: "center",
    flexDirection: "column-reverse",
    justifyContent: "space-evenly",
    rowGap: 3,
  },
  dot: {
    backgroundColor: Colors.mainMenuBackground,
    borderRadius: 4,
    height: 4,
    width: 4,
  },
  selected: {
    borderColor: "white",
  },
  unlocked: {
    height: blockHeight - 3,
    width: blockWidth - 5,
  },
});
