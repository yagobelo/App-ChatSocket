import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

import * as Animatable from "react-native-animatable";

export default function Welcome() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Animatable.View
        animation={"fadeInLeft"}
        deley={500}
        style={styles.containerHeader}
      >
        <Text style={styles.textHeader}>Bem-Vindo(a)</Text>
      </Animatable.View>

      <Animatable.View animation={"fadeInUp"} style={styles.containerForm}>
        <Text style={styles.textTitle}>
          Digite um nome de Usuário para entrar no Chat
        </Text>
        <TextInput
          style={styles.input}
          placeholder="Ex: Usuario"
          placeholderTextColor={"white"}
        ></TextInput>

        <TouchableOpacity
          onPress={() => navigation.navigate("Chat")}
          style={styles.button}
        >
          <Text style={styles.textButton}>ENTRAR</Text>
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
    paddingTop: "20%",
    marginStart: 20,
  },
  textHeader: {
    fontSize: 30,
    color: "white",
    fontWeight: "bold",
  },
  containerForm: {
    backgroundColor: "white",
    flex: 2,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    padding: "5%",
    marginTop: 20,
    alignItems: "center",
  },
  textTitle: {
    fontSize: 20,
    marginTop: 10,
    color: "#264653",
  },
  input: {
    backgroundColor: "#264653",
    borderRadius: 15,
    width: "60%",
    padding: 10,
    margin: 20,
    textAlign: "center",
    color: "white",
    fontSize: 20,
  },
  button: {
    backgroundColor: "#06d6a0",
    padding: 20,
    borderRadius: 25,
    width: "40%",
    alignItems: "center",
  },
  textButton: {
    color: "#264653",
    fontSize: 15,
    fontWeight: "bold",
  },
});
