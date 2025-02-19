import type { ViewProps } from "react-native";

import BText from "@/components/ui/BText";
import { Colors } from "@/constants/Colors";

import { StyleSheet, View } from "react-native";

interface Props extends ViewProps {
  handType: string;
  chips: number;
  mult: number;
}

export default function HandScore({ chips, mult, handType, style, ...rest }: Props) {
  return (
    <View style={[styles.mainContainer, style]} {...rest}>
      <BText bold size="large" textAlign="center">
        {handType}
      </BText>
      <View style={styles.scoreLayout}>
        <View style={[styles.scoreContainer, styles.chipsContainer]}>
          <BText bold size="xlarge" textAlign="center">
            {chips}
          </BText>
        </View>
        <BText bold color={Colors.red} size="xlarge">
          {"X"}
        </BText>
        <View style={[styles.scoreContainer, styles.multContainer]}>
          <BText bold size="xlarge" textAlign="center">
            {mult}
          </BText>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  chipsContainer: {
    alignItems: "flex-end",
    backgroundColor: Colors.blue,
  },
  mainContainer: {
    backgroundColor: Colors.scoreboardAccent,
    borderRadius: 8,
    gap: 4,
    padding: 6,
  },
  multContainer: {
    alignItems: "flex-start",
    backgroundColor: Colors.red,
  },
  scoreContainer: {
    alignItems: "center",
    backgroundColor: "red",
    borderRadius: 6,
    flex: 1,
    gap: 4,
    justifyContent: "center",
    paddingHorizontal: 4,
  },
  scoreLayout: {
    alignItems: "center",
    flexDirection: "row",
    gap: 4,
    justifyContent: "center",
  },
});
