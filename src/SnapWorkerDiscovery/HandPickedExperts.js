import React from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  TextInput,
} from "react-native";
import { Container, Header, Section } from "../Components/GlobalComponents";
import { Font, Colors, Sizes } from "../Styles/Constants";
import GlobalStyles from "../Styles/GlobalStyles";

const HandPickedExperts = (props) => {
  return (
    <Container>
      <Header>
        {/* Icon */}
        <TouchableOpacity
          style={GlobalStyles.headerButton}
          onPress={() => {
            props.navigation.goBack();
          }}
        >
          <Image
            source={require("../../assets/Back.png")}
            style={{
              height: 15,
              width: 15,
            }}
            resizeMode="contain"
          />
        </TouchableOpacity>
        <View>
          <Text style={Font.headerText}>
            {"Handpicked Experts".toUpperCase()}
          </Text>
          <Text style={{ ...Font.text400, fontSize: 10, marginBottom: 5 }}>
            Talk to them, To understand them better
          </Text>
        </View>
        <View style={GlobalStyles.headerButton}></View>
      </Header>
      <Section>
        <Text style={GlobalStyles.discoveryQue}>Please give your name*</Text>
        <TextInput
          placeholder="Start typing your name"
          placeholderTextColor={Colors.darkGrey}
          style={GlobalStyles.input}
        />
        <View
          style={{ position: "absolute", width: "100%", bottom: 70, left: 35 }}
        >
          <TouchableOpacity
            style={GlobalStyles.button}
            activeOpacity={0.8}
            onPress={() => {
              props.navigation.navigate("Domain");
            }}
          >
            <Text style={Font.button}>Next</Text>
          </TouchableOpacity>
        </View>
      </Section>
    </Container>
  );
};

export default HandPickedExperts;

const styles = StyleSheet.create({});
