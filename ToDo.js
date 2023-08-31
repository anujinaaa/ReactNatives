import {
  StyleSheet,
  Text,
  View,
  TextInput,
  FlatList,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";

const ToDo = () => {
  const [newItem, setNewItem] = useState("");
  const [items, setItems] = useState([]);
  const addTask = () => {
    setItems([...items, { newItem, id: Math.floor(Math.random() * 1e9) }]);
    setNewItem("");
  };
  const dl = (value) => {
    const updateState = items.filter((el) => el !== value);
    setItems(updateState);
  };
  // index, item, items === index edit => save 
  const edit = () => {
    
  }
  return (
    <View style={{ flex: 1, alignItems: "center" }}>
      <Text style={{ fontSize: 40 }}>To Do</Text>
      <TextInput
        value={newItem}
        onChangeText={(val) => setNewItem(val)}
        style={{
          width: "80%",
          height: 50,
          margin: 20,
          borderWidth: 1,
          padding: 10,
          borderRadius: 10,
        }}
        placeholder="Add..."
      ></TextInput>
      <View>
        <TouchableOpacity
          onPress={() => addTask()}
          style={{
            width: 330,
            height: 50,
            backgroundColor: "green",
            borderRadius: 10,
            alignItems: "center",
            justifyContent: "center",
            marginBottom: 20,
          }}
        >
          <Text>Add Task</Text>
        </TouchableOpacity>

        {/* 
        <TouchableOpacity>
          <Text>Edit</Text>
        </TouchableOpacity>

        <TouchableOpacity>
          <Text>Delete</Text>
        </TouchableOpacity> */}
        <FlatList
          data={items}
          keyExtractor={({ item }) => item.id}
          renderItem={({ item, index }) => (
            <View
              style={{
                width: "100%",
                height: 40,
                justifyContent: "center",
              }}
            >
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <View>
                  <Text>{item.newItem}</Text>
                </View>
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                  }}
                >
                  <Text style={{ marginRight: 10 }}>Edit</Text>
                  <Text onPress={() => dl(item)}>Delete</Text>
                </View>
              </View>
            </View>
          )}
        />
      </View>
    </View>
  );
};

export default ToDo;

const css = StyleSheet.create({});
