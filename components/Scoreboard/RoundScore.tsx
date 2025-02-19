import type { TStakeID } from "@/constants/Stakes";
import type { ViewProps } from "react-native";

import StakeChip from "@/components/Stake/StakeChip";
import BText from "@/components/ui/BText";
import { Colors } from "@/constants/Colors";

import { StyleSheet, View } from "react-native";

interface Props extends ViewProps {
  roundScore: number;
  stakeId: TStakeID;
}

export default function RoundScore({ roundScore, stakeId, style, ...rest }: Props) {
  return (
    <View style={[styles.mainContainer, style]} {...rest}>
      <View style={{ marginHorizontal: 8 }}>
        <BText bold style={{ lineHeight: 14 }} textAlign="center">
          {"Round"}
        </BText>
        <BText bold style={{ fontSize: 14, lineHeight: 12 }} textAlign="center">
          {"score"}
        </BText>
      </View>
      <View style={styles.scoreContainer}>
        <StakeChip size={16} stakeId={stakeId} />
        <BText bold size="xlarge" textAlign="center">
          {roundScore}
        </BText>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    alignItems: "center",
    backgroundColor: Colors.scoreboardAccent,
    borderRadius: 8,
    flexDirection: "row",
    justifyContent: "center",
    padding: 4,
  },
  scoreContainer: {
    alignItems: "center",
    backgroundColor: Colors.scoreboard,
    borderRadius: 8,
    flex: 1,
    flexDirection: "row",
    gap: 4,
    height: "100%",
    justifyContent: "center",
  },
});
