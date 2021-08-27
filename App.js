import React from "react";

import { StyleSheet, Text, View } from "react-native";

import { StatusBar } from "expo-status-bar";
import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";

const App = () => {
  const [isReady] = useFonts({
    "Prompt-Black": require("./assets/fonts/Prompt-Black.ttf"),
    "Prompt-Bold": require("./assets/fonts/Prompt-Bold.ttf"),
    "Prompt-Regular": require("./assets/fonts/Prompt-Regular.ttf"),
    "Prompt-SemiBold": require("./assets/fonts/Prompt-SemiBold.ttf"),
  });

  if (!isReady) {
    return <AppLoading />;
  }

  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default App;
