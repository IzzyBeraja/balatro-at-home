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
      <BText style={styles.text}>{handType}</BText>
      <View style={styles.scoreLayout}>
        <View style={[styles.scoreContainer, styles.chipsContainer]}>
          <BText style={styles.text}>{chips}</BText>
        </View>
        <BText size="large" bold color={Colors.red}>
          {"X"}
        </BText>
        <View style={[styles.scoreContainer, styles.multContainer]}>
          <BText style={styles.text}>{mult}</BText>
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
    borderRadius: 12,
    padding: 4,
  },
  multContainer: {
    alignItems: "flex-start",
    backgroundColor: Colors.red,
  },
  scoreContainer: {
    alignItems: "center",
    backgroundColor: "red",
    borderRadius: 10,
    flex: 1,
    gap: 4,
    justifyContent: "center",
    padding: 6,
  },
  scoreLayout: {
    alignItems: "center",
    flexDirection: "row",
    gap: 4,
    justifyContent: "center",
  },
  text: {
    textAlign: "center",
  },
});
