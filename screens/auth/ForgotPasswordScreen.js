import React from "react";

import { View, Text, StyleSheet } from "react-native";

const ForgotPasswordScreen = () => {
  return (
    <View style={st.container}>
      <Text>forgot password</Text>
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

export default ForgotPasswordScreen;
