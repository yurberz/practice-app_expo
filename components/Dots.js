import React from "react";

import { View, Animated, StyleSheet } from "react-native";

import { constants, SIZES, COLORS } from "../constants";

const Dots = ({ scrollX }) => {
  const dotPosition = Animated.divide(scrollX, SIZES.width);

  return (
    <View style={st.dots}>
      {constants.onboardingPages.map((itm, idx) => {
        const dotColor = dotPosition.interpolate({
          inputRange: [idx - 1, idx, idx + 1],
          outputRange: [
            COLORS.lightOrange2,
            COLORS.primary,
            COLORS.lightOrange2,
          ],
          extrapolate: "clamp",
        });
        const dotWidth = dotPosition.interpolate({
          inputRange: [idx - 1, idx, idx + 1],
          outputRange: [10, 30, 10],
          extrapolate: "clamp",
        });

        return (
          <Animated.View
            key={`dot-${idx}`}
            style={{ ...st.dot, width: dotWidth, backgroundColor: dotColor }}
          />
        );
      })}
    </View>
  );
};

const st = StyleSheet.create({
  dots: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  dot: {
    marginHorizontal: 6,
    height: 10,
    borderRadius: 6,
  },
});

export default Dots;
