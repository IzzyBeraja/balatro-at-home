import { TStakeID } from "@/constants/Stakes";
import { StyleSheet, View, ViewProps } from "react-native";

interface Props extends ViewProps {
  stake: TStakeID;
  size?: number;
}

export default function StakeChip({ stake, size = 32, style, ...rest }: Props) {
  return <View style={[styles.chip, { width: size }, style]} {...rest} />;
}

const styles = StyleSheet.create({
  chip: {
    backgroundColor: "red",
    borderRadius: "100%",
    aspectRatio: 1,
  },
});
