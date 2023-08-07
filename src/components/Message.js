import React from "react";
import { View, Text, StyleSheet } from "react-native";

import * as Animatable from "react-native-animatable";

export const Message = ({ text }) => {
  return (
    <Animatable.View animation={"fadeInRight"} style={styles.container}>
      <View style={styles.containerMessage}>
        <Text style={styles.text}>{text}</Text>
        <View style={styles.teste}></View>
      </View>
      <View style={styles.containerUserName}>
        <Text style={styles.userName}>Usuário</Text>
      </View>
    </Animatable.View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "flex-end",
    flexDirection: "row",
  },
  containerMessage: {
    backgroundColor: "#264653",
    alignSelf: "center",
    padding: 5,
    margin: 5,
    borderRadius: 10,
    justifyContent: "center",
    maxWidth: "80%",
  },
  text: {
    color: "white",
    fontSize: 20,
  },
  teste: {
    backgroundColor: "#264653",
  },
  containerUserName: {
    justifyContent: "flex-end",
    paddingVertical: 5,
  },
  userName: {
    fontSize: 20,
    fontWeight: "bold",
  },
});
