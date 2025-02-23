// app/_layout.tsx
import { Slot } from "expo-router";
import React from "react";
import { Dimensions } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";

export default function RootLayout() {
  const { width, height } = Dimensions.get("window");

  return (
    <GestureHandlerRootView style={[{ height, width }]}>
      <Slot />
    </GestureHandlerRootView>
  );
}
