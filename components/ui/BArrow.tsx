import { Colors } from "@/constants/Colors";
import { StyleSheet, View } from "react-native";

type Props = {
  visible: boolean;
};

export default function BArrow({ visible }: Props) {
  return (
    <View style={[styles.arrow, visible && { borderTopColor: Colors.defaultButtonBackground }]} />
  );
}

const styles = StyleSheet.create({
  arrow: {
    borderStartWidth: 6,
    borderStartColor: "transparent",
    borderTopWidth: 10,
    borderTopColor: "transparent",
    borderEndWidth: 6,
    borderEndColor: "transparent",
  },
});
