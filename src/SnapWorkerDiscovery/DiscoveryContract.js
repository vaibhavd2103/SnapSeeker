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

const DiscoveryContract = (props) => {
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
          Ok. Confirm the below to finalize on the SnapWorker
        </Text>

        {/* -------------Card-------------------- */}

        <View style={styles.card}>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              width: "100%",
              marginBottom: 5,
            }}
          >
            <Image
              source={require("../../assets/TicketStar.png")}
              style={{ height: 18, width: 20 }}
            />
            <Text
              style={{
                ...Font.header,
                fontSize: 14,
                letterSpacing: 1.3,
                color: "black",
                paddingLeft: 10,
                lineHeight: 23,
              }}
            >
              DISCOVERY CONTRACT
            </Text>
          </View>
          <Text
            style={{
              ...Font.text400,
              color: "black",
              lineHeight: 23,
              letterSpacing: -0.3,
            }}
          >
            Details of Expert Discovery for{" "}
            <Text
              style={{
                ...Font.text500,
                color: "black",
                fontFamily: "DMSans-Bold",
              }}
            >
              John Doe
            </Text>
          </Text>
          <Text
            style={{
              ...Font.text400,
              fontSize: 10,
              color: Colors.justBlue,
              textAlign: "left",
              lineHeight: 15,
              letterSpacing: -0.3,
            }}
          >
            at 2:31am on 31-02-2021
          </Text>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              width: "100%",
            }}
          >
            <Text
              style={{
                ...Font.text400,
                lineHeight: 23,
              }}
            >
              Segment
            </Text>
            <Text
              style={{
                ...Font.text500,
                color: Colors.darkBlue,
                lineHeight: 23,
              }}
            >
              Market Research
            </Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              width: "100%",
            }}
          >
            <Text
              style={{
                ...Font.text400,
                lineHeight: 23,
              }}
            >
              Task
            </Text>
            <Text
              style={{
                ...Font.text500,
                color: Colors.darkBlue,
                lineHeight: 23,
              }}
            >
              Secondary Market Research
            </Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              width: "100%",
            }}
          >
            <Text
              style={{
                ...Font.text400,
                lineHeight: 23,
              }}
            >
              Experience
            </Text>
            <Text
              style={{
                ...Font.text500,
                color: Colors.darkBlue,
                lineHeight: 23,
              }}
            >
              Level 4
            </Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              width: "100%",
            }}
          >
            <Text
              style={{
                ...Font.text400,
                lineHeight: 23,
              }}
            >
              Delivery by
            </Text>
            <Text
              style={{
                ...Font.text500,
                color: Colors.darkBlue,
                lineHeight: 23,
              }}
            >
              05-02-2021
            </Text>
          </View>
          <Text style={{ ...Font.text400, lineHeight: 23 }}>Brief</Text>
          <Text
            style={{
              ...Font.text400,
              lineHeight: 16,
              color: Colors.darkBlue,
              textAlign: "left",
            }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore eta
          </Text>
        </View>

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
              props.navigation.navigate("SignUp");
            }}
          >
            <Text style={Font.button}>Confirm</Text>
          </TouchableOpacity>
        </View>
      </Section>
    </Container>
  );
};

export default DiscoveryContract;

const styles = StyleSheet.create({
  card: {
    elevation: 7,
    borderRadius: 20,
    padding: 10,
    alignItems: "flex-start",
    paddingVertical: 20,
    backgroundColor: "white",
    alignSelf: "flex-start",
    width: Sizes.width - 60,
    //     marginTop: 30,
  },
});
