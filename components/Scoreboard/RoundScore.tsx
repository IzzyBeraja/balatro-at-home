import StakeChip from "@/components/Stake/StakeChip";
import { Colors } from "@/constants/Colors";
import { TStakeID } from "@/constants/Stakes";
import { StyleSheet, Text, View, ViewProps } from "react-native";

interface Props extends ViewProps {
  roundScore: number;
  stake: TStakeID;
}

export default function RoundScore({ roundScore, stake, style, ...rest }: Props) {
  return (
    <View style={[styles.mainContainer, style]} {...rest}>
      <View>
        <Text style={styles.text}>Round</Text>
        <Text style={styles.text}>score</Text>
      </View>
      <View style={styles.scoreContainer}>
        <StakeChip stake={stake} />
        <Text style={styles.text}>{roundScore}</Text>
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
    color: "white",
  },
});
