import useStore from "@/store/filmsstore";
import React from "react";
import { Alert, Pressable, Text, View } from "react-native";

export type FilmType = {
  id: string;
  name: string;
  description: string;
};

export default function Card({ item }: { item: FilmType }) {
  const { DeleteFilm } = useStore();
  return (
    <View className="p-4 bg-white border relative rounded-lg m-2 border-gray-200">
      <Text className="text-lg font-bold mb-2">{item?.name}</Text>
      <Text className="text-gray-700" numberOfLines={3} ellipsizeMode="tail">
        {item?.description}
      </Text>
      <Pressable
        className="mt-2 bg-red-500 p-2 rounded-lg absolute top-2 right-2"
        onPress={() => {
          Alert.alert(
            `Delete Film ${item.name}`,
            "Are you sure you want to delete this film?",
            [
              {
                text: "Cancel",
                style: "cancel",
              },
              {
                text: "Delete",
                onPress: () => DeleteFilm(item.id),
                style: "destructive",
              },
            ],
            { cancelable: true }
          );
        }}
      >
        <Text className="text-white">Delete</Text>
      </Pressable>
    </View>
  );
}
