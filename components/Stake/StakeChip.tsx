import type { TStakeID } from "@/constants/Stakes";
import type { ViewProps } from "react-native";

import { StyleSheet, View } from "react-native";

interface Props extends ViewProps {
  stakeId: TStakeID;
  size?: number;
}

export default function StakeChip({ stakeId, size = 32, style, ...rest }: Props) {
  return <View style={[styles.chip, { backgroundColor: stakeId, width: size }, style]} {...rest} />;
}

const styles = StyleSheet.create({
  chip: {
    aspectRatio: 1,
    backgroundColor: "red",
    borderRadius: "100%",
  },
});
