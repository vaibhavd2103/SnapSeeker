import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import AppNavigator from "./AppNavigator/AppNavigator";
import AppLoading from "expo-app-loading";
import * as Font from "expo-font";

export default function App() {
  const [dataLoaded, setDataLoaded] = useState(false);

  const fetchFonts = () => {
    return Font.loadAsync({
      "DMSans-Bold": require("./assets/fonts/DMSans-Bold.ttf"),
      "DMSans-Regular": require("./assets/fonts/DMSans-Regular.ttf"),
      "DMSans-Medium": require("./assets/fonts/DMSans-Medium.ttf"),
      "Inter-Bold": require("./assets/fonts/Inter-Bold.ttf"),
      "Inter-Medium": require("./assets/fonts/Inter-Medium.ttf"),
      "IBM-Regular": require("./assets/fonts/Inter-Regular.ttf"),
      "Inter-Semi": require("./assets/fonts/Inter-SemiBold.ttf"),
    });
  };

  if (!dataLoaded) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => setDataLoaded(true)}
        onError={(err) => console.log(err)}
      />
    );
  }
  return (
    <>
      <View
        style={{
          height: 40,
          backgroundColor: "white",
        }}
      >
        <StatusBar style="dark" />
      </View>
      <AppNavigator />
    </>
  );
}
