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
import HandPickedExperts from "../src/SnapWorkerDiscovery/HandPickedExperts";
import Domain from "../src/SnapWorkerDiscovery/Domain";
import SpecificTask from "../src/SnapWorkerDiscovery/SpecificTask";
import SnapWorkerBrief from "../src/SnapWorkerDiscovery/SnapWorkerBrief";
import Reference from "../src/SnapWorkerDiscovery/Reference";
import BudgetDate from "../src/SnapWorkerDiscovery/BudgetDate";
import LevelSelect from "../src/SnapWorkerDiscovery/LevelSelect";
import DiscoveryContract from "../src/SnapWorkerDiscovery/DiscoveryContract";

const Stack = createStackNavigator();
const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Onboarding" component={Onboarding} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen
          name="SnapWorkerDiscovery"
          component={SnapWorkerDiscovery}
        />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="Spaces" component={Spaces} />
        <Stack.Screen name="SpacesChat" component={SpacesChat} />
        <Stack.Screen name="SpacesSetting" component={SpacesSetting} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const SnapWorkerDiscovery = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="HandPickedExperts" component={HandPickedExperts} />
      <Stack.Screen name="Domain" component={Domain} />
      <Stack.Screen name="SpecificTask" component={SpecificTask} />
      <Stack.Screen name="SnapWorkerBrief" component={SnapWorkerBrief} />
      <Stack.Screen name="Reference" component={Reference} />
      <Stack.Screen name="BudgetDate" component={BudgetDate} />
      <Stack.Screen name="LevelSelect" component={LevelSelect} />
      <Stack.Screen name="DiscoveryContract" component={DiscoveryContract} />
      {/* <Stack.Screen name="SpacesChat" component={SpacesChat} /> */}
    </Stack.Navigator>
  );
};

export default AppNavigator;
