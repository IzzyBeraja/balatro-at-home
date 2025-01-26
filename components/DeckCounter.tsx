import { Colors } from "@/constants/Colors";
import type { Stake } from "@/constants/Stakes";
import { StyleSheet, View } from "react-native";

type Props = {
  index: number;
  numUnlocked: number;
  stakes: Stake[];
};

export default function DeckCounter({ index, numUnlocked, stakes }: Props) {
  return (
    <View style={styles.container}>
      {Array.from({ length: stakes.length }).map((_, i) =>
        i <= numUnlocked ? (
          <View
            key={i}
            style={[
              styles.block,
              i === index ? styles.selected : { backgroundColor: Colors.mainMenuBackground },
            ]}
          >
            <View style={styles.innerBlock}>
              <View
                style={[
                  styles.centerBlock,
                  {
                    backgroundColor:
                      i <= numUnlocked - 1 ? stakes[i].color : Colors.mainMenuBackground,
                  },
                ]}
              />
            </View>
          </View>
        ) : (
          <View key={i} style={styles.block}>
            <View style={styles.dot} />
          </View>
        )
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: "100%",
    flexDirection: "column-reverse",
    justifyContent: "space-evenly",
    alignItems: "center",
    rowGap: 3,
  },
  block: {
    width: 18,
    height: 10,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 2,
    overflow: "hidden",
  },
  innerBlock: {
    width: 15,
    height: 7,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.mainMenuBackground,
    borderRadius: 2,
  },
  centerBlock: {
    width: 14,
    height: 6,
    borderRadius: 2,
  },
  dot: {
    width: 5,
    height: 5,
    borderRadius: 5,
    backgroundColor: Colors.mainMenuBackground,
  },
  selected: {
    backgroundColor: "white",
  },
});
