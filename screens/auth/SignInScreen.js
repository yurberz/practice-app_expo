import React from "react";

import { View, Text, StyleSheet } from "react-native";

const SignInScreen = () => {
  return (
    <View style={st.container}>
      <Text>sign in</Text>
    </View>
  );
};

const st = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default SignInScreen;
