import MainNav from "@/components/MainNav";
import OptionsModal from "@/components/OptionsModal";
import PlayModal from "@/components/PlayModal";
import ProfileNav from "@/components/ProfleNav";
import { TDeckID } from "@/constants/Decks";
import { TStakeID } from "@/constants/Stakes";
import { genSeed } from "@/game/random";
import { useRouter } from "expo-router";
import { useState } from "react";
import { Dimensions, StyleSheet, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function HomeScreen() {
  const router = useRouter();
  const insets = useSafeAreaInsets();
  const [modalVisible, setModalVisible] = useState(false);
  const [playVisible, setPlayVisible] = useState(false);
  const [optionsVisible, setOptionsVisible] = useState(false);

  const { width, height } = Dimensions.get("window");

  const handleShowCollectionModal = () => {
    console.log("Collections pressed");
  };

  const handleProfilePress = () => {
    console.log("Profile pressed");
  };

  const handlePlayPress = () => {
    setPlayVisible(true);
    setModalVisible(true);
  };

  const handleGameStart = (deckId: TDeckID, stakeId: TStakeID, seed?: number) => {
    const runSeed = seed || genSeed();
    router.push(`/play?seed=${runSeed}&stake=${stakeId}&deck=${deckId}`);
  };

  const handlePlayExit = () => {
    setPlayVisible(false);
    setModalVisible(false);
  };

  const handleOptionsPress = () => {
    setOptionsVisible(true);
    setModalVisible(true);
  };

  const handleOptionsExit = () => {
    setOptionsVisible(false);
    setModalVisible(false);
  };

  return (
    <View style={{ height, marginLeft: -insets.left, width }}>
      <View style={styles.mainContainer}>
        <View style={styles.bottomNav}>
          <ProfileNav onPress={handleProfilePress} />
          <MainNav
            onPlayPress={handlePlayPress}
            onOptionsPress={handleOptionsPress}
            onCollectionPress={handleShowCollectionModal}
            collectionVisible={modalVisible}
          />
          <ProfileNav onPress={handleProfilePress} />
        </View>
        {playVisible && (
          <PlayModal
            canContinue={true}
            onBackPress={handlePlayExit}
            onPlayPress={handleGameStart}
          />
        )}
        {optionsVisible && (
          <OptionsModal
            onSettingsPress={handleOptionsPress}
            onStatsPress={handleOptionsPress}
            onCustomizeDeckPress={handleOptionsPress}
            onCreditsPress={handleOptionsPress}
            onBackPress={handleOptionsExit}
          />
        )}
        {modalVisible && <View style={styles.modalBackdrop} />}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  bottomNav: {
    bottom: 30,
    flexDirection: "row",
    justifyContent: "space-between",
    left: 90,
    position: "absolute",
    right: 90,
  },
  mainContainer: {
    backgroundColor: "rgb(255, 99, 71)",
    flex: 1,
  },
  modalBackdrop: {
    backgroundColor: "rgba(100, 100, 100, 0.5)",
    flex: 1,
  },
});
