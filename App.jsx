import "react-native-gesture-handler";
import { enableScreens } from "react-native-screens";
enableScreens();
import React from "react";
import { StatusBar } from "expo-status-bar";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import AppNavigator from "./src/navigation/AppNavigator";

export default function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <StatusBar style="light" backgroundColor="#0D0D14" />
      <AppNavigator />
    </GestureHandlerRootView>
  );
}
