import { decks } from "@/constants/Decks";
import { shuffleDeck } from "@/game/deck";
import { genSeed } from "@/game/random";
import { useRandom } from "@/hooks/useRandom";
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
  const deck = decks[parseInt(deckParam, 10)];
  const shuffledDeck = shuffleDeck(random, deck.cards);

  const { width, height } = Dimensions.get("window");

  return (
    <View style={{ width, height, marginLeft: -insets.left }}>
      <View style={styles.mainContainer}>
        <Text>GAME!</Text>
        <Text>{seedParam}</Text>
        <Text>{stakeParam}</Text>
        <Text>{deck.name}</Text>
        <Text>
          {deck.cards.map(({ rank: value, suit }) => `${value}${suit[0].toUpperCase()}`).join(" ")}
        </Text>
        <Text>
          {shuffledDeck
            .map(({ rank: value, suit }) => `${value}${suit[0].toUpperCase()}`)
            .join(" ")}
        </Text>
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
