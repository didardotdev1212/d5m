import Card from "@/components/Card";
import useStore from "@/store/filmsstore";
import React, { useState } from "react";
import {
  FlatList,
  KeyboardAvoidingView,
  Platform,
  Pressable,
  Text,
  TextInput,
  View,
} from "react-native";
export default function index() {
  const { films, AddFilm } = useStore();
  const [name, setName] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [Error, setError] = useState<string>("");

  const AddFilmHandler = () => {
    if (name.trim() === "") {
      setError("Name is required");
      return;
    }
    if (name.length < 3) {
      setError("Name must be at least 3 characters long");
      return;
    }
    AddFilm({
      id: Math.random().toString(),
      name: name,
      description: description,
    });
    setName("");
    setDescription("");
    setError("");
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : undefined}
      keyboardVerticalOffset={Platform.OS === "ios" ? 90 : 0}
      style={{ flex: 1 }}
    >
      <FlatList
        data={films}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <Card item={item} />}
        style={{ maxHeight: "80%" }}
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
        <Pressable
          onPress={AddFilmHandler}
          className="bg-blue-500 p-2 rounded-lg"
        >
          <Text className="text-white text-center text-[24px]">Add Film</Text>
        </Pressable>
      </View>
    </KeyboardAvoidingView>
  );
}
