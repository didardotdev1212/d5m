import React from "react";
import { Text, View } from "react-native";

export type FilmType = {
  id: string;
  name: string;
  description: string;
};

export default function Card({ item }: { item: FilmType }) {
  return (
    <View className="p-4 bg-white border rounded-lg m-2 border-gray-200">
      <Text className="text-lg font-bold mb-2">{item?.name}</Text>
      <Text className="text-gray-700" numberOfLines={3} ellipsizeMode="tail">
        {item?.description}
      </Text>
    </View>
  );
}
