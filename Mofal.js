import {
  StyleSheet,
  Text,
  View,
  Modal,
  Button,
  SafeAreaView,
} from "react-native";
import React from "react";

const ConfrimMofal = (props) => {
  return (
    <Modal visible={props.show}>
      <SafeAreaView
        style={{
          flex: 1,
          backgroundColor: "#CAD5E2",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text>ustgahad itgeltei bain uu</Text>
        <SafeAreaView>
          <Button title="ustgah" onPress={props.dl} />
          <Button title="bolih" onPress={props.close} />
        </SafeAreaView>
      </SafeAreaView>
    </Modal>
  );
};

export default ConfrimMofal;

const styles = StyleSheet.create({});
