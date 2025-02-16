import { StyleSheet, Text, View } from "react-native";

interface Props {
  roundScore: number;
  stake: number;
}

export default function RoundScore({ roundScore, stake }: Props) {
  return (
    <View>
      <View>
        <Text>Round</Text>
        <Text>score</Text>
      </View>
      <View>
        <Text>{roundScore}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});
