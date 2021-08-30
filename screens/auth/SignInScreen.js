import React, { useState, useEffect } from "react";

import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Platform,
  Keyboard,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
} from "react-native";

import { Ionicons, Feather } from "@expo/vector-icons";

import { validates } from "../../utils";

import { COLORS, FONTS, SIZES } from "../../constants";

import AuthLayout from "./AuthLayout";
import {
  FormInput,
  CustomSwitch,
  TextButton,
  TextIconButton,
} from "../../components";

const SignInScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [emailErr, setEmailErr] = useState("");

  const [password, setPassword] = useState("");
  const [showPass, setShowPass] = useState(false);

  const [saveMe, setSaveMe] = useState(false);
  const [isShowKeyboard, setIsShowKeyboard] = useState(false);

  const keyboardShow = () => setIsShowKeyboard(true);
  const keyboardHide = () => {
    setIsShowKeyboard(false);
    Keyboard.dismiss();
  };

  const isEnableSignIn = () => {
    return email !== "" && password !== "" && emailErr === "";
  };

  useEffect(() => {
    const keyboardDidHide = Keyboard.addListener("keyboardDidHide", () => {
      setIsShowKeyboard(false);
    });
    return () => {
      keyboardDidHide.remove();
    };
  }, []);

  return (
    <TouchableWithoutFeedback onPress={keyboardHide}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : null}
        style={{
          flex: 1,
          // justifyContent: "center",
        }}
      >
        <AuthLayout
          titleContainerStyle={{
            marginTop: isShowKeyboard ? 10 : SIZES.padding,
          }}
          title="let's sign you in"
          subTitle="welcome back, you've been missed"
        >
          <View
            style={{
              flex: 1,
              marginTop: isShowKeyboard ? 19 : SIZES.padding * 2,
            }}
          >
            {/* Form Inputs */}
            <FormInput
              label="E-MAIL"
              keyboardType="email-address"
              autoCompleteType="email"
              errMsg={emailErr}
              onFocus={keyboardShow}
              onChange={(val) => {
                validates.validateEmail(val, setEmailErr);
                setEmail(val);
              }}
              value={email}
              appendComponent={
                <View style={{ justifyContent: "center" }}>
                  {Platform.OS === "ios" ? (
                    <Ionicons
                      name={
                        email === "" || (email !== "" && emailErr === "")
                          ? "ios-checkmark-circle-outline"
                          : "ios-close-circle-outline"
                      }
                      size={20}
                      color={
                        email === ""
                          ? COLORS.gray
                          : email !== "" && emailErr === ""
                          ? COLORS.green
                          : COLORS.red
                      }
                    />
                  ) : (
                    <Feather
                      name={
                        email === "" || (email !== "" && emailErr === "")
                          ? "check-circle"
                          : "x-circle"
                      }
                      size={20}
                      color={
                        email === ""
                          ? COLORS.gray
                          : email !== "" && emailErr === ""
                          ? COLORS.green
                          : COLORS.red
                      }
                    />
                  )}
                </View>
              }
            />

            <FormInput
              label="PASSWORD"
              secureTextEntry={!showPass}
              autoCompleteType="password"
              containerStyle={{ marginTop: SIZES.radius }}
              onFocus={keyboardShow}
              onChange={(val) => setPassword(val)}
              value={password}
              appendComponent={
                <TouchableOpacity
                  activeOpacity={0.8}
                  onPress={() => setShowPass(!showPass)}
                  style={{
                    justifyContent: "center",
                    alignItems: "flex-end",
                    width: 40,
                  }}
                >
                  {Platform.OS === "ios" ? (
                    <Ionicons
                      name={
                        showPass ? "ios-eye-outline" : "ios-eye-off-outline"
                      }
                      size={20}
                      color={showPass ? COLORS.green : COLORS.gray}
                    />
                  ) : (
                    <Feather
                      name={showPass ? "eye" : "eye-off"}
                      size={20}
                      color={showPass ? COLORS.green : COLORS.gray}
                    />
                  )}
                </TouchableOpacity>
              }
            />

            {/* Save me & Forgot password */}
            <View style={st.saveAndForgotWrapper}>
              <CustomSwitch value={saveMe} onChange={(val) => setSaveMe(val)} />

              <TextButton
                btnStyle={{ backgroundColor: null }}
                label="forgot password?"
                labelStyle={{ color: COLORS.primary, ...FONTS.body4 }}
                onPress={() => navigation.navigate("ForgotPassword")}
              />
            </View>

            {/* Sign In and Sign Up */}
            <TextButton
              btnStyle={{
                ...st.btnSignIn,
                backgroundColor: isEnableSignIn()
                  ? COLORS.primary
                  : COLORS.transparentPrimary,
              }}
              label="SIGN IN"
              disabled={isEnableSignIn() ? false : true}
            />

            <View style={st.signUpWrapper}>
              <Text style={{ ...FONTS.body3, color: COLORS.darkGray }}>
                don't have an account?
              </Text>

              <TextButton
                btnStyle={{ marginLeft: 3, backgroundColor: null }}
                label="SIGN UP"
                labelStyle={{ ...FONTS.h3, color: COLORS.primary }}
                onPress={() => navigation.navigate("SignUp")}
              />
            </View>
          </View>

          {/* Footer */}
          {!isShowKeyboard && (
            <View>
              {/* Google */}
              <TextIconButton
                btnStyle={{
                  backgroundColor: COLORS.lightGray2,
                }}
                iconPosition="LEFT"
                icon="ios-logo-google"
                iconColor={COLORS.red}
                label="continue with Google"
                labelStyle={{ marginLeft: SIZES.radius }}
                onPress={() => console.log("Google")}
              />

              {/* Facebook */}
              <TextIconButton
                btnStyle={{
                  marginTop: SIZES.radius,
                  backgroundColor: COLORS.blue,
                }}
                iconPosition="LEFT"
                icon="ios-logo-facebook"
                iconColor={COLORS.white}
                label="continue with Facebook"
                labelStyle={{ marginLeft: SIZES.radius, color: COLORS.white }}
                onPress={() => console.log("FB")}
              />
            </View>
          )}
        </AuthLayout>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
};

const st = StyleSheet.create({
  saveAndForgotWrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: SIZES.radius,
  },
  btnSignIn: {
    marginTop: SIZES.radius,
    height: 55,
    borderRadius: SIZES.radius,
  },
  signUpWrapper: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: SIZES.radius,
  },
});

export default SignInScreen;
