import { Colors } from "@/constants/Colors";
import { StyleSheet, Text, View, ViewProps } from "react-native";

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
  details: ScoreboardDetails;
}

export default function Scoreboard({ details, stage, style, ...rest }: Props) {
  const { chips, mult, hands, discards, money, ante, round, roundScore } = details;

  return (
    <View style={[styles.scoreboard, style]} {...rest}>
      <View>
        <Text style={styles.text}>Choose your</Text>
        <Text style={styles.text}>next Blind</Text>
      </View>
      <View></View>
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
