import { useLocalSearchParams } from "expo-router";
import { Text, View } from "react-native";

export default function PlayScreen() {
  const { seed, stake, deck } = useLocalSearchParams<
    "/play",
    { seed?: string; stake?: string; deck?: string }
  >();

  return (
    <View>
      <Text>GAME!</Text>
      <Text>{seed}</Text>
      <Text>{stake}</Text>
      <Text>{deck}</Text>
    </View>
  );
}
