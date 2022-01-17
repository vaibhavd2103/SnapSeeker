import { Dimensions, StyleSheet } from "react-native";

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

const Sizes = {
  width: width,
  height: height,
  padding: 10,
  margin: 15,
};

const Colors = {
  green: "#1FCC79",
  darkBlue: "#3E5481",
  darkGrey: "#9FA5C0",
  yellow: "#FBD428",
  justBlue: "#2056C3",
  lightestGreen: "#FAFAFA",
  black: "#000000",
  softRed: "#FF5842",
  lightBlue: "#5BC0EB",
  mainText: "#2E3E5C",
  veryDarkBlue: "#0D253C",
  border: "#D0DBEA",
  borderColor: "rgba(159, 165, 192,0.2)",
};

const Font = StyleSheet.create({
  header: {
    fontSize: 15,
    color: Colors.darkBlue,
    fontFamily: "DMSans-Bold",
    textAlign: "center",
  },
  text500: {
    fontSize: 12,
    color: Colors.darkGrey,
    fontFamily: "DMSans-Medium",
    textAlign: "center",
  },
  text400: {
    fontSize: 12,
    color: Colors.darkGrey,
    fontFamily: "DMSans-Regular",
    textAlign: "center",
  },
  headerText: {
    color: Colors.darkBlue,
    fontFamily: "DMSans-Bold",
    textAlign: "center",
    letterSpacing: 2.9,
    lineHeight: 20,
    fontSize: 13,
  },
  button: {
    fontFamily: "Inter-Bold",
    fontSize: 15,
    lineHeight: 18,
    letterSpacing: 0.007,
    textAlign: "center",
    color: "white",
  },
});

export { Sizes, Colors, Font };
