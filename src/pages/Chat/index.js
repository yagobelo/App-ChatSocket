import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";
import * as Animatable from "react-native-animatable";

import { Message } from "../../components/Message";

export default function Chat() {
  const primeiraMensagem = "Testando mensagem grande grande grande grande";
  const segundaMensagem = "Testando mensagem menor";
  const terceiraMensagem =
    "Testando mensagem muito muito muito muito muito grande grande grande grande";

  return (
    <View style={styles.container}>
      <Animatable.View
        animation={"fadeInLeft"}
        deley={1000}
        style={styles.containerHeader}
      >
        <Text style={styles.textHeader}>Olá, Usuário!</Text>
      </Animatable.View>

      <Animatable.View
        animation={"zoomIn"}
        delay={1000}
        style={styles.containerChat}
      >
        <Message text={primeiraMensagem} />
        <Message text={segundaMensagem} />
        <Message text={terceiraMensagem} />
      </Animatable.View>

      <Animatable.View
        animation={"zoomInDown"}
        deley={1000}
        style={styles.containerForm}
      >
        <TextInput
          style={styles.input}
          placeholder="Digite sua mensagem aqui..."
          placeholderTextColor={"white"}
        ></TextInput>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.textButton}>Enviar</Text>
        </TouchableOpacity>
      </Animatable.View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#264653",
  },
  containerHeader: {
    paddingTop: 50,
    marginStart: 20,
  },
  textHeader: {
    fontSize: 30,
    color: "white",
    fontWeight: "bold",
  },
  containerChat: {
    backgroundColor: "white",
    width: "90%",
    height: "80%",
    alignSelf: "center",
    padding: 20,
    marginTop: 10,
    borderRadius: 15,
    flex: 2,
  },
  containerForm: {
    backgroundColor: "white",
    width: "95%",
    margin: 5,
    borderRadius: 15,
    flexDirection: "row",
    padding: 10,
    alignSelf: "center",
  },
  input: {
    backgroundColor: "grey",
    width: "85%",
    height: 40,
    borderTopLeftRadius: 15,
    borderBottomLeftRadius: 15,
    color: "white",
    fontSize: 20,
    padding: 5,
  },
  button: {
    backgroundColor: "#06d6a0",
    width: "15%",
    borderTopRightRadius: 15,
    borderBottomRightRadius: 15,
    alignItems: "center",
    justifyContent: "center",
  },
  textButton: {
    color: "#264653",
    fontSize: 15,
    fontWeight: "bold",
  },
});
