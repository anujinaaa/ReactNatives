import React from "react";
import {View, Text, Button} from "react-native";
// import axios from "axios";
import {
  StyleSheet,
  Alert,
  TouchableOpacity,
  // Image,
  TextInput,
} from "react-native";

const Home = ({navigation}) => {

          // const [neg, setNeg] = useState("");
          // const [hoyr, setHoyr] = useState("");
          // const burtgrl =()=>{
          //   const dat ={
          //      Usename:neg,
          //      password:hoyr,
          //      exem:true
          //   }
          // };
  // axios
  //   .post(
  //     "https://reactnative-d549e-default-rtdb.firebaseio.com/burtgel.json",
  //     dat
  //   )
  //   .then((Response) => {
  //     alert("amjilttai bvrtgelee");
  //   })
  //   .catch((error) => alert(error));

    //  useEffect(() => {
    //    axios
    //      .get(
    //        "https://reactnative-d549e-default-rtdb.firebaseio.com/burtgel.json"
    //      )
    //      .then((Response) => {
    //        setGuraw(Object.values(Response.data));
    //      });
    //  });

  return (
    <View style={css.con}>
      <View style={css.container}>
        <Text style={css.text}>Sign up</Text>
        <TextInput
          style={css.input}
          // onChange={(el) => setNeg(el.target)}
          placeholder="LastName"
        />
        <TextInput
          style={css.input}
          // onChange={(el) => setHoyr(el.target)}
          placeholder="FirstName"
        />
        <TextInput style={css.input} placeholder="Number" />
        <TextInput style={css.input} placeholder="email" />
        <TextInput style={css.input} placeholder="Password" />
        <Button
          title="Continue"
          color=""
          onPress={() => Alert.alert("Alert hiigdlee")}
        />
        <Button
          title="forget password?"
          color="black"
          onPress={() => Alert.alert("Alert hiigdlee")}
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
        <Button
          title="Login"
          color="black"
          marginButton="100"
          onPress={() => navigation.navigate("Login")}
        />
        <Button
          title="FlexBox"
          color="black"
          marginButton="100"
          onPress={() => navigation.navigate("FlexBox")}
        />
        <Button
          title="FlastListScreen"
          color="black"
          marginButton="100"
          onPress={() => navigation.navigate("FlastListScreen")}
        />
        <Button
          title="Vegetable"
          color="black"
          marginButton="100"
          onPress={() => navigation.navigate("Vegetable")}
        />
        <Button
          title="ToDo"
          color="black"
          marginButton="100"
          onPress={() => navigation.navigate("ToDo")}
        />
      </View>
    </View>
  );
}

const css = StyleSheet.create({
  con: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    margin:20
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
    marginVertical: 10,
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

export default Home;