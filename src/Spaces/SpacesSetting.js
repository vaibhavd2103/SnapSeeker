import React from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  FlatList,
  TextInput,
} from "react-native";
import { Container, Header } from "../Components/GlobalComponents";
import { Font, Colors, Sizes } from "../Styles/Constants";
import GlobalStyles from "../Styles/GlobalStyles";
import { AntDesign, Feather } from "@expo/vector-icons";

const SpacesSetting = (props) => {
  const data = props.route.params;
  console.log(data);

  return (
    <Container>
      <Header
        style={{
          borderBottomWidth: 3,
          borderBottomColor: Colors.lightBlue,
        }}
      >
        <TouchableOpacity
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
          <Text
            style={{
              ...Font.header,
              fontSize: 13,
              letterSpacing: 3,
            }}
          >
            {data.name.toUpperCase()}
          </Text>
          <Text style={{ ...Font.text400, fontSize: 10, lineHeight: 20 }}>
            {data.country.name}
          </Text>
        </View>
        <TouchableOpacity></TouchableOpacity>
      </Header>
    </Container>
  );
};

export default SpacesSetting;

const styles = StyleSheet.create({});
