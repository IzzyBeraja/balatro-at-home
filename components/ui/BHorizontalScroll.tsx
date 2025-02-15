import BButton from "@/components/ui/BButton";
import BCounter from "@/components/ui/BCounter";
import { StyleProp, StyleSheet, View, ViewProps, ViewStyle } from "react-native";

interface Props extends ViewProps {
  count: number;
  showCounter?: boolean;
  setIndex: (index: number) => void;
  index: number;
  children: React.ReactNode;
}

export default function BHorizontalScroll({
  count,
  showCounter = false,
  setIndex,
  index,
  children,
  style,
}: Props) {
  const handleRight = () => setIndex(index >= count - 1 ? 0 : index + 1);
  const handleLeft = () => setIndex(index <= 0 ? count - 1 : index - 1);

  return (
    <View style={[styles.container, style]}>
      <BButton
        disabled={count <= 1}
        textStyle={styles.chevron}
        style={styles.button}
        onPress={handleLeft}
      >
        {"\u2039"}
      </BButton>
      <View style={styles.childrenWithCounter}>
        <View style={styles.children}>{children}</View>
        {showCounter && <BCounter count={count} index={index} />}
      </View>
      <BButton
        disabled={count <= 1}
        textStyle={styles.chevron}
        style={styles.button}
        onPress={handleRight}
      >
        {"\u203A"}
      </BButton>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    paddingHorizontal: 16,
    columnGap: 4,
  },
  children: {
    width: "100%",
    justifyContent: "center",
    flexDirection: "row",
  },
  childrenWithCounter: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    rowGap: 3,
  },
  chevron: {
    fontSize: 20,
    fontWeight: "bold",
  },
  button: {
    paddingTop: 2, // to center the chevron
    width: 40,
  },
});
