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

const Domain = (props) => {
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
            {"Snapworker Discovery".toUpperCase()}
          </Text>
          <Text style={{ ...Font.text400, fontSize: 10, marginBottom: 5 }}>
            Help us Help you
          </Text>
        </View>
        <View style={GlobalStyles.headerButton}></View>
      </Header>
      <Section>
        <Text style={GlobalStyles.discoveryQue}>
          Good. We have snapworkers for many jobs. What experience are you
          looking for?*
        </Text>
        <TextInput
          placeholder="Type the domain "
          placeholderTextColor={Colors.darkGrey}
          style={GlobalStyles.input}
        />
        <View
          style={{
            position: "absolute",
            width: "100%",
            bottom: 70,
            left: 35,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <TouchableOpacity
            style={GlobalStyles.back}
            activeOpacity={0.8}
            onPress={() => {
              props.navigation.goBack();
            }}
          >
            <Text style={{ ...Font.button, color: Colors.mainText }}>Back</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={GlobalStyles.next}
            activeOpacity={0.8}
            onPress={() => {
              props.navigation.navigate("SpecificTask");
            }}
          >
            <Text style={Font.button}>Next</Text>
          </TouchableOpacity>
        </View>
      </Section>
    </Container>
  );
};

export default Domain;

const styles = StyleSheet.create({});
