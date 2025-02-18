import BText from "@/components/ui/BText";
import { Colors } from "@/constants/Colors";
import { StyleSheet, View, ViewProps } from "react-native";

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
  mainContainer: {
    backgroundColor: Colors.scoreboardAccent,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    padding: 4,
  },
  title: {
    color: "white",
  },
  contentContainer: {
    backgroundColor: Colors.scoreboard,
    borderRadius: 4,
    padding: 4,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
});
