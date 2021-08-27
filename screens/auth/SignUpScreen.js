import React from "react";

import { View, Text, StyleSheet } from "react-native";

const SignUpScreen = () => {
  return (
    <View style={st.container}>
      <Text>sign up</Text>
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

export default SignUpScreen;
