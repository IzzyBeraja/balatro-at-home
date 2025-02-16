import StakeDescription from "@/components/Stake/StakeDescription";
import { Colors } from "@/constants/Colors";
import { Stake } from "@/constants/Stakes";
import { StyleProp, StyleSheet, Text, View, ViewStyle } from "react-native";

type Props = {
  stake: Stake;
  style?: StyleProp<ViewStyle>;
};

export default function StakeDisplay({ stake, style }: Props) {
  const { name, description, image, color } = stake;
  return (
    <View style={[styles.container, style]}>
      <View style={styles.stakeTextContainer}>
        <Text style={styles.stakeText}>Stake</Text>
      </View>
      <View style={[styles.stake, { backgroundColor: color }]} />
      <StakeDescription name={name} description={description} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    columnGap: 6,
    backgroundColor: Colors.defaultShadowColor,
    padding: 6,
    borderRadius: 6,
  },
  stake: {
    width: 28,
    height: 28,
    backgroundColor: "red",
    borderRadius: "100%",
  },
  stakeTextContainer: {
    marginLeft: -16, // Rotation does not affect layout
    marginRight: -14, // Rotation does not affect layout
    transform: [{ rotateZ: "270deg" }], // Must rotate container, not text
  },
  stakeText: {
    color: Colors.mainMenuBackground,
    fontSize: 12,
    fontWeight: "bold",
  },
});
