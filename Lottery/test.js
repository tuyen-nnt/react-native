import React from "react";
import {
  ImageBackground,
  View,
  StyleSheet,
  Text,
  SafeAreaView,
} from "react-native";
import colors from "../config/colors";




function WelcomeScreen(props) {
  return (
    

      <Image 
      blurRadius={10}
      fadeDuration={1000}
      source={{ width: 200,
        height: 300,
        uri: "https://picsum.photos/seed/picsum/200/300"

      }}
      />



      <ImageBackground
        resizeMode="contain"
        style={styles.background}
        soure={require("../assets/background.jpg")}
      ></ImageBackground>
  );
}

export default WelcomeScreen;

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },

  welcomeButton: {
    backgroundColor: "gold",
    flex: 1,
    justifyContent: "center",
    alignItems: "flex-end",
    flexDirection: "row",
  },

  loginButton: {
    backgroundColor: "dodgerblue",
    width: 100,
    height: 100,
    bottom: 20,
  },

  registerButton: {
    backgroundColor: "grey",
    width: 100,
    height: 100,
    bottom: 20,
  },
});

