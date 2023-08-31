// import {
//   StyleSheet,
//   Text,
//   View,
//   FlatList,
//   TouchableOpacity,
//   Alert,
// } from "react-native";
// import React from 'react'

// const FlastListScreen = () => {
//     const persons = [
//       { name: "John", color: "#d62D31" },
//       { name: "Zoloo", color: "#Ae1438" },
//       { name: "Bold", color: "#74b9ff" },
//       { name: "Gizmo", color: "#26ae60" },
//       { name: "Grisha", color: "#6a89cc" },
//     ];
//   return (
//     <FlatList
//       data={persons}
//       renderItem={(element) => (
//         <TouchableOpacity onPress={() => Alert.alert(`Hi ${element.item.color} iim ongotei, ${element.item.name} nertei`)}>
//           <View
//             style={{
//               backgroundColor: element.item.color,
//               padding: 20,
//               marginHorizontal: 10,
//             }}
//           >
//             <Text>
//               {element.index + 1}. {element.item.name}. {element.item.color}
//             </Text>
//           </View>
//         </TouchableOpacity>
//       )}
//     />
//   );
// }

// export default FlastListScreen

// const styles = StyleSheet.create({})


import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  Alert,
  Button,
  Modal,
} from "react-native";
import React, { useState } from "react";
import Input from "./Input";
import ConfrimMofal from "./Mofal";
const FlatListScreen = () => {
  const generateRandomColor = () => {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  const [person, setPerson] = useState([
    { name: "Zoloo", color: generateRandomColor() },
    { name: "boldoo", color: generateRandomColor() },
    { name: "saraa", color: generateRandomColor() },
    { name: "naraa", color: generateRandomColor() },
    { name: "Naraa", color: generateRandomColor() },
    { name: "bata", color: generateRandomColor() },
  ]);
  const [addItem, setItem] = useState("");
  const [showModal, SetModal] = useState(false);
  const handleClick = (val) => {
    setItem(val);
  };

  const ModalShow = () => {
    SetModal(!showModal);
  };
  const DeleteItem = (name) => {
    //shine massiv uusgene darsan nernees busad nereer

    setPerson((oldPerson) => oldPerson.filter((el) => el.name !== name));
    SetModal(!showModal);
  };
  const close = () => {
    SetModal(!showModal);
  };
  return (
    <View>
      <ConfrimMofal show={showModal} dl={DeleteItem} close={close} />
      <View style={{ flexDirection: "column", padding: 20 }}>
        <Input onChangeText={handleClick} />
        <Button
          title="add"
          onPress={() =>
            setPerson([
              ...person,
              { name: addItem, color: generateRandomColor() },
            ])
          }
        />
      </View>
      <FlatList
        data={person}
        //   keyExtractor={}
        //   showsVerticalScrollIndicator
        //   horizontal
        renderItem={({ item, index }) => (
          <View
            key={index}
            style={{
              backgroundColor: item.color,
              padding: 15,
              height: 50,
              marginHorizontal: 10,
            }}
          >
            <TouchableOpacity>
              <Text>
                {index + 1} {item.name}
              </Text>
              <Text
                style={{ position: "absolute", right: 0 }}
                onPress={() => {
                  ModalShow(), DeleteItem(item.name);
                }}
              >
                Delete
              </Text>
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
};

export default FlatListScreen;

const styles = StyleSheet.create({});