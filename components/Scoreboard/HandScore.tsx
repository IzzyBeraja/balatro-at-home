import { Colors } from "@/constants/Colors";
import { StyleSheet, Text, View, ViewProps } from "react-native";

interface Props extends ViewProps {
  handType: string;
  chips: number;
  mult: number;
}

export default function HandScore({ chips, mult, handType, style, ...rest }: Props) {
  return (
    <View style={[styles.mainContainer, style]} {...rest}>
      <Text style={styles.text}>{handType}</Text>
      <View style={styles.scoreLayout}>
        <View style={[styles.scoreContainer, styles.chipsContainer]}>
          <Text style={styles.text}>{chips}</Text>
        </View>
        <Text style={{ color: "red", fontSize: 24, fontWeight: "bold" }}>{"X"}</Text>
        <View style={[styles.scoreContainer, styles.multContainer]}>
          <Text style={styles.text}>{mult}</Text>
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
    color: "white",
  },
});
