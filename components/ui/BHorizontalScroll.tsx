import BButton from "@/components/ui/BButton";
import { StyleProp, StyleSheet, View, ViewStyle } from "react-native";
import BCounter from "./BCounter";

type Props = {
  count: number;
  showCounter?: boolean;
  setIndex: (index: number) => void;
  index: number;
  children: React.ReactNode;
  style?: StyleProp<ViewStyle>;
};

export default function BHorizontalScroll({
  count,
  showCounter = false,
  setIndex,
  index,
  children,
  style,
}: Props) {
  const handleRight = () => setIndex(index === count - 1 ? 0 : index + 1);
  const handleLeft = () => setIndex(index === 0 ? count - 1 : index - 1);

  return (
    <View style={[styles.container, style]}>
      <BButton
        disabled={count === 0}
        textStyle={styles.chevron}
        style={styles.button}
        onPress={handleRight}
      >
        {"\u2039"}
      </BButton>
      <View style={styles.children}>
        {children}
        {showCounter && <BCounter count={count} index={index} />}
      </View>
      <BButton
        disabled={count === 0}
        textStyle={styles.chevron}
        style={styles.button}
        onPress={handleLeft}
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
  },
  children: {
    flex: 1,
  },
  chevron: {
    fontSize: 24,
  },
  button: {
    width: 40,
  },
});
