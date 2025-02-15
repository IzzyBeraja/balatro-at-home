import { Colors } from "@/constants/Colors";
import { stakeIds, stakes } from "@/constants/Stakes";
import { StyleSheet, View, ViewProps } from "react-native";

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
  container: {
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
