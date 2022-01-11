import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import Onboarding from "../src/Authentication/Onboarding";
import Login from "../src/Authentication/Login";
import SignUp from "../src/Authentication/SignUp";
import Spaces from "../src/Spaces/Spaces";
import SpacesChat from "../src/Spaces/SpacesChat";
import SpacesSetting from "../src/Spaces/SpacesSetting";

const Stack = createStackNavigator();
const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Onboarding" component={Onboarding} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="Spaces" component={Spaces} />
        <Stack.Screen name="SpacesChat" component={SpacesChat} />
        <Stack.Screen name="SpacesSetting" component={SpacesSetting} />

        {/* <Stack.Screen name="" component={}/> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;

const styles = StyleSheet.create({});
