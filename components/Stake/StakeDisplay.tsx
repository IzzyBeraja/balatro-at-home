import type { TStakeID } from "@/constants/Stakes";
import type { ViewProps } from "react-native";

import StakeDescription from "@/components/Stake/StakeDescription";
import BStake from "@/components/ui/BStake";
import BText from "@/components/ui/BText";
import { Colors } from "@/constants/Colors";
import { stakes } from "@/constants/Stakes";

import { StyleSheet, View } from "react-native";

interface Props extends ViewProps {
  stakeID: TStakeID;
}

export default function StakeDisplay({ stakeID, style, ...rest }: Props) {
  const { id, name, description, color } = stakes[stakeID];
  return (
    <View style={[styles.container, style]} {...rest}>
      <View style={styles.stakeTextContainer}>
        <BText style={styles.stakeText}>Stake</BText>
      </View>
      <BStake stakeId={id} />
      <StakeDescription description={description} name={name} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: Colors.defaultShadowColor,
    borderRadius: 6,
    columnGap: 6,
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    padding: 6,
  },

  stakeText: {
    color: Colors.mainMenuBackground,
    fontSize: 12,
    fontWeight: "bold",
  },
  stakeTextContainer: {
    marginLeft: -16, // Rotation does not affect layout
    marginRight: -10, // Rotation does not affect layout
    transform: [{ rotateZ: "270deg" }], // Must rotate container, not text
  },
});
