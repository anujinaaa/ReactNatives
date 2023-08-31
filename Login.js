import React from "react";
import { View, Text, Button } from "react-native";
import {
  StyleSheet,
  Alert,
  TouchableOpacity,
  // Image,
  TextInput,
} from "react-native";

import MyButton from "./MyButton";

const Login = ({ navigation }) => {
  return (
    <View style={css.container}>
      <Text style={css.text}>Login</Text>
      <TextInput style={css.input} placeholder="UserName" />
      <TextInput style={css.input} placeholder="Password" />
      <Button
        title="Continue"
        color=""
        onPress={() => Alert.alert("Alert hiigdlee")}
      />
      <Button
        title="forget password?"
        color="black"
        onPress={() => Alert.alert("Nevterlee")}
      />
      <Text style={{ color: "black" }}>
        .....................................................................
      </Text>
      <Text style={{ color: "black" }}>
        or you can login with one of the following{" "}
      </Text>

      <TouchableOpacity
        onPress={() => Alert.alert("Alert hiigdlee")}
        style={css.button}
      >
        <Text style={css.textStyle}>Sign in with Twitter </Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => Alert.alert("Alert hiigdlee")}
        style={css.button}
      >
        <Text style={css.textStyle}>Sing in with Facebook</Text>
      </TouchableOpacity>

      <MyButton btnTitle="Butsah" onClick={() => navigation.pop()} />
    </View>
  );
};

const css = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "black",
    width: 300,
    height: 35,
    fontSize: 30,
    textAlign: "center",
    alignItems: "center",
    justifyContent: "center",
  },
  textStyle: {
    color: "black",
    width: 300,
    height: 35,
    fontSize: 20,
    textAlign: "center",
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    backgroundColor: "lightblue",
    marginVertical: 8,
    borderRadius: 10,
  },
  input: {
    width: "70%",
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius: 5,
  },
});

export default Login;
