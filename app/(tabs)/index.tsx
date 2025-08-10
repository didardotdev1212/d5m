import Card from "@/components/Card";
import React, { useState } from "react";
import { FlatList, Pressable, Text, TextInput, View } from "react-native";

type FilmType = {
  id: string;
  name: string;
  description: string;
};

export default function index() {
  const [Films, setFilms] = useState<FilmType[]>([]);
  const [name, setName] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [Error, setError] = useState<string>("");

  const AddFilm = () => {
    if (name.trim() === "") {
      setError("Name is required");
      return;
    }

    setFilms([
      ...Films,
      {
        id: Math.random().toString(),
        name: name,
        description: description,
      },
    ]);
    setName("");
    setDescription("");
    setError("");
  };

  return (
    <View>
      <FlatList
        data={Films}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <Card item={item} />}
      />
      <View className="p-4 bg-white border rounded-lg m-4 border-gray-200">
        <TextInput
          value={name}
          onChangeText={(text) => {
            setName(text);
            setError(""); // Clear error when user starts typing
          }}
          placeholder="Film Name"
          placeholderTextColor={"#999"}
          className="border border-gray-300 p-2 rounded mb-2"
        />
        {Error ? <Text className="text-red-500 mb-2">{Error}</Text> : null}
        <TextInput
          value={description}
          onChangeText={setDescription}
          placeholder="Enter Description"
          placeholderTextColor={"#999"}
          multiline
          numberOfLines={4}
          className="border h-[90px] border-gray-300 p-2 rounded mb-2"
        />
        <Pressable onPress={AddFilm} className="bg-blue-500 p-2 rounded-lg">
          <Text className="text-white text-center text-[24px]">Add Film</Text>
        </Pressable>
      </View>
    </View>
  );
}
