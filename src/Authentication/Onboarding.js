import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import { Container } from "../Components/GlobalComponents";
import { Colors, Font, Sizes } from "../Styles/Constants";
import GlobalStyles from "../Styles/GlobalStyles";

const Onboarding = (props) => {
  return (
    <Container>
      <Image
        source={require("../../assets/snapworkwithBoxes.png")}
        style={{ width: Sizes.width, height: 300 }}
        resizeMode="contain"
      />
      <Image
        source={require("../../assets/OnboardingLogo.png")}
        style={{
          height: 270,
          width: "100%",
          marginTop: -40,
        }}
        resizeMode="contain"
      />
      <Text
        style={{
          ...Font.header,
          fontSize: 15,
          color: Colors.veryDarkBlue,
        }}
      >
        We are here{"\n"}For you & Your Business
      </Text>
      <Text
        style={{
          ...Font.text500,
          marginTop: 10,
        }}
      >
        Let’s join our community {"\n"}to find all the help you need
      </Text>
      <View
        style={{
          paddingHorizontal: 25,
          width: "100%",
          position: "absolute",
          bottom: 60,
        }}
      >
        <TouchableOpacity
          style={GlobalStyles.button}
          activeOpacity={0.5}
          onPress={() => {
            props.navigation.navigate("SnapWorkerDiscovery");
          }}
        >
          <Text
            style={{
              fontFamily: "Inter-Bold",
              color: "white",
              fontSize: 15,
            }}
          >
            Get Started
          </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.signInContainer}>
        <Text
          style={{ ...Font.secondary400, fontSize: 12, color: Colors.mainText }}
        >
          Already have any account?
        </Text>
        <TouchableOpacity
          onPress={() => {
            props.navigation.navigate("Login");
          }}
        >
          <Text
            style={{
              ...Font.text400,
              color: Colors.green,
            }}
          >
            Sign In
          </Text>
        </TouchableOpacity>
      </View>
    </Container>
  );
};

export default Onboarding;

const styles = StyleSheet.create({
  button: {
    width: "100%",
    height: 55,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.green,
    borderRadius: 32,
    marginTop: 30,
  },
  signInContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 35,
    position: "absolute",
    bottom: 30,
    width: "100%",
  },
});
