import type { ViewProps } from "react-native";

import BText from "@/components/ui/BText";
import { Colors } from "@/constants/Colors";

import { StyleSheet, View } from "react-native";

interface Props extends ViewProps {
  title?: string;
  children: React.ReactNode;
}

export default function BInfoBox({ title, children, style, ...rest }: Props) {
  return (
    <View style={[styles.mainContainer, style]} {...rest}>
      {title != null && <BText style={styles.title}>{title}</BText>}
      <View style={styles.contentContainer}>{children}</View>
    </View>
  );
}

const styles = StyleSheet.create({
  contentContainer: {
    alignItems: "center",
    backgroundColor: Colors.scoreboard,
    borderRadius: 4,
    justifyContent: "center",
    padding: 4,
    width: "100%",
  },
  mainContainer: {
    alignItems: "center",
    backgroundColor: Colors.scoreboardAccent,
    borderRadius: 10,
    justifyContent: "center",
    padding: 4,
  },
  title: {
    color: "white",
  },
});
