import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Colors, Sizes } from "../Styles/Constants";

const Container = (props) => {
  return (
    <View style={{ ...styles.container, ...props.style }}>
      {props.children}
    </View>
  );
};

const Header = (props) => {
  return (
    <View style={{ ...styles.header, ...props.style }}>{props.children}</View>
  );
};

const Section = (props) => {
  return (
    <View style={{ ...styles.section, ...props.style }}>{props.children}</View>
  );
};

export { Container, Header, Section };

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    width: Sizes.width,
    height: "100%",
    alignItems: "center",
  },
  header: {
    flexDirection: "row",
    backgroundColor: "white",
    width: "100%",
    height: 45,
    alignItems: "center",
    justifyContent: "space-between",
    elevation: 10,
    paddingHorizontal: 30,
  },
  section: {
    backgroundColor: "white",
    width: Sizes.width,
    height: "100%",
    paddingHorizontal: 35,
  },
});
