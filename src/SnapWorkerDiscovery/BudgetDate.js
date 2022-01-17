import React, { useState } from "react";
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
import { EvilIcons } from "@expo/vector-icons";

const BudgetDate = (props) => {
  const [dropDown, setDropDown] = useState(false);
  const [selectedText, setSelectedText] = useState("Per hour");
  const dropDownData = [
    {
      id: "1",
      name: "Per hour",
    },
    {
      id: "2",
      name: "Per day",
    },
    {
      id: "3",
      name: "Per month",
    },
  ];

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
          Okay. By when would you need this business outcome delivered and what
          is the budge you have allocated for this?*
        </Text>
        <TextInput
          placeholder="Enter the budget"
          placeholderTextColor={Colors.darkGrey}
          style={GlobalStyles.input}
        />
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "flex-end",
            width: "100%",
            marginTop: 20,
          }}
        >
          <TextInput
            placeholder="Enter the date"
            placeholderTextColor={Colors.darkGrey}
            style={{ ...GlobalStyles.input, width: Sizes.width - 160 }}
          />
          <View
            style={{
              height: 56,
              justifyContent: "flex-end",
              alignItems: "center",
              borderBottomColor: "black",
              borderBottomWidth: 1,
              flexDirection: "row",
              width: 80,
            }}
          >
            <Text style={{ ...Font.text400 }}>{selectedText}</Text>
            <TouchableOpacity
              onPress={() => {
                setDropDown(true);
              }}
            >
              <EvilIcons name="chevron-down" size={24} color="black" />
            </TouchableOpacity>
          </View>
        </View>
        {dropDown ? (
          <View
            style={{
              height: 120,
              width: 80,
              elevation: 7,
              backgroundColor: "white",
              justifyContent: "space-evenly",
              alignItems: "flex-start",
              //     paddingLeft: 10,
              alignSelf: "flex-end",
            }}
          >
            {dropDownData.map((item, index) => {
              return (
                <TouchableOpacity
                  key={item.id}
                  style={{
                    width: "100%",
                    borderBottomWidth:
                      dropDownData.length - 1 === index ? 0 : 1,
                    borderBottomColor: Colors.border,
                    padding: 10,
                  }}
                  onPress={() => {
                    setSelectedText(item.name);
                    setDropDown(false);
                  }}
                >
                  <Text style={{ ...Font.text400, textAlign: "left" }}>
                    {item.name}
                  </Text>
                </TouchableOpacity>
              );
            })}
          </View>
        ) : null}
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
              props.navigation.navigate("LevelSelect");
            }}
          >
            <Text style={Font.button}>Next</Text>
          </TouchableOpacity>
        </View>
      </Section>
    </Container>
  );
};

export default BudgetDate;

const styles = StyleSheet.create({});
