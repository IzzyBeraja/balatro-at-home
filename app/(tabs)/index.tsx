import MainNav from "@/components/MainNav";
import OptionsModal from "@/components/OptionsModal";
import PlayModal from "@/components/PlayModal";
import ProfileNav from "@/components/ProfleNav";
import { decks } from "@/constants/Decks";
import { stakes } from "@/constants/Stakes";
import { useState } from "react";
import { StyleSheet, View } from "react-native";

export default function HomeScreen() {
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

  const handleGameStart = () => {
    console.log("Starting Game!");
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
          decks={decks}
          stakes={stakes}
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
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    position: "relative",
    backgroundColor: "rgba(255, 99, 71, 0.5)",
    height: "100%",
    width: "100%",
  },
  bottomNav: {
    position: "absolute",
    flexDirection: "row",
    justifyContent: "space-between",
    bottom: 30,
    left: 90,
    right: 90,
  },
  modalBackdrop: {
    backgroundColor: "rgba(100, 100, 100, 0.5)",
    flex: 1,
  },
});
