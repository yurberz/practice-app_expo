import React from "react";

import { View, Text, TouchableWithoutFeedback, StyleSheet } from "react-native";

import { COLORS, FONTS, SIZES } from "../constants";

const CustomSwitch = ({ value, onChange }) => {
  return (
    <TouchableWithoutFeedback onPress={() => onChange(!value)}>
      <View style={{ flexDirection: "row" }}>
        {/* Switch */}
        <View
          style={
            value
              ? [st.switchContainer, st.switchOn]
              : [st.switchContainer, st.switchOff]
          }
        >
          <View
            style={{
              ...st.dot,
              backgroundColor: value ? COLORS.white : COLORS.gray,
            }}
          />
        </View>

        {/* Text */}
        <Text
          style={{ ...st.text, color: value ? COLORS.primary : COLORS.gray }}
        >
          save me
        </Text>
      </View>
    </TouchableWithoutFeedback>
  );
};

const st = StyleSheet.create({
  switchContainer: {
    justifyContent: "center",
    width: 40,
    height: 20,
    borderRadius: 10,
  },
  switchOn: {
    alignItems: "flex-end",
    paddingRight: 2,
    backgroundColor: COLORS.primary,
  },
  switchOff: {
    paddingLeft: 2,
    borderWidth: 1,
    borderColor: COLORS.gray,
  },
  dot: {
    width: 12,
    height: 12,
    borderRadius: 6,
  },
  text: {
    marginLeft: SIZES.base,
    ...FONTS.body4,
  },
});

export default CustomSwitch;
