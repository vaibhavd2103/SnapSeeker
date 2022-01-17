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

const Reference = (props) => {
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
          Attach any references (text,link,images)
        </Text>
        <TouchableOpacity style={styles.button} activeOpacity={0.5}>
          <Image
            source={require("../../assets/gallery.png")}
            style={{ height: 51, width: 53 }}
            resizeMode="contain"
          />
          <Text
            style={{
              ...Font.text400,
              color: Colors.darkBlue,
              marginTop: 10,
              marginBottom: 15,
            }}
          >
            Upload File
          </Text>
          <Text style={Font.text400}>(up to 12 Mb)</Text>
        </TouchableOpacity>
        <Text
          style={{
            ...Font.text400,
            color: Colors.darkBlue,
            textAlign: "left",
            marginBottom: 20,
          }}
        >
          Description
        </Text>
        <TextInput
          placeholder="Tell a little about the file you uploaded"
          placeholderTextColor={Colors.darkGrey}
          style={{
            ...GlobalStyles.input,
            borderRadius: 8,
            height: 80,
            textAlignVertical: "top",
            padding: 15,
          }}
          multiline={true}
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
              props.navigation.navigate("BudgetDate");
            }}
          >
            <Text style={Font.button}>Next</Text>
          </TouchableOpacity>
        </View>
      </Section>
    </Container>
  );
};

export default Reference;

const styles = StyleSheet.create({
  button: {
    width: "100%",
    paddingTop: 20,
    paddingBottom: 25,
    alignItems: "center",
    borderWidth: 2,
    borderRadius: 16,
    marginBottom: 20,
    borderColor: Colors.border,
    borderStyle: "dashed",
  },
});
