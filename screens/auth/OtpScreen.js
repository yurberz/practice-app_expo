import React, { useState, useEffect } from "react";

import { View, Text, StyleSheet } from "react-native";

import OTPInputView from "@twotalltotems/react-native-otp-input";

import { COLORS, FONTS, SIZES } from "../../constants";

import AuthLayout from "./AuthLayout";
import { TextButton } from "../../components";

const OtpScreen = ({ navigation }) => {
  const [timer, setTimer] = useState(60);

  useEffect(() => {
    let interval = setInterval(() => {
      setTimer((prevTimer) => {
        if (prevTimer > 0) {
          return prevTimer - 1;
        } else {
          return prevTimer;
        }
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <AuthLayout
      titleContainerStyle={{ marginTop: SIZES.padding * 2 }}
      title="otp authentication"
      subTitle="an authentication code has been sent to test@test.com"
    >
      <View
        style={{
          flex: 1,
          marginTop: SIZES.padding * 2,
        }}
      >
        {/* OTP Input */}
        <OTPInputView
          pinCount={4}
          style={{ width: "100%", height: 50 }}
          codeInputFieldStyle={st.codeInputFieldStyle}
          onCodeFilled={(code) => console.log(code)}
        />

        {/* Count timer */}
        <View style={st.timerWrapper}>
          <Text style={st.text}>didn't receive code?</Text>

          <TextButton
            btnStyle={{ marginLeft: SIZES.base, backgroundColor: null }}
            label={`resend (${timer}s)`}
            labelStyle={{ ...FONTS.h3, color: COLORS.primary }}
            disabled={timer === 0 ? false : true}
            onPress={() => setTimer(60)}
          />
        </View>
      </View>

      {/* Footer */}
      <View>
        <TextButton
          btnStyle={{ height: 50, borderRadius: SIZES.radius }}
          label="continue"
          onPress={() => console.log("continue")}
        />

        <View style={{ marginTop: SIZES.padding, alignItems: "center" }}>
          <Text style={{ ...FONTS.body3, color: COLORS.darkGray }}>
            by signing up, you agree to our.
          </Text>

          <TextButton
            btnStyle={{ backgroundColor: null }}
            label="terms & conditions"
            labelStyle={{ ...FONTS.body3, color: COLORS.primary }}
            onPress={() => console.log("TnC")}
          />
        </View>
      </View>
    </AuthLayout>
  );
};

const st = StyleSheet.create({
  codeInputFieldStyle: {
    width: 65,
    height: 65,
    backgroundColor: COLORS.lightGray2,
    ...FONTS.h3,
    color: COLORS.black,
    borderRadius: SIZES.radius,
  },
  timerWrapper: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: SIZES.padding,
  },
  text: {
    ...FONTS.body3,
    color: COLORS.darkGray,
  },
});

export default OtpScreen;
