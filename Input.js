import React from "react";
import { TextInput, View } from "react-native";
import tw from "twrnc";
const Input = (props) => {
  return (
    <TextInput
      {...props}
      style={tw`w-11/12 my-1 rounded-lg mx-auto p-4 border border-stone-300	 android:pt-2`}
    />
  );
};

export default Input;
