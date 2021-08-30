import React, { useState, useRef } from "react";

import {
  View,
  Text,
  ImageBackground,
  Image,
  Animated,
  StyleSheet,
  Platform,
} from "react-native";

import { constants, images, COLORS, FONTS, SIZES } from "../../constants";

import { Dots, TextButton } from "../../components";

const OnBoardingScreen = ({ navigation }) => {
  const [currentIdx, setCurrentIdx] = useState(0);

  const scrollX = useRef(new Animated.Value(0)).current;
  const flatListRef = useRef();

  const onViewChangeRef = useRef(({ viewableItems, changed }) => {
    setCurrentIdx(viewableItems[0].index);
  });

  const slideFlatList = () => {
    flatListRef?.current?.scrollToIndex({
      index: currentIdx + 1,
      animated: true,
    });
  };

  const renderHeaderLogo = () => {
    return (
      <View style={st.logoWrapper}>
        <Image source={images.logo_02} resizeMode="contain" style={st.logo} />
      </View>
    );
  };

  const renderFooter = () => {
    return (
      <View style={{ height: 150 }}>
        {/* Pagination / Dots */}
        <View style={st.dotsWrapper}>
          <Dots scrollX={scrollX} />
        </View>

        {/* Buttons */}
        {currentIdx < constants.onboardingPages.length - 1 && (
          <View style={st.btnWrapper}>
            <TextButton
              btnStyle={{ backgroundColor: null }}
              label="skip"
              labelStyle={{ color: COLORS.darkGray2 }}
              onPress={() => navigation.replace("SignIn")}
            />
            <TextButton
              btnStyle={{ width: 200, height: 60, borderRadius: SIZES.radius }}
              label="next"
              onPress={slideFlatList}
            />
          </View>
        )}

        {currentIdx === constants.onboardingPages.length - 1 && (
          <View
            style={{
              marginVertical: SIZES.padding,
              paddingHorizontal: SIZES.padding,
            }}
          >
            <TextButton
              btnStyle={{ height: 60, borderRadius: SIZES.radius }}
              label="let's get started"
              onPress={() => navigation.navigate("SignIn")}
            />
          </View>
        )}
      </View>
    );
  };

  return (
    <View style={st.container}>
      {renderHeaderLogo()}

      <Animated.FlatList
        ref={flatListRef}
        horizontal
        pagingEnabled
        scrollEventThrottle={16}
        snapToAlignment="center"
        showsHorizontalScrollIndicator={false}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { x: scrollX } } }],
          { useNativeDriver: false }
        )}
        onViewableItemsChanged={onViewChangeRef.current}
        data={constants.onboardingPages}
        renderItem={({ item, index }) => (
          <View style={st.contentContainer}>
            {/* Header */}
            <View
              style={{
                flex: 3,
              }}
            >
              <ImageBackground
                source={item.backgroundImage}
                style={{
                  ...st.header,
                  ...Platform.select({
                    android: {
                      height: index === 1 ? "86%" : "100%",
                    },
                    ios: {
                      height: index === 1 ? "93%" : "100%",
                    },
                  }),
                }}
              >
                <Image
                  source={item.bannerImage}
                  resizeMode="contain"
                  style={st.img}
                />
              </ImageBackground>
            </View>

            {/* Detail */}
            <View style={st.detail}>
              <Text style={st.title}>{item.title}</Text>
              <Text style={st.description}>{item.description}</Text>
            </View>
          </View>
        )}
        keyExtractor={(itm) => itm.id}
      />

      {renderFooter()}
    </View>
  );
};

const st = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  logoWrapper: {
    position: "absolute",
    top: SIZES.height > 800 ? 40 : 20,
    left: 0,
    right: 0,
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    width: SIZES.width * 0.5,
    height: 120,
  },
  contentContainer: {
    width: SIZES.width,
  },
  header: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
    width: "100%",
  },
  img: {
    width: SIZES.width * 0.8,
    height: SIZES.height * 0.3,
    marginBottom: -SIZES.padding,
  },
  detail: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 30,
    paddingHorizontal: SIZES.radius,
  },
  title: {
    ...FONTS.h1,
    fontSize: 25,
    textTransform: "uppercase",
  },
  description: {
    marginTop: SIZES.radius,
    paddingHorizontal: SIZES.padding,
    ...FONTS.body4,
    textAlign: "center",
    color: COLORS.darkGray,
  },
  dotsWrapper: {
    flex: 1,
    justifyContent: "center",
  },
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
  btnWrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: SIZES.padding,
    paddingHorizontal: SIZES.padding,
  },
});

export default OnBoardingScreen;
