import React from "react";
import { FlatList, Text, View } from "react-native";

export default function index() {
  const data = [
    {
      id: "1",
      name: "Item 1",
    },
  ];

  return (
    <FlatList
      data={data}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <View className="p-4 border-b border-gray-200 bg-yellow-100">
          <Text>{item.name}</Text>
        </View>
      )}
    />
  );
}
