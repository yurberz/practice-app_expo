import React, { useState, useEffect } from "react";

import {
  View,
  Platform,
  Keyboard,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
} from "react-native";

import { Ionicons, Feather } from "@expo/vector-icons";

import { validates } from "../../utils";

import { COLORS, SIZES } from "../../constants";

import AuthLayout from "./AuthLayout";
import { FormInput, TextButton } from "../../components";

const ForgotPasswordScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [emailErr, setEmailErr] = useState("");

  const [isShowKeyboard, setIsShowKeyboard] = useState(false);

  const keyboardShow = () => setIsShowKeyboard(true);
  const keyboardHide = () => {
    setIsShowKeyboard(false);
    Keyboard.dismiss();
  };

  const isEnableSendEmail = () => {
    return email !== "" && emailErr === "";
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
            marginTop: isShowKeyboard ? 10 : SIZES.padding * 2,
          }}
          title="password recovery"
          subTitle="please enter your e-mail adress to recover your password"
        >
          {/* Form input */}
          <View
            style={{
              flex: 1,
              marginTop: SIZES.padding * 2,
            }}
          >
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
          </View>

          {/* Button */}
          <TextButton
            btnStyle={{
              height: 55,
              borderRadius: SIZES.radius,
              backgroundColor: isEnableSendEmail()
                ? COLORS.primary
                : COLORS.transparentPrimary,
            }}
            label="SEND E-MAIL"
            disabled={isEnableSendEmail() ? false : true}
            onPress={() => navigation.goBack()}
          />
        </AuthLayout>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
};

export default ForgotPasswordScreen;
