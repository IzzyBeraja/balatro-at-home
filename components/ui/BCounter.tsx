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
    alignItems: "center",
    flexDirection: "row",
    gap: 2,
    justifyContent: "center",
  },
  dot: {
    backgroundColor: "black",
    borderRadius: 4,
    height: 4,
    width: 4,
  },
  selected: {
    backgroundColor: "white",
    borderRadius: 4,
    height: 5,
    width: 5,
  },
});
