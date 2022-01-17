import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { Container, Header } from "../Components/GlobalComponents";
import { Colors, Font, Sizes } from "../Styles/Constants";
import GlobalStyles from "../Styles/GlobalStyles";
import axios from "axios";
import { Feather } from "@expo/vector-icons";

const Spaces = (props) => {
  const [people, setPeople] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filteredData, setFilteredData] = useState([]);
  const [searchText, setSearchText] = useState("");
  useEffect(() => {
    const fetchPeople = async () => {
      await axios.get("https://api.tvmaze.com/people").then((response) => {
        //    console.log(response.data);
        setPeople(response.data);
        setLoading(false);
      });
    };
    fetchPeople();
  }, []);

  const handleSearch = (text) => {
    const query = text.toLowerCase();
    const result = people.filter((item) => {
      if (item.name) {
        return item.name.toLowerCase().indexOf(query) >= 0;
      }
    });
    setFilteredData(result);
  };

  return (
    <Container>
      <Header>
        {/* Icon */}
        <TouchableOpacity style={GlobalStyles.headerButton}>
          {/* <Image
            source={require("../../assets/Back.png")}
            style={{
              height: 15,
              width: 15,
            }}
            resizeMode="contain"
          /> */}
        </TouchableOpacity>
        <Text style={Font.headerText}>SPACES</Text>
        <View style={GlobalStyles.headerButton}></View>
      </Header>
      <FlatList
        data={
          searchText.length === 0
            ? people.slice(0, 10)
            : filteredData.slice(0, 5)
        }
        keyExtractor={(item) => item.id}
        ListEmptyComponent={() => {
          return (
            <Text style={{ ...Font.header, marginTop: 50 }}>
              No such Space found
            </Text>
          );
        }}
        style={{
          width: Sizes.width,
        }}
        ListHeaderComponent={
          <View
            style={{
              paddingHorizontal: 30,
              paddingTop: 18,
            }}
          >
            <View
              style={{
                ...GlobalStyles.InputView,
                backgroundColor: "#F4F5F7",
                borderWidth: 0,
              }}
            >
              <Feather name="search" size={20} color={Colors.darkBlue} />
              <TextInput
                value={searchText}
                onChangeText={(text) => {
                  setSearchText(text);
                  handleSearch(text);
                }}
                placeholder="Search"
                placeholderTextColor={Colors.darkGrey}
                style={styles.input}
              />
            </View>
          </View>
        }
        renderItem={({ item, i }) => {
          if (i < 10) {
            return null;
          } else {
            return (
              <>
                {loading && <Text style={{ ...Font.header }}>loading</Text>}
                <TouchableOpacity
                  style={styles.box}
                  onPress={() => {
                    props.navigation.navigate("SpacesChat", item);
                    console.log(item);
                  }}
                >
                  <View
                    style={{
                      flexDirection: "row",
                      alignItems: "center",
                    }}
                  >
                    <Image
                      source={{
                        uri:
                          item && item.image && item.image.original
                            ? item.image.original
                            : "data:image/png;base64,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",
                      }}
                      style={{
                        height: 55,
                        width: 55,
                        borderRadius: 55,
                        marginRight: 10,
                      }}
                    />
                    <View
                      style={{
                        alignItems: "flex-start",
                      }}
                    >
                      <Text
                        style={{
                          ...Font.header,
                          color: "black",
                          fontSize: 12,
                        }}
                      >
                        {item.name}
                      </Text>
                      <Text
                        style={{
                          ...Font.text400,
                          color: Colors.darkBlue,
                          lineHeight: 20,
                        }}
                      >
                        {item && item.country && item.country.name
                          ? item.country.name
                          : "Unknown"}
                      </Text>
                      <Text style={{ ...Font.text400 }}>
                        Created on{" "}
                        {item && item.birthday ? item.birthday : "Unknown"}
                      </Text>
                    </View>
                  </View>
                  <View>
                    <Image
                      source={require("../../assets/HashMessage.png")}
                      style={{ height: 20, width: 20 }}
                      resizeMode="contain"
                    />
                    <View style={styles.icon}>
                      <Text
                        style={{ ...Font.header, color: "white", fontSize: 10 }}
                      >
                        3
                      </Text>
                    </View>
                  </View>
                </TouchableOpacity>
              </>
            );
          }
        }}
      />
    </Container>
  );
};

export default Spaces;

const styles = StyleSheet.create({
  input: {
    fontFamily: "DMSans-Bold",
    flex: 1,
    paddingLeft: 10,
    color: Colors.mainText,
    fontSize: 15,
  },
  box: {
    width: "100%",
    paddingHorizontal: 35,
    paddingVertical: 25,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  profilePhoto: {
    height: 55,
    width: 55,
    borderRadius: 55,
  },
  icon: {
    height: 17,
    width: 17,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.lightBlue,
    borderRadius: 20,
    position: "absolute",
    top: -10,
    right: -7,
  },
});
