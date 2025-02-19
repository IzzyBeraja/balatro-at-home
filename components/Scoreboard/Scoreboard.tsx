import type { TStakeID } from "@/constants/Stakes";
import type { ViewProps } from "react-native";

import HandScore from "@/components/Scoreboard/HandScore";
import RoundScore from "@/components/Scoreboard/RoundScore";
import BButton from "@/components/ui/BButton";
import BInfoBox from "@/components/ui/BInfoBox";
import BText from "@/components/ui/BText";
import { Colors } from "@/constants/Colors";

import { StyleSheet, View } from "react-native";

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
      <HandScore chips={chips} handType={handType} mult={mult} />
      <View style={{ flexDirection: "row", gap: 4 }}>
        <View style={{ flex: 1, gap: 8 }}>
          <BButton style={{ flex: 1 }} onPress={() => {}}>
            {"Run\nInfo"}
          </BButton>
          <BButton color={Colors.yellow} style={{ flex: 1 }} onPress={() => {}}>
            Options
          </BButton>
        </View>
        <View style={{ flex: 2, gap: 6 }}>
          <View style={{ flexDirection: "row", gap: 6 }}>
            <BInfoBox style={styles.infoBox} title="Hands">
              <BText bold color={Colors.blue} size="xlarge">
                {hands}
              </BText>
            </BInfoBox>
            <BInfoBox style={styles.infoBox} title="Discards">
              <BText bold color={Colors.red} size="xlarge">
                {discards}
              </BText>
            </BInfoBox>
          </View>
          <BInfoBox>
            <BText bold color={Colors.yellow} size="xlarge">
              {`$${money}`}
            </BText>
          </BInfoBox>
          <View style={{ flexDirection: "row", gap: 6 }}>
            <BInfoBox style={styles.infoBox} title="Ante">
              <View style={{ alignItems: "center", flexDirection: "row" }}>
                <BText bold color={Colors.yellow} size="xlarge" textAlign="center">
                  {ante}
                </BText>
                <BText size="xsmall">{" / 8"}</BText>
              </View>
            </BInfoBox>
            <BInfoBox style={styles.infoBox} title="Round">
              <BText bold color={Colors.yellow} size="xlarge">
                {round}
              </BText>
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
    borderColor: Colors.defaultShadowColor,
    borderWidth: 2,
    gap: 4,
    paddingBottom: 24,
    paddingHorizontal: 4,
  },
  text: {
    color: "white",
    textAlign: "center",
  },
});
