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
import { Feather } from "@expo/vector-icons";
// import { Auth } from "aws-amplify";

const Login = (props) => {
  const [active, setActive] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [secure, setSecure] = useState(true);
  const [show, setShow] = useState("Show");

  //   async function SignInUser() {
  //     if (username === "") {
  //       Alert.alert("Please fill valid Username");
  //     } else {
  //       try {
  //         const user = await Auth.signIn(username, password);
  //         props.navigation.replace("Spaces");
  //         console.log(user);
  //       } catch (error) {
  //         console.log(error);
  //         setError(error.message);
  //       }
  //     }
  //   }

  return (
    <Container>
      <ScrollView
        contentContainerStyle={{
          alignItems: "center",
          paddingHorizontal: 30,
          width: Sizes.width,
          paddingTop: "20%",
        }}
        keyboardShouldPersistTaps="handled"
      >
        <Image
          source={require("../../assets/snapwork.png")}
          style={{ width: Sizes.width - 180, height: (Sizes.width - 180) / 4 }}
          resizeMode="contain"
        />
        <Text style={{ ...Font.header, color: Colors.mainText, marginTop: 70 }}>
          Welcome Back!
        </Text>
        <Text style={{ ...Font.text400, marginTop: 10 }}>
          Please enter your account here
        </Text>
        <View
          style={{
            ...GlobalStyles.InputView,
            marginTop: 60,
            borderColor: active === "Email" ? Colors.green : Colors.border,
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
            style={{ paddingLeft: 10, fontFamily: "DMSans-Regular", flex: 1 }}
            onChangeText={(text) => setEmail(text)}
            onFocus={() => setActive("Email")}
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
        <View
          style={{
            alignItems: "flex-end",
            width: "100%",
            marginTop: 10,
            marginBottom: 40,
          }}
        >
          <Text style={{ ...Font.text400, color: Colors.mainText }}>
            Forgot Password?
          </Text>
        </View>
        <TouchableOpacity
          style={GlobalStyles.button}
          activeOpacity={0.5}
          onPress={() => {
            //   SignInUser();
            props.navigation.navigate("Spaces");
          }}
        >
          <Text
            style={{
              fontFamily: "Inter-Bold",
              color: "white",
              fontSize: 15,
            }}
          >
            Login
          </Text>
        </TouchableOpacity>
        <Text style={{ ...Font.text400, marginTop: 30 }}>Or continue with</Text>
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
      </ScrollView>
    </Container>
  );
};

export default Login;

const styles = StyleSheet.create({
  social: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    justifyContent: "space-evenly",
    marginTop: 30,
  },
});
