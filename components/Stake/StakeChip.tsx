import { TStakeID } from "@/constants/Stakes";
import { StyleSheet, View, ViewProps } from "react-native";

interface Props extends ViewProps {
  stakeId: TStakeID;
  size?: number;
}

export default function StakeChip({ stakeId, size = 32, style, ...rest }: Props) {
  return <View style={[styles.chip, { width: size, backgroundColor: stakeId }, style]} {...rest} />;
}

const styles = StyleSheet.create({
  chip: {
    backgroundColor: "red",
    borderRadius: "100%",
    aspectRatio: 1,
  },
});
