import MainNav from "@/components/MainNav";
import ProfileEntrypoint from "@/components/ProfleEntrypoint";
import { StyleSheet, View } from "react-native";

export default function HomeScreen() {
  const handleProfilePress = () => {
    console.log("Profile pressed");
  };

  const handlePlayPress = () => {
    console.log("Play pressed");
  };

  const handleOptionsPress = () => {
    console.log("Options pressed");
  };

  const handleCollectionPress = () => {
    console.log("Collection pressed");
  };

  return (
    <View style={styles.mainContainer}>
      <View style={styles.bottomNav}>
        <ProfileEntrypoint onPress={handleProfilePress} />
        <MainNav
          onPlayPress={handlePlayPress}
          onOptionsPress={handleOptionsPress}
          onCollectionPress={handleCollectionPress}
        />
        <ProfileEntrypoint onPress={handleProfilePress} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    position: "relative",
    backgroundColor: "black",
    height: "100%",
    width: "100%",
  },
  bottomNav: {
    position: "absolute",
    flexDirection: "row",
    justifyContent: "space-between",
    bottom: 30,
    left: 60,
    right: 60,
  },
});
