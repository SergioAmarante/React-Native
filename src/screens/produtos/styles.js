import { StyleSheet, Platform } from "react-native";

const styles = StyleSheet.create({
  container: {
    height: Platform.OS === "web" ? "100vh" : "100%",
    backgroundColor: "#7b4c7a",
  },
  conteudo1: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
    alignItems: "center",
  },
  content: {
    width: "100%",
    backgroundColor: "#7b4c7a",
  },
  image: {
    resizeMode: "contain",
  },
  button: {
    height: 50,
    margin: 15,
    alignItems: "center",
    borderRadius: 30,
    justifyContent: "center",
    backgroundColor: "#321731",
  },
  buttonComprar: {
    marginHorizontal: 80,
    backgroundColor: '#321731'
  }
});

export default styles;
