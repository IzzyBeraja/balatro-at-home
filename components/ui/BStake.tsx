import type { TStakeID } from "@/constants/Stakes";
import type { ViewProps } from "react-native";

import { StyleSheet, View } from "react-native";

interface Props extends ViewProps {
  stakeId: TStakeID;
}

export default function BStake({ stakeId, style, ...rest }: Props) {
  return <View style={[styles.stake, style]} {...rest} />;
}

const styles = StyleSheet.create({
  stake: {
    backgroundColor: "red",
    borderRadius: "100%",
    height: 28,
    width: 28,
  },
});
