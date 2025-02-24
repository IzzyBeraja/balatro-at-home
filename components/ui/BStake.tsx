import type { ImageProps } from "react-native";

import { stakes, type TStakeID } from "@/constants/Stakes";

import { Image, StyleSheet } from "react-native";

interface Props extends ImageProps {
  stakeId: TStakeID;
}

export default function BStake({ stakeId, style, ...rest }: Props) {
  return <Image source={stakes[stakeId].image} style={[styles.stake, style]} {...rest} />;
}

const styles = StyleSheet.create({
  stake: {
    aspectRatio: 1,
    width: 28,
  },
});
