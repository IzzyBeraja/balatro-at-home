import StakeChip from "@/components/Stake/StakeChip";
import StakeDescription from "@/components/Stake/StakeDescription";
import { Colors } from "@/constants/Colors";
import { TStakeID, stakes } from "@/constants/Stakes";
import { StyleProp, StyleSheet, Text, View, ViewProps, ViewStyle } from "react-native";

interface Props extends ViewProps {
  stakeID: TStakeID;
}

export default function StakeDisplay({ stakeID, style, ...rest }: Props) {
  const { id, name, description, image, color } = stakes[stakeID];
  return (
    <View style={[styles.container, style]} {...rest}>
      <View style={styles.stakeTextContainer}>
        <Text style={styles.stakeText}>Stake</Text>
      </View>
      <StakeChip stakeId={id} style={{ backgroundColor: color }} />
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
