import { Colors } from "@/constants/Colors";
import { StyleSheet, Text, View } from "react-native";

interface Props {
  roundScore: number;
  stake: number;
}

export default function RoundScore({ roundScore, stake }: Props) {
  return (
    <View style={styles.mainContainer}>
      <View>
        <Text style={styles.text}>Round</Text>
        <Text style={styles.text}>score</Text>
      </View>
      <View style={styles.scoreContainer}>
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
  },
  text: {
    color: "white",
  },
});
