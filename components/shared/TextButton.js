import React from "react";

import { TouchableOpacity, Text, StyleSheet } from "react-native";

import { COLORS, FONTS } from "../../constants";

const TextButton = ({ btnStyle, label, labelStyle, onPress }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.8}
      style={[st.btn, btnStyle]}
    >
      <Text style={[st.btnLabel, labelStyle]}>{label}</Text>
    </TouchableOpacity>
  );
};

const st = StyleSheet.create({
  btn: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: COLORS.primary,
  },
  btnLabel: {
    ...FONTS.h3,
    color: COLORS.white,
  },
});

export default TextButton;
