import { Colors } from "@/constants/Colors";
import { TStake } from "@/constants/Stakes";
import { StyleSheet, Text, View, ViewProps } from "react-native";
import RoundScore from "./RoundScore";

export type ScoreboardDetails = {
  chips: number;
  mult: number;
  hands: number;
  discards: number;
  money: number;
  ante: number;
  round: number;
  roundScore: number;
};

interface Props extends ViewProps {
  stage: "blind";
  score: ScoreboardDetails;
  stake: TStake;
}

export default function Scoreboard({ score, stage, stake, style, ...rest }: Props) {
  const { chips, mult, hands, discards, money, ante, round, roundScore } = score;

  return (
    <View style={[styles.scoreboard, style]} {...rest}>
      <View>
        <Text style={styles.text}>Choose your</Text>
        <Text style={styles.text}>next Blind</Text>
      </View>
      <RoundScore roundScore={roundScore} stake={stake.id} />
    </View>
  );
}

const styles = StyleSheet.create({
  scoreboard: {
    backgroundColor: Colors.scoreboard,
  },
  text: {
    color: "white",
  },
});
