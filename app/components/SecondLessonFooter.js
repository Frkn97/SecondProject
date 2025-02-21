import * as React from "react";
import { View, Text } from "react-native";

export default function SecondLessonFooter() {
  return (
    <View
      style={{
        backgroundColor: "red",
        marginBottom: 10,
      }}>
      <Text
        style={{
          fontSize: 18,
          color: "yellow",
          textAlign: "center",
        }}>
        All rights reserved by Ahmet Furkan Hüsmek, 2025{""}
      </Text>
    </View>
  );
}