import { useRandom } from "@/hooks/useRandom";
import { genSeed } from "@/utils/random";
import { useLocalSearchParams, useRouter } from "expo-router";
import { Button, Dimensions, StyleSheet, Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function PlayScreen() {
  const insets = useSafeAreaInsets();
  const {
    seed: seedParam = genSeed(),
    stake: stakeParam = "0",
    deck: deckParam = "0",
  } = useLocalSearchParams<"/play", { seed?: string; stake?: string; deck?: string }>();
  const router = useRouter();
  const random = useRandom(seedParam);

  const { width, height } = Dimensions.get("window");

  return (
    <View style={{ width, height, marginLeft: -insets.left }}>
      <View style={styles.mainContainer}>
        <Text style={{ fontFamily: "Balatro" }}>GAME!</Text>
        <Text>{seedParam}</Text>
        <Text>{stakeParam}</Text>
        <Text>{deckParam}</Text>
        <Text>{`Next number: ${random.next({ min: 0, max: 10 }).value}`}</Text>
        <Text>{`Next number: ${random.next({ min: 0, max: 10 }).value}`}</Text>
        <Text>{`Next number: ${random.next({ min: 0, max: 10 }).value}`}</Text>
        <Text>{`Next number: ${random.next({ min: 0, max: 10 }).value}`}</Text>
        <Button title="Back" onPress={() => router.back()} />
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
