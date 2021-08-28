import React from "react";

import { View, Text, TextInput, StyleSheet } from "react-native";

import { COLORS, FONTS, SIZES } from "../../constants";

const FormInput = ({
  containerStyle,
  label,
  placeholder,
  inputStyle,
  prependComponent,
  appendComponent,
  onChange,
  secureTextEntry,
  keyboardType = "default",
  autoCompleteType = "off",
  autoCapitalize = "none",
  errMsg = "",
  value,
  onFocus,
}) => {
  return (
    <View style={{ ...containerStyle }}>
      {/* Label & Err msg */}
      <View style={st.textWrapper}>
        <Text style={st.label}>{label}</Text>
        <Text style={st.errMsg}>{errMsg}</Text>
      </View>

      {/* Text input */}
      <View style={st.inputContainer}>
        {prependComponent}

        <TextInput
          style={{ flex: 1, ...FONTS.body4, ...inputStyle }}
          placeholder={placeholder}
          placeholderTextColor={COLORS.gray}
          secureTextEntry={secureTextEntry}
          keyboardType={keyboardType}
          autoCompleteType={autoCompleteType}
          autoCapitalize={autoCapitalize}
          onChangeText={(val) => onChange(val)}
          value={value}
          onFocus={onFocus}
        />

        {appendComponent}
      </View>
    </View>
  );
};

const st = StyleSheet.create({
  textWrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  label: {
    color: COLORS.gray,
    ...FONTS.body4,
  },
  errMsg: {
    color: COLORS.red,
    ...FONTS.body4,
  },
  inputContainer: {
    flexDirection: "row",
    height: 55,
    marginTop: SIZES.base,
    paddingHorizontal: SIZES.padding,
    backgroundColor: COLORS.lightGray2,
    borderRadius: SIZES.radius,
  },
});

export default FormInput;
