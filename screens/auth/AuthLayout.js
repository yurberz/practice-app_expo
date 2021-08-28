import React from "react";

import { View, Text, Image, StyleSheet } from "react-native";

import { images, COLORS, FONTS, SIZES } from "../../constants";

const AuthLayout = ({ title, subTitle, titleContainerStyle, children }) => {
  return (
    <View style={st.container}>
      <View style={st.contentContainerStyle}>
        {/* App logo */}
        <View style={{ alignItems: "center" }}>
          <Image source={images.logo_02} resizeMode="contain" style={st.logo} />
        </View>

        {/* Title & SubTitle */}
        <View style={titleContainerStyle}>
          <Text style={st.title}>{title}</Text>
          <Text style={st.subTitle}>{subTitle}</Text>
        </View>

        {/* Content / children */}
        {children}
      </View>
    </View>
  );
};

const st = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: SIZES.padding,
    backgroundColor: COLORS.white,
  },
  contentContainerStyle: {
    flex: 1,
    paddingHorizontal: SIZES.padding,
  },
  logo: {
    width: 200,
    height: 120,
  },
  title: {
    textAlign: "center",
    textTransform: "uppercase",
    ...FONTS.h2,
  },
  subTitle: {
    textAlign: "center",
    color: COLORS.darkGray,
    marginTop: SIZES.base,
    ...FONTS.body3,
  },
});

export default AuthLayout;
