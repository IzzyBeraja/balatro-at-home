import { TStakeID } from "@/constants/Stakes";
import { StyleSheet, View, ViewProps } from "react-native";

interface Props extends ViewProps {
  stake: TStakeID;
}

export default function BStake({ stake, style, ...rest }: Props) {
  return <View style={[styles.stake, style]} {...rest} />;
}

const styles = StyleSheet.create({
  stake: {
    width: 28,
    height: 28,
    backgroundColor: "red",
    borderRadius: "100%",
  },
});
