import React from "react";

import {} from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";

import {
  OnBoardingScreen,
  SignInScreen,
  SignUpScreen,
  ForgotPasswordScreen,
  OtpScreen,
} from "./screens";

const AuthStack = createNativeStackNavigator();

const App = () => {
  const [isReady] = useFonts({
    "Prompt-Black": require("./assets/fonts/Prompt-Black.ttf"),
    "Prompt-Bold": require("./assets/fonts/Prompt-Bold.ttf"),
    "Prompt-Regular": require("./assets/fonts/Prompt-Regular.ttf"),
    "Prompt-SemiBold": require("./assets/fonts/Prompt-SemiBold.ttf"),
  });

  if (!isReady) {
    return <AppLoading />;
  }

  return (
    <NavigationContainer>
      <AuthStack.Navigator
        screenOptions={{
          headerShown: false,
          initialRouteName: "OnBoarding",
        }}
      >
        <AuthStack.Screen name="OnBoarding" component={OnBoardingScreen} />
        <AuthStack.Screen name="SignIn" component={SignInScreen} />
        <AuthStack.Screen name="SignUp" component={SignUpScreen} />
        <AuthStack.Screen
          name="ForgotPassword"
          component={ForgotPasswordScreen}
        />
        <AuthStack.Screen name="Otp" component={OtpScreen} />
      </AuthStack.Navigator>
    </NavigationContainer>
  );
};

export default App;
