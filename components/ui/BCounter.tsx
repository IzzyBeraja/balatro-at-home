import { StyleSheet, View, ViewProps } from "react-native";

interface Props extends ViewProps {
  count: number;
  index: number;
}

export default function BCounter({ count, index, style, ...rest }: Props) {
  return (
    <View style={[styles.container, style]} {...rest}>
      {Array.from({ length: count }).map((_, i) => (
        <View key={i} style={i === index ? styles.selected : styles.dot} />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 2,
  },
  dot: {
    width: 4,
    height: 4,
    borderRadius: 4,
    backgroundColor: "black",
  },
  selected: {
    width: 5,
    height: 5,
    borderRadius: 4,
    backgroundColor: "white",
  },
});
