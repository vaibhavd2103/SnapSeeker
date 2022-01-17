import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  FlatList,
  TextInput,
  ScrollView,
  Switch,
} from "react-native";
import { Container, Header } from "../Components/GlobalComponents";
import { Font, Colors, Sizes } from "../Styles/Constants";
import GlobalStyles from "../Styles/GlobalStyles";
import { AntDesign, Feather, SimpleLineIcons } from "@expo/vector-icons";

const SpacesSetting = (props) => {
  const data = props.route.params;
  //   console.log(data);

  const snapWorkers = [];
  snapWorkers.push(data);
  //   console.log(snapWorkers);

  const [muteNotifications, setMuteNotifications] = useState(false);
  const toggleSwitch = () =>
    setMuteNotifications((previousState) => !previousState);

  return (
    <Container>
      <Header>
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
        <Text
          style={{
            ...Font.header,
            fontSize: 13,
            letterSpacing: 3,
          }}
        >
          {data.name.toUpperCase()}
        </Text>
        <TouchableOpacity></TouchableOpacity>
      </Header>
      <ScrollView
        contentContainerStyle={{
          flex: 1,
          paddingHorizontal: 15,
          width: Sizes.width,
        }}
      >
        <View style={styles.categoryBox}>
          <View>
            <Text
              style={{
                ...Font.header,
                fontSize: 14,
                color: "black",
                textAlign: "left",
              }}
            >
              Market Research
            </Text>
            <Text
              style={{
                ...Font.text400,
                fontSize: 14,
                color: "black",
                textAlign: "left",
              }}
            >
              Medicine
            </Text>
            <Text
              style={{
                ...Font.text500,
                position: "absolute",
                top: 0,
                right: 0,
                color: Colors.softRed,
              }}
            >
              Edit
            </Text>
          </View>
          <View
            style={{
              marginTop: 20,
            }}
          >
            <Text style={styles.settingCategory}>Description</Text>
            <Text style={styles.settingName}>No description set</Text>
          </View>
        </View>
        <View style={styles.categoryBox}>
          <Text style={styles.settingCategory}>Snapworkers</Text>
          {snapWorkers.map((data, i) => {
            return (
              <View
                style={{
                  ...styles.snapworkerBox,
                  borderBottomColor: Colors.borderColor,
                  borderBottomWidth: snapWorkers.length === i + 1 ? 0 : 1,
                  paddingBottom: snapWorkers.length === i + 1 ? 0 : 10,
                }}
                key={data.id}
              >
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                  }}
                >
                  <Image
                    source={{ uri: data.image.original }}
                    style={{
                      height: 38,
                      width: 38,
                      borderRadius: 38,
                    }}
                    resizeMode="cover"
                  />
                  <View style={{ marginLeft: 10 }}>
                    <Text style={styles.settingName}>{data.name}</Text>
                    <Text
                      style={{
                        ...Font.text400,
                        color: Colors.green,
                        textAlign: "left",
                        marginTop: 5,
                      }}
                    >
                      Download Invoice
                    </Text>
                  </View>
                </View>
                <Image
                  source={require("../../assets/msg.png")}
                  style={{ height: 19, width: 19 }}
                  resizeMode="contain"
                />
              </View>
            );
          })}
        </View>
        <View style={styles.categoryBox}>
          <Text style={styles.settingCategory}>Spaces Settings</Text>
          <View style={{ ...styles.snapworkerBox, paddingVertical: 18 }}>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <Text style={{ ...Font.text400 }}>Shared Files</Text>
              <View style={styles.countIcon}>
                <Text style={{ ...Font.header, color: "white", fontSize: 10 }}>
                  3
                </Text>
              </View>
            </View>
            <Image
              source={require("../../assets/RightArrow.png")}
              style={{ height: 19, width: 19 }}
              resizeMode="contain"
            />
          </View>
          <View style={{ ...styles.snapworkerBox, paddingVertical: 18 }}>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <Text style={{ ...Font.text400 }}>Shared Links</Text>
              <View style={styles.countIcon}>
                <Text style={{ ...Font.header, color: "white", fontSize: 10 }}>
                  3
                </Text>
              </View>
            </View>
            <Image
              source={require("../../assets/RightArrow.png")}
              style={{ height: 19, width: 19 }}
              resizeMode="contain"
            />
          </View>
          <View
            style={{
              ...styles.snapworkerBox,
              paddingVertical: 18,
              paddingBottom: 7,
              borderBottomWidth: 0,
            }}
          >
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <Text style={{ ...Font.text400 }}>Pinned Messages</Text>
              <View style={styles.countIcon}>
                <Text style={{ ...Font.header, color: "white", fontSize: 10 }}>
                  3
                </Text>
              </View>
            </View>
            <Image
              source={require("../../assets/RightArrow.png")}
              style={{ height: 19, width: 19 }}
              resizeMode="contain"
            />
          </View>
        </View>
        <View style={styles.categoryBox}>
          <Text style={styles.settingCategory}>Advanced Settings</Text>
          <View style={{ ...styles.snapworkerBox, paddingVertical: 18 }}>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <Text style={styles.advancedSettingName}>Space Visibility:</Text>
              <Text style={Font.text400}> Public</Text>
            </View>
            <Text style={{ ...Font.header, color: Colors.green, fontSize: 12 }}>
              Edit
            </Text>
          </View>
          <View style={{ ...styles.snapworkerBox, paddingVertical: 18 }}>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <Text style={styles.advancedSettingName}>Public Link:</Text>
              <Text
                style={{ ...Font.text400, width: Sizes.width - 200 }}
                numberOfLines={1}
                ellipsizeMode="tail"
              >
                {" "}
                http://snapwork.com/anasnj738saasdasdawas123132vg1231c
              </Text>
            </View>
            <Text style={{ ...Font.header, color: Colors.green, fontSize: 12 }}>
              Copy Link
            </Text>
          </View>
          <View
            style={{
              ...styles.snapworkerBox,
              paddingVertical: 18,
            }}
          >
            <Text style={Font.text400}>Mute Notifications</Text>
            <View style={{ height: 20, width: 30, justifyContent: "center" }}>
              <Switch
                trackColor={{ false: Colors.darkGrey, true: Colors.green }}
                thumbColor={muteNotifications ? "#fff" : "#fff"}
                ios_backgroundColor="#3e3e3e"
                onValueChange={toggleSwitch}
                value={muteNotifications}
              />
            </View>
          </View>
          <View
            style={{
              ...styles.snapworkerBox,
              paddingVertical: 18,
              paddingBottom: 7,
              borderBottomWidth: 0,
            }}
          >
            <Text
              style={{ ...styles.advancedSettingName, color: Colors.softRed }}
            >
              Archive Space
            </Text>
            <SimpleLineIcons name="trash" size={18} color={Colors.softRed} />
          </View>
        </View>
      </ScrollView>
    </Container>
  );
};

export default SpacesSetting;

const styles = StyleSheet.create({
  settingCategory: {
    ...Font.header,
    fontSize: 12,
    textAlign: "left",
  },
  categoryBox: {
    width: "100%",
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderBottomColor: Colors.borderColor,
  },
  settingName: {
    ...Font.text400,
    color: "black",
    textAlign: "left",
  },
  snapworkerBox: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: Sizes.width - 50,
    borderBottomColor: Colors.borderColor,
    borderBottomWidth: 1,
    paddingVertical: 10,
    paddingRight: 20,
  },
  countIcon: {
    height: 17,
    width: 17,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.lightBlue,
    borderRadius: 17,
    marginLeft: 5,
  },
  advancedSettingName: { ...Font.text400, color: Colors.darkBlue },
});
