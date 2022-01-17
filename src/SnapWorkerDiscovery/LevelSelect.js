import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  TextdarkBlue,
  FlatList,
  ScrollView,
} from "react-native";
import { Container, Header, Section } from "../Components/GlobalComponents";
import { Font, Colors, Sizes } from "../Styles/Constants";
import GlobalStyles from "../Styles/GlobalStyles";
import {
  Feather,
  AntDesign,
  Ionicons,
  MaterialCommunityIcons,
  FontAwesome5,
} from "react-native-vector-icons";

const LevelSelect = (props) => {
  const [selected, setSelected] = useState("");

  const data = [
    {
      id: "a",
      title: "MARKET RESEARCH",
      level: "1",
      exp: "0-1 yrs experience",
      detail: "300 SnapCoins + ₹300/hr",
      ratings: "10+ 5",
      jobs: "30+",
      revisions: "4",
      task: "Secondary Market Research",
      deliveryBy: "05-02-2021",
      brief:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore eta",
    },
    {
      id: "b",
      title: "MARKET RESEARCH",
      level: "3",
      exp: "3-4 yrs experience",
      detail: "800 SnapCoins + ₹300/hr",
      ratings: "90+ 5",
      jobs: "50+",
      revisions: "3",
      task: "Secondary Market Research",
      deliveryBy: "05-02-2021",
      brief:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore eta",
    },
    {
      id: "c",
      title: "MARKET RESEARCH",
      level: "4",
      exp: "5-6 yrs experience",
      detail: "1000 SnapCoins + ₹300/hr",
      ratings: "99+ 5",
      jobs: "60+",
      revisions: "1",
      task: "Secondary Market Research",
      deliveryBy: "05-02-2021",
      brief:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore eta",
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
          Perfect. We have SnapWorkers who are available to serve you in a few
          experience levels. Please select the one that suits your business
          outcome*
        </Text>
        <ScrollView horizontal={true}>
          {data.map((item) => {
            return (
              <TouchableOpacity
                key={item.id}
                activeOpacity={0.7}
                style={{
                  backgroundColor: Colors.lightestGreen,
                  borderRadius: 16,
                  paddingHorizontal: 15,
                  marginHorizontal: 5,
                  alignItems: "center",
                  marginBottom: 30,
                  paddingBottom: 15,
                  paddingTop: 5,
                  borderWidth: selected === item.id ? 1 : 1,
                  borderColor:
                    selected === item.id ? Colors.green : "transparent",
                  height: 180,
                }}
                onPress={() => {
                  setSelected(item.id);
                  //   props.setSelectedCard(item);
                  //   props.setSelected(true);
                }}
              >
                <View
                  style={{
                    ...styles.icon,
                    backgroundColor:
                      selected === item.id
                        ? "rgba(31, 204, 121, 0.2)"
                        : "rgba(159, 165, 192, 0.2)",
                  }}
                >
                  {/* Icon */}
                  <AntDesign
                    name="check"
                    size={12}
                    color={
                      selected === item.id ? Colors.green : Colors.darkGrey
                    }
                  />
                </View>
                <Text
                  style={{
                    ...Font.header,
                    color: Colors.darkBlue,
                    fontSize: 12,
                    lineHeight: 15,
                  }}
                >
                  {item.title}
                </Text>
                <Text
                  style={{
                    ...Font.header,
                    color: Colors.darkBlue,
                    letterSpacing: 3,
                    fontSize: 10,
                  }}
                >
                  LEVEL {item.level}
                </Text>
                <Text
                  style={{
                    ...Font.header,
                    color: Colors.darkGrey,
                    marginTop: 10,
                    fontSize: 10,
                  }}
                >
                  {item.exp}
                </Text>
                <Text
                  style={{
                    ...Font.header,
                    color: Colors.darkGrey,
                    marginBottom: 10,
                    fontSize: 10,
                  }}
                >
                  {item.detail}
                </Text>
                <View style={{ alignSelf: "flex-start" }}>
                  <Text
                    style={{
                      ...Font.text400,
                      fontSize: 10,
                      lineHeight: 20,
                      color: "black",
                      textAlign: "left",
                    }}
                  >
                    {item.ratings} star ratings
                  </Text>
                  <Text
                    style={{
                      ...Font.text400,
                      fontSize: 10,
                      lineHeight: 20,
                      color: "black",
                      textAlign: "left",
                    }}
                  >
                    {item.ratings} star ratings
                  </Text>
                  <Text
                    style={{
                      ...Font.text400,
                      fontSize: 10,
                      lineHeight: 20,
                      color: "black",
                      textAlign: "left",
                    }}
                  >
                    {item.ratings} star ratings
                  </Text>
                </View>
              </TouchableOpacity>
            );
          })}
        </ScrollView>
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
              props.navigation.navigate("DiscoveryContract");
            }}
          >
            <Text style={Font.button}>Next</Text>
          </TouchableOpacity>
        </View>
      </Section>
    </Container>
  );
};

export default LevelSelect;

const styles = StyleSheet.create({
  icon: {
    height: 20,
    width: 20,
    borderRadius: 100,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 5,
  },
});
