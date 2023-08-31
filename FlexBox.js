import React from "react";
import { View } from "react-native";

const FlexBox = () => {
    return (
      //1.
      // <View style={{ flex: 1, margin: 5 }}>
      //   <View
      //     style={{ backgroundColor: "aqua", width: 401, height: 50 }}
      //   ></View>
      //   <View
      //     style={{
      //       flex: 3,
      //       flexDirection: "row",
      //       justifyContent: "space-evenly",
      //       alignItems: "stretch",
      //       margin: 5,
      //     }}
      //   >
      //     <View style={{ margin: 5 }}>
      //       <View
      //         style={{
      //           backgroundColor: "purple",
      //           width: 150,
      //           height: 230,
      //           margin: 5,
      //         }}
      //       ></View>
      //       <View
      //         style={{
      //           backgroundColor: "lightgreen",
      //           width: 150,
      //           height: 270,
      //           margin: 5,
      //         }}
      //       ></View>
      //     </View>
      //     <View style={{ flex: 2, margin: 5 }}>
      //       <View
      //         style={{
      //           backgroundColor: "yellow",
      //           width: 200,
      //           height: 350,
      //           margin: 5,
      //         }}
      //       ></View>
      //       <View
      //         style={{
      //           backgroundColor: "black",
      //           width: 200,
      //           height: 150,
      //           margin: 5,
      //         }}
      //       ></View>
      //     </View>
      //   </View>
      //   <View
      //     style={{
      //       flex: 1,
      //       backgroundColor: "white",
      //       flexDirection: "column",
      //       justifyContent: "space-evenly",
      //       alignItems: "stretch",
      //       margin: 5,
      //     }}
      //   >
      //     <View
      //       style={{
      //         backgroundColor: "white",
      //         margin: 5,
      //         flexDirection: "row",
      //         flex: 1,
      //       }}
      //     >
      //       <View
      //         style={{
      //           backgroundColor: "green",
      //           margin: 5,
      //           width: 250,
      //           height: 100,
      //         }}
      //       ></View>
      //       <View
      //         style={{
      //           backgroundColor: "pink",
      //           margin: 5,
      //           width: 120,
      //           height: 100,
      //         }}
      //       ></View>
      //     </View>
      //     <View
      //       style={{
      //         backgroundColor: "brown",
      //         margin: 5,
      //         width: 401,
      //         height: 50,
      //       }}
      //     ></View>
      //   </View>
      // </View>

      //2.

      <View style={{ flex: 1, margin: 5, flexDirection: "row" }}>
        <View style={{ flexDirection: "colom" }}>
          <View
            style={{
              backgroundColor: "pink",
              width: 100,
              height: 246,
              margin: 5,
            }}
          ></View>
          <View
            style={{
              backgroundColor: "pink",
              width: 100,
              height: 246,
              margin: 5,
            }}
          ></View>
          <View
            style={{
              backgroundColor: "pink",
              width: 100,
              height: 246,
              margin: 5,
            }}
          ></View>
        </View>

        <View
          style={{
            flex: 1,
            backgroundColor: "white",
            flexDirection: "row",
            margin: 5,
          }}
        >
          <View style={{ margin: 5 }}>
            <View
              style={{
                backgroundColor: "white",
                width: 265,
                height: 400,
                margin: 5,
                flexDirection: "row",
              }}
            >
              <View
                style={{
                  backgroundColor: "lightgreen",
                  width: 77,
                  height: 350,
                  margin: 5,
                }}
              ></View>
              <View
                style={{
                  backgroundColor: "lightgreen",
                  width: 77,
                  height: 350,
                  margin: 5,
                }}
              ></View>
              <View
                style={{
                  backgroundColor: "lightgreen",
                  width: 77,
                  height: 350,
                  margin: 5,
                }}
              ></View>
            </View>
            <View
              style={{
                backgroundColor: "black",
                width: 265,
                height: 350,
                margin: 5,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <View
                style={{
                  backgroundColor: "yellow",
                  width: 100,
                  height: 100,
                }}
              ></View>
            </View>
          </View>
        </View>
      </View>
    );
}

export default FlexBox;