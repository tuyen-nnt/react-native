import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  ImageBackground,
  Image,
  View,
  StyleSheet,
  Text,
  SafeAreaView,
  Button,
  Alert,
  Platform,
  TouchableOpacity,
} from "react-native";
import colors from "../config/colors";

const image = { uri: "https://reactjs.org/logo-og.png" };

function WelcomeScreen(props) {
  return (
    <ImageBackground
      style={styles.background}
      soure={image}
      resizeMode="contain"
    >
      <SafeAreaView style={styles.logoContainer}>
        <Image style={styles.logo} source={require("../assets/logo.jpg")} />
        <Text style={styles.logoName}>Lottery</Text>
      </SafeAreaView>

      <SafeAreaView style={styles.container}>
        <SafeAreaView style={styles.loginButton}>
          <TouchableOpacity
            onPress={() =>
              Alert.alert("Input your account:", "Username: ", [
                { text: "OK" },
                { text: "Cancel" },
              ])
            }
          >
            <Text style={{ fontWeight: "bold" }}> LOGIN </Text>
          </TouchableOpacity>
        </SafeAreaView>

        <SafeAreaView style={styles.registerButton}>
          <TouchableOpacity
            color="grey"
            onPress={() => console.log("Register tapped")}
          >
            <Text style={{ color: "white", fontWeight: "bold" }}>REGISTER</Text>
          </TouchableOpacity>
        </SafeAreaView>
      </SafeAreaView>
    </ImageBackground>
  );
}

export default WelcomeScreen;

const styles = StyleSheet.create({
  background: {
    backgroundColor: "#FB9BB7",
    flex: 1,
  },

  container: {
    //container
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-evenly",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,

    //alignContent: "space-evenly",
    alignItems: "flex-end",
    flexWrap: "wrap",
    alignContent: "flex-end",
    bottom: 30,
  },

  logoContainer: {
    position: "absolute",
    top: 300,
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "center",
  },

  logo: {
    width: 70,
    height: 70,
  },

  logoName: {
    fontSize: 40,
    fontWeight: "bold",
    color: "#141823",
    paddingLeft: 20,
  },

  loginButton: {
    backgroundColor: "#ffffff",
    width: 180,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 20,
    borderColor: "black",
    borderWidth: 1,
  },

  registerButton: {
    backgroundColor: "black",
    width: 180,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 20,
  },
});
