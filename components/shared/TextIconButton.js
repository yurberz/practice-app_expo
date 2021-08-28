import React from "react";

import { Text, TouchableOpacity, StyleSheet } from "react-native";

import { Ionicons } from "@expo/vector-icons";

import { FONTS, SIZES } from "../../constants";

const TextIconButton = ({
  btnStyle,
  label,
  labelStyle,
  icon,
  iconPosition,
  iconColor,
  onPress,
}) => {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      style={[st.btn, btnStyle]}
      onPress={onPress}
    >
      {iconPosition === "LEFT" && (
        <Ionicons name={icon} size={25} color={iconColor} />
      )}

      <Text style={{ ...FONTS.body3, ...labelStyle }}>{label}</Text>

      {iconPosition === "RIGHT" && (
        <Ionicons name={icon} size={25} color={iconColor} />
      )}
    </TouchableOpacity>
  );
};

const st = StyleSheet.create({
  btn: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    height: 50,
    borderRadius: SIZES.radius,
  },
});

export default TextIconButton;
