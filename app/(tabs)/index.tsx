import MainNav from "@/components/MainNav";
import OptionsModal from "@/components/OptionsModal";
import ProfileEntrypoint from "@/components/ProfleEntrypoint";
import { useState } from "react";
import { StyleSheet, View } from "react-native";

export default function HomeScreen() {
  const [modalVisible, setModalVisible] = useState(false);
  const [optionsVisible, setOptionsVisible] = useState(false);

  const handleShowCollectionModal = () => {
    console.log("Collections pressed");
  };

  const handleProfilePress = () => {
    console.log("Profile pressed");
  };

  const handlePlayPress = () => {
    console.log("Play pressed");
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
        <ProfileEntrypoint onPress={handleProfilePress} />
        <MainNav
          onPlayPress={handlePlayPress}
          onOptionsPress={handleOptionsPress}
          onCollectionPress={handleShowCollectionModal}
          collectionVisible={modalVisible}
        />
        <ProfileEntrypoint onPress={handleProfilePress} />
      </View>
      <OptionsModal
        onSettingsPress={handleOptionsPress}
        onStatsPress={handleOptionsPress}
        onCustomizeDeckPress={handleOptionsPress}
        onCreditsPress={handleOptionsPress}
        onBackPress={handleOptionsExit}
        visible={optionsVisible}
      />
      {modalVisible && <View style={styles.modalBackdrop} />}
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
  modalBackdrop: {
    backgroundColor: "rgba(100, 100, 100, 0.5)",
    flex: 1,
  },
});
