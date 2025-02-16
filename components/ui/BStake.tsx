import { StakeID } from "@/constants/Stakes";
import { StyleSheet, View } from "react-native";

interface Props {
  stake: StakeID;
}

export default function BStake({ stake }: Props) {
  return <View style={styles.stake} />;
}

const styles = StyleSheet.create({
  stake: {
    width: 28,
    height: 28,
    backgroundColor: "red",
    borderRadius: "100%",
  },
});
