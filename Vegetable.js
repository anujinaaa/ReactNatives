import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  Alert,
} from "react-native";
import React, { useState } from "react";

const Vegetable = () => {
  const [persons, setPersons] = useState([
    { name: "Spinach", price: "$1.00" },
    { name: "Tomato", price: "$2.00" },
    { name: "Beef", price: "$40.00" },
    { name: "Banana", price: "$3.00" },
    { name: "Apple", price: "$2.00" },
  ]);

  const [showModal, SetModal] = useState(false);

  const Modal = () => {
    SetModal(!showModal);
  };
  const Delete = (name) => {
    setPersons((old) => old.filter((el) => el.name !== name));
    SetModal(!showModal);
  };

  return (
    <FlatList
      data={persons}
      renderItem={({ item, index }) => (
        <TouchableOpacity
          style={{
            backgroundColor: "pink",
            margin: 10,
            width: 395,
            height: 90,
            borderRadius: 10,
          }}
          onPress={() =>
            Alert.alert(
              `Hi ${item.price} iim ongotei, ${item.name} nertei`
            )
          }
        >
          <View
            style={{
              padding: 20,
              marginHorizontal: 10,
            }}
          >
            <TouchableOpacity>
              <Text>
                {index + 1}. {item.name} - {item.price}.
              </Text>

              <Text
                style={{ position: "absolute", right: 0 }}
                onPress={() => {
                  Modal(), Delete(item.name);
                }}
              >
                Delete
              </Text>
            </TouchableOpacity>
          </View>
        </TouchableOpacity>
      )}
    />
  );
};

export default Vegetable;

const styles = StyleSheet.create({});
