import BText from "@/components/ui/BText";
import { Colors } from "@/constants/Colors";
import { StyleSheet, View, ViewProps } from "react-native";

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
  mainContainer: {
    backgroundColor: Colors.scoreboardAccent,
    borderRadius: 12,
    padding: 4,
  },
  scoreLayout: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 4,
  },
  scoreContainer: {
    flex: 1,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "red",
    padding: 6,
    gap: 4,
  },
  chipsContainer: {
    backgroundColor: Colors.blue,
    alignItems: "flex-end",
  },
  multContainer: {
    backgroundColor: Colors.red,
    alignItems: "flex-start",
  },
  text: {
    textAlign: "center",
  },
});
