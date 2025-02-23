import type { TDeckID } from "@/constants/Decks";
import type { TStakeID } from "@/constants/Stakes";

import MainNav from "@/components/MainNav";
import OptionsModal from "@/components/OptionsModal";
import PlayModal from "@/components/PlayModal";
import ProfileNav from "@/components/ProfleNav";
import { genSeed } from "@/game/random";

import { useRouter } from "expo-router";
import { useState } from "react";
import { StyleSheet, View } from "react-native";

export default function HomeScreen() {
  const router = useRouter();
  const [modalVisible, setModalVisible] = useState(false);
  const [playVisible, setPlayVisible] = useState(false);
  const [optionsVisible, setOptionsVisible] = useState(false);

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
    <View style={{ flex: 1 }}>
      <View style={styles.mainContainer}>
        <View style={styles.bottomNav}>
          <ProfileNav onPress={handleProfilePress} />
          <MainNav
            collectionVisible={modalVisible}
            onCollectionPress={handleShowCollectionModal}
            onOptionsPress={handleOptionsPress}
            onPlayPress={handlePlayPress}
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
            onBackPress={handleOptionsExit}
            onCreditsPress={handleOptionsPress}
            onCustomizeDeckPress={handleOptionsPress}
            onSettingsPress={handleOptionsPress}
            onStatsPress={handleOptionsPress}
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
