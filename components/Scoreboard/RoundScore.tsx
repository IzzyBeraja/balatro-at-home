import StakeChip from "@/components/Stake/StakeChip";
import { Colors } from "@/constants/Colors";
import { TStakeID } from "@/constants/Stakes";
import { StyleSheet, View, ViewProps } from "react-native";
import BText from "../ui/BText";

interface Props extends ViewProps {
  roundScore: number;
  stakeId: TStakeID;
}

export default function RoundScore({ roundScore, stakeId, style, ...rest }: Props) {
  return (
    <View style={[styles.mainContainer, style]} {...rest}>
      <View style={{ marginHorizontal: 8 }}>
        <BText style={styles.text}>{"Round\nscore"}</BText>
      </View>
      <View style={styles.scoreContainer}>
        <StakeChip size={18} stakeId={stakeId} />
        <BText style={styles.text}>{roundScore}</BText>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.scoreboardAccent,
    borderRadius: 12,
    padding: 6,
  },
  scoreContainer: {
    flex: 1,
    height: "100%",
    flexDirection: "row",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.scoreboard,
    gap: 4,
  },
  text: {
    textAlign: "center",
  },
});
