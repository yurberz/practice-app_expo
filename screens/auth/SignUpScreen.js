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
import { FormInput, TextButton, TextIconButton } from "../../components";

const SignUpScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [emailErr, setEmailErr] = useState("");

  const [username, setUsername] = useState("");
  const [usernameErr, setUsernameErr] = useState("");

  const [password, setPassword] = useState("");
  const [passErr, setPassErr] = useState("");
  const [showPass, setShowPass] = useState(false);

  const [isShowKeyboard, setIsShowKeyboard] = useState(false);

  const keyboardShow = () => setIsShowKeyboard(true);
  const keyboardHide = () => {
    setIsShowKeyboard(false);
    Keyboard.dismiss();
  };

  const isEnableSignUp = () => {
    return (
      email !== "" &&
      username !== "" &&
      password !== "" &&
      emailErr === "" &&
      usernameErr !== "" &&
      passErr !== ""
    );
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
            marginTop: isShowKeyboard ? -35 : SIZES.radius,
          }}
          title="getting started"
          subTitle="create an account to continue!"
        >
          <View
            style={{
              flex: 1,
              marginTop: isShowKeyboard ? 1 : SIZES.padding,
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
              label="USERNAME"
              containerStyle={{ marginTop: SIZES.radius }}
              errMsg={usernameErr}
              onFocus={keyboardShow}
              onChange={(val) => setUsername(val)}
              value={username}
              appendComponent={
                <View style={{ justifyContent: "center" }}>
                  {Platform.OS === "ios" ? (
                    <Ionicons
                      name={
                        username === "" ||
                        (username !== "" && usernameErr === "")
                          ? "ios-checkmark-circle-outline"
                          : "ios-close-circle-outline"
                      }
                      size={20}
                      color={
                        username === ""
                          ? COLORS.gray
                          : username !== "" && usernameErr === ""
                          ? COLORS.green
                          : COLORS.red
                      }
                    />
                  ) : (
                    <Feather
                      name={
                        username === "" ||
                        (username !== "" && usernameErr === "")
                          ? "check-circle"
                          : "x-circle"
                      }
                      size={20}
                      color={
                        username === ""
                          ? COLORS.gray
                          : email !== "" && usernameErr === ""
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
              errMsg={passErr}
              containerStyle={{ marginTop: SIZES.radius }}
              onFocus={keyboardShow}
              onChange={(val) => {
                validates.validatePassword(val, setPassErr);
                setPassword(val);
              }}
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

            {/* Sign Up and Sign In */}
            <TextButton
              btnStyle={{
                ...st.btnSignUp,
                backgroundColor: isEnableSignUp()
                  ? COLORS.primary
                  : COLORS.transparentPrimary,
              }}
              label="SIGN UP"
              onPress={() => navigation.navigate("Otp")}
              disabled={isEnableSignUp() ? false : true}
            />

            <View style={st.signInWrapper}>
              <Text style={{ ...FONTS.body3, color: COLORS.darkGray }}>
                already have an account?
              </Text>

              <TextButton
                btnStyle={{ marginLeft: 3, backgroundColor: null }}
                label="SIGN IN"
                labelStyle={{ ...FONTS.h3, color: COLORS.primary }}
                onPress={() => navigation.goBack()}
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
  btnSignUp: {
    marginTop: SIZES.radius,
    height: 55,
    borderRadius: SIZES.radius,
  },
  signInWrapper: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: SIZES.radius,
  },
});

export default SignUpScreen;
