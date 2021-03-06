import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
} from "react-native";

import styles from "./styles";


function Home({ navigation }) {
  function ver() {
    navigation.navigate("Products");
  }
  function logoff() {
    navigation.navigate("Login");
  }
  return (
    <View style={styles.container}>
      
      <View style={styles.conteudo}>
          <View style={styles.inputs}>
            <Text
              style={{
                color: "#000000",
                fontSize: 30,
                alignSelf: "center",
                marginBottom: 20,
              }}
            >
              Techshop
            </Text>
            <Text
              style={{
                color: "#F1F1F1",
                fontSize: 20,
                textAlign: "justify",
                marginBottom: 20,
                fontWeight: "300",
              }}
            >
             Techshop Sua Loja Virtual!
            </Text>
            <TouchableOpacity style={styles.button} onPress={ver}>
              <Text style={{ color: "#F1F1F1", fontSize: 20, fontWeight: "bold" }}>
                Produtos
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.button, styles.buttonLogoff]}
              onPress={logoff}
            >
              <Text style={{ color: "#F1F1F1", fontSize: 20, fontWeight: "bold" }}>
                Sair
              </Text>
            </TouchableOpacity>
          </View>
        </View>
    </View>
  );
}
export default Home;