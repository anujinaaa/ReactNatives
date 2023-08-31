import React from "react";
import { Button , View , StyleSheet} from "react-native";

const MyButton = ({btnTitle,onClick}) => {
    return(
        <View style={css.button}>
            <Button onPress={onClick} title={btnTitle}/>
        </View>
    )
}

const css = StyleSheet.create({
  button:{
    marginVertical: 5,
  },
});

export default MyButton