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

const SpacesChat = (props) => {
  const data = props.route.params;
  //   console.log(data);

  const messages = [
    {
      id: "1",
      user: "expert",
      message: "GM Paolo, how can i help you today?",
      time: "11:40am",
    },
    {
      id: "5",
      user: "expert",
      message: "Tell us about your problem",
      time: "11:40am",
    },
    {
      id: "2",
      user: "currentUser",
      message:
        "I hope you have read the brief that was submitted to you. I would like to know what is your plan",
      time: "11:41am",
    },
    {
      id: "3",
      user: "expert",
      message:
        "Sure, i understand the issues you have highlighted. Lets get on a call?",
      time: "11:41am",
    },
    {
      id: "4",
      user: "notification",
      message: "was added to App Design by you",
      time: "11:42am",
    },
  ];

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
        <TouchableOpacity
          onPress={() => {
            props.navigation.navigate("SpacesSetting", item);
          }}
        >
          <Image
            source={require("../../assets/Setting.png")}
            style={{ height: 20, width: 20 }}
            resizeMode="contain"
          />
        </TouchableOpacity>
      </Header>
      <FlatList
        style={{
          width: Sizes.width,
          height: "100%",
          paddingHorizontal: 35,
          paddingVertical: 20,
          height: "100%",
        }}
        data={messages}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => {
          if (item.user === "expert") {
            return (
              <View style={styles.expertMessageContainer}>
                <Image
                  source={{ uri: data.image.original }}
                  style={{
                    height: 36,
                    width: 36,
                    borderRadius: 36,
                  }}
                  resizeMode="cover"
                />
                <View style={styles.expertMessageSection}>
                  <View
                    style={{
                      flexDirection: "row",
                      justifyContent: "flex-start",
                      width: "100%",
                      alignItems: "center",
                    }}
                  >
                    <Text style={styles.username}>{data.name}</Text>
                    <Text
                      style={{
                        color: Colors.lightBlue,
                        fontSize: 10,
                        fontFamily: "DMSans-Regular",
                        paddingLeft: 5,
                        textAlign: "left",
                      }}
                    >
                      {item.time}
                    </Text>
                  </View>
                  <Text style={styles.message}>{item.message}</Text>
                </View>
              </View>
            );
          } else if (item.user === "currentUser") {
            return (
              <View style={styles.senderMessageContainer}>
                <View style={styles.senderMessageSection}>
                  <View
                    style={{
                      flexDirection: "row",
                      justifyContent: "flex-end",
                      width: "100%",
                      alignItems: "center",
                    }}
                  >
                    <Text style={{ ...styles.username, color: Colors.green }}>
                      You
                    </Text>
                    <Text
                      style={{
                        color: Colors.lightBlue,
                        fontSize: 10,
                        fontFamily: "DMSans-Regular",
                        paddingLeft: 5,
                        textAlign: "left",
                      }}
                    >
                      {item.time}
                    </Text>
                  </View>
                  <Text style={styles.message}>{item.message}</Text>
                </View>
                <Image
                  source={{ uri: data.image.original }}
                  style={{
                    height: 36,
                    width: 36,
                    borderRadius: 36,
                  }}
                  resizeMode="cover"
                />
              </View>
            );
          } else {
            return (
              <View style={styles.expertMessageContainer}>
                <Image
                  source={{ uri: data.image.original }}
                  style={{
                    height: 36,
                    width: 36,
                    borderRadius: 36,
                  }}
                  resizeMode="cover"
                />
                <View style={styles.expertMessageSection}>
                  <View
                    style={{
                      flexDirection: "row",
                      justifyContent: "flex-start",
                      width: "100%",
                      alignItems: "center",
                    }}
                  >
                    <Text style={styles.username}>{data.name}</Text>
                    <Text
                      style={{
                        color: Colors.lightBlue,
                        fontSize: 10,
                        fontFamily: "DMSans-Regular",
                        paddingLeft: 5,
                        textAlign: "left",
                      }}
                    >
                      {item.time}
                    </Text>
                  </View>
                  <Text style={{ ...styles.message, color: Colors.lightBlue }}>
                    {item.message}
                  </Text>
                </View>
              </View>
            );
          }
        }}
      />
      <View
        style={{
          width: "100%",
          paddingHorizontal: 35,
          paddingBottom: 20,
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <View style={{ ...GlobalStyles.InputView, width: Sizes.width - 150 }}>
          <AntDesign name="plus" size={20} color={Colors.darkBlue} />
          <TextInput
            placeholder="Start Typing"
            placeholderTextColor={Colors.darkGrey}
            style={styles.input}
          />
          <Feather name="mic" size={24} color={Colors.softRed} />
        </View>
        <View style={styles.icon}>
          <Feather name="phone" size={24} color={Colors.green} />
        </View>
      </View>
    </Container>
  );
};

export default SpacesChat;

const styles = StyleSheet.create({
  expertMessageContainer: {
    flexDirection: "row",
    alignSelf: "flex-start",
    alignItems: "flex-start",
    maxWidth: "90%",
    marginBottom: 15,
  },
  expertMessageSection: {
    alignItems: "center",
    paddingTop: 5,
    paddingLeft: 10,
    maxWidth: "80%",
  },
  senderMessageContainer: {
    flexDirection: "row",
    alignSelf: "flex-end",
    alignItems: "flex-start",
    maxWidth: "90%",
    marginBottom: 15,
  },
  senderMessageSection: {
    alignItems: "center",
    paddingTop: 5,
    paddingRight: 10,
    maxWidth: "80%",
    alignSelf: "flex-end",
  },
  message: {
    ...Font.text400,
    color: "black",
    textAlign: "left",
    maxWidth: "100%",
    alignSelf: "flex-end",
  },
  username: {
    ...Font.header,
    fontSize: 12,
    color: Colors.darkBlue,
    textAlign: "left",
    marginBottom: 3,
  },
  input: {
    flex: 1,
    paddingLeft: 15,
    fontFamily: "DMSans-Regular",
    fontSize: 12,
  },
  icon: {
    height: 56,
    width: 56,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: Colors.green,
    borderRadius: 56,
  },
});
