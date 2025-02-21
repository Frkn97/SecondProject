import * as React from "react";
import { View, Text } from "react-native";

export default function SecondLessonReader() {
  return (
    <View 
      style={{ 
        flex: 0.2,
        backgroundColor: "red" 
        }}>
      <Text
        style={{ 
            padding: 40, 
            fontSize: 30, 
            color: "yellow", 
        }}
        numberOfLines={3}>
        Welcome To SecondLessonProject
      </Text>
    </View>
  );
}
