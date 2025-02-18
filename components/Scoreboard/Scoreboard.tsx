import { Colors } from "@/constants/Colors";
import { TStakeID } from "@/constants/Stakes";
import { StyleSheet, View, ViewProps } from "react-native";
import BButton from "../ui/BButton";
import BInfoBox from "../ui/BInfoBox";
import BText from "../ui/BText";
import HandScore from "./HandScore";
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
  handType: string;
  score: ScoreboardDetails;
  stakeId: TStakeID;
}

export default function Scoreboard({ handType, score, stage, stakeId, style, ...rest }: Props) {
  const { chips, mult, hands, discards, money, ante, round, roundScore } = score;

  return (
    <View style={[styles.scoreboard, style]} {...rest}>
      <View style={{ flex: 1, justifyContent: "center" }}>
        <BText style={styles.text}>{"Choose your\nnext blind"}</BText>
      </View>
      <RoundScore roundScore={roundScore} stakeId={stakeId} />
      <HandScore handType={handType} chips={chips} mult={mult} />
      <View style={{ flexDirection: "row", gap: 4 }}>
        <View style={{ flex: 1, gap: 8 }}>
          <BButton style={{ flex: 1 }} onPress={() => {}}>
            {"Run\nInfo"}
          </BButton>
          <BButton style={{ backgroundColor: Colors.yellow, flex: 1 }} onPress={() => {}}>
            Options
          </BButton>
        </View>
        <View style={{ flex: 2, gap: 6 }}>
          <View style={{ flexDirection: "row", gap: 6 }}>
            <BInfoBox title="Hands" style={styles.infoBox}>
              <BText style={styles.text}>{hands}</BText>
            </BInfoBox>
            <BInfoBox title="Discards" style={styles.infoBox}>
              <BText style={styles.text}>{discards}</BText>
            </BInfoBox>
          </View>
          <BInfoBox>
            <BText style={styles.text}>{money}</BText>
          </BInfoBox>
          <View style={{ flexDirection: "row", gap: 6 }}>
            <BInfoBox title="Ante" style={styles.infoBox}>
              <BText style={styles.text}>{ante}</BText>
            </BInfoBox>
            <BInfoBox title="Round" style={styles.infoBox}>
              <BText style={styles.text}>{round}</BText>
            </BInfoBox>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  infoBox: {
    flex: 1,
  },
  scoreboard: {
    backgroundColor: Colors.scoreboard,
    gap: 4,
    paddingBottom: 32,
    paddingHorizontal: 8,
  },
  text: {
    color: "white",
    textAlign: "center",
  },
});
