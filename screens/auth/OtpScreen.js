import React from "react";

import { View, Text, StyleSheet } from "react-native";

const OtpScreen = () => {
  return (
    <View style={st.container}>
      <Text>otp</Text>
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

export default OtpScreen;
