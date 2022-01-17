import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  TextInput,
  ScrollView,
  Alert,
} from "react-native";
import { Container } from "../Components/GlobalComponents";
import { Colors, Font, Sizes } from "../Styles/Constants";
import GlobalStyles from "../Styles/GlobalStyles";
import { Feather, AntDesign } from "@expo/vector-icons";

const SignUp = (props) => {
  const [active, setActive] = useState("");
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [secure, setSecure] = useState(true);
  const [show, setShow] = useState("Show");
  const hasNumber = /\d/.test(password);

  return (
    <Container>
      <ScrollView
        contentContainerStyle={{
          alignItems: "center",
          paddingHorizontal: 30,
          width: Sizes.width,
          paddingTop: "10%",
          height: "100%",
        }}
        keyboardShouldPersistTaps="handled"
      >
        <Image
          source={require("../../assets/snapwork.png")}
          style={{ width: Sizes.width - 180, height: (Sizes.width - 180) / 4 }}
          resizeMode="contain"
        />
        <Text style={{ ...Font.header, color: Colors.darkBlue, marginTop: 70 }}>
          Please Sign up to continue
        </Text>
        <View
          style={{
            ...GlobalStyles.InputView,
            marginTop: 60,
            borderColor: active === "Name" ? Colors.green : Colors.border,
          }}
        >
          <Image
            source={require("../../assets/Profile.png")}
            style={{ height: 18, width: 18 }}
            resizeMode="contain"
          />
          <TextInput
            placeholder="Full Name"
            selectionColor={Colors.primary}
            value={name}
            placeholderTextColor={Colors.darkGrey}
            style={{
              paddingLeft: 10,
              fontFamily: "DMSans-Regular",
              flex: 1,
            }}
            onChangeText={(text) => setName(text)}
            onFocus={() => setActive("Name")}
            onBlur={() => setActive("")}
          />
        </View>
        <View
          style={{
            ...GlobalStyles.InputView,
            marginTop: 15,
            borderColor: active === "Password" ? Colors.green : Colors.border,
          }}
        >
          <Image
            source={require("../../assets/Lock.png")}
            style={{ height: 22, width: 22 }}
            resizeMode="contain"
          />
          <TextInput
            placeholder="Password"
            selectionColor={Colors.primary}
            value={password}
            placeholderTextColor={Colors.darkGrey}
            style={{ paddingLeft: 7, fontFamily: "DMSans-Regular", flex: 1 }}
            onChangeText={(text) => setPassword(text)}
            secureTextEntry={secure}
            onFocus={() => setActive("Password")}
            onBlur={() => setActive("")}
          />
          <TouchableOpacity
            onPress={() => {
              setSecure(!secure);
              if (show === "Show") {
                setShow("Hide");
              } else {
                setShow("Show");
              }
            }}
            style={{
              width: "10%",
              alignItems: "flex-end",
            }}
          >
            {show === "Show" ? (
              <Feather name="eye" size={18} color={Colors.darkGrey} />
            ) : (
              <Feather name="eye-off" size={18} color={Colors.darkGrey} />
            )}
          </TouchableOpacity>
        </View>
        {active === "Password" ? (
          <View style={{ width: "100%", backgroundColor: "white" }}>
            <Text
              style={{
                ...Font.text500,
                fontSize: 12,
                color: Colors.mainText,
                textAlign: "left",
                lineHeight: 25,
                marginVertical: 20,
              }}
            >
              Your password must contain:
            </Text>
            <View style={styles.conditionContainer}>
              <View
                style={{
                  ...styles.check,
                  backgroundColor:
                    password.length < 6
                      ? "rgba(159, 165, 192, 0.2)"
                      : "rgba(227, 255, 241, 1)",
                }}
              >
                <AntDesign
                  name="check"
                  size={16}
                  color={password.length < 6 ? Colors.darkGrey : Colors.primary}
                />
              </View>

              <Text
                style={{
                  ...Font.text500,
                  marginLeft: 5,
                  fontSize: 12,
                  color:
                    password.length < 6 ? Colors.darkGrey : Colors.mainText,
                }}
              >
                At least 6 characters
              </Text>
            </View>
            <View style={styles.conditionContainer}>
              <View
                style={{
                  ...styles.check,
                  backgroundColor: hasNumber
                    ? "rgba(227, 255, 241, 1)"
                    : "rgba(159, 165, 192, 0.2)",
                }}
              >
                <AntDesign
                  name="check"
                  size={16}
                  color={hasNumber ? Colors.primary : Colors.darkGrey}
                />
              </View>
              <Text
                style={{
                  ...Font.text500,
                  marginLeft: 5,
                  fontSize: 12,
                  color: hasNumber ? Colors.mainText : Colors.darkGrey,
                }}
              >
                Contains a number
              </Text>
            </View>
          </View>
        ) : (
          <View></View>
        )}
        <View
          style={{
            ...GlobalStyles.InputView,
            marginTop: 15,
            borderColor: active === "Email" ? Colors.green : Colors.border,
            marginBottom: 50,
          }}
        >
          <Image
            source={require("../../assets/Email.png")}
            style={{ height: 18, width: 18 }}
            resizeMode="contain"
          />
          <TextInput
            placeholder="Email or phone number"
            selectionColor={Colors.primary}
            value={email}
            placeholderTextColor={Colors.darkGrey}
            style={{
              paddingLeft: 10,
              fontFamily: "DMSans-Regular",
              flex: 1,
            }}
            onChangeText={(text) => setEmail(text)}
            onFocus={() => setActive("Email")}
            onBlur={() => setActive("")}
          />
        </View>
        <TouchableOpacity
          style={GlobalStyles.button}
          activeOpacity={0.5}
          onPress={() => {}}
        >
          <Text
            style={{
              fontFamily: "Inter-Bold",
              color: "white",
              fontSize: 15,
            }}
          >
            Sign Up
          </Text>
        </TouchableOpacity>
        <Text style={{ ...Font.text400, marginTop: 30 }}>Or Sign Up with</Text>
        <View style={styles.social}>
          <Image
            source={require("../../assets/google.png")}
            style={{ height: 40, width: 40 }}
          />
          <Image
            source={require("../../assets/facebook.png")}
            style={{ height: 40, width: 40, marginHorizontal: 20 }}
          />
          <Image
            source={require("../../assets/linkedin.png")}
            style={{ height: 40, width: 40 }}
          />
        </View>
        <View
          style={{
            width: "100%",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            //   marginTop: 30,
            position: "absolute",
            bottom: 30,
          }}
        >
          <Text style={{ ...Font.text400, color: Colors.mainText }}>
            Already have an account?
          </Text>
          <TouchableOpacity
            onPress={() => {
              props.navigation.navigate("Login");
            }}
          >
            <Text style={{ ...Font.text400, color: Colors.green }}>
              Sign In
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </Container>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  social: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    justifyContent: "space-evenly",
    marginTop: 30,
  },
  conditionContainer: {
    flexDirection: "row",
    width: "100%",
    alignItems: "center",
    marginBottom: 17,
  },
  check: {
    height: 24,
    width: 24,
    borderRadius: 24,
    justifyContent: "center",
    alignItems: "center",
  },
});
