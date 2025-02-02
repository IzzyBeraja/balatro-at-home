import { useLocalSearchParams } from "expo-router";
import { Dimensions, StyleSheet, Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function PlayScreen() {
  const insets = useSafeAreaInsets();
  const { seed, stake, deck } = useLocalSearchParams<
    "/play",
    { seed?: string; stake?: string; deck?: string }
  >();

  const { width, height } = Dimensions.get("window");

  return (
    <View style={{ width, height, marginLeft: -insets.left }}>
      <View style={styles.mainContainer}>
        <Text style={{ fontFamily: "Balatro" }}>GAME!</Text>
        <Text>{seed}</Text>
        <Text>{stake}</Text>
        <Text>{deck}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: "rgb(255, 99, 71)",
    justifyContent: "center",
    alignItems: "center",
  },
});
