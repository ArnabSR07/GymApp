import Entypo from "@expo/vector-icons/Entypo";
import { Link } from "expo-router";
import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

const trainerOrUser = () => {
  const [selected, setSelected] = useState("trainer");

  return (
    <View className="bg-gray-900 py-12 px-8 h-full">
      <Link href="/signup"> 
        <Entypo name="chevron-thin-left" size={24} color="white" />
      </Link> 

      <View className="flex flex-col items-center justify-between h-full py-20">
        <View className="flex flex-row items-center justify-center mt-36 gap-6">
          <TouchableOpacity onPress={() => setSelected("trainer")}>
            <View
              className={`rounded-lg  flex flex-row justify-center items-center w-40 h-40 px-5 py-10 ${selected === "trainer" ? "bg-yellow-500" : "bg-gray-700"}`}
            >
              <Text
                className={`text-xl ${
                  selected === "trainer" ? "text-black" : "text-white"
                }`} style={{fontFamily:"InterBold"}}
              >
                Trainer
              </Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => setSelected("user")}>
            <View
              className={`rounded-lg  flex flex-row justify-center items-center w-40 h-40 px-5 py-10 ${selected === "user" ? "bg-yellow-500" : "bg-gray-700"}`}
            >
              <Text
                className={`text-xl ${selected === "user" ? "text-black" : "text-white"}`} style={{fontFamily:"InterBold"}}
              >
                User
              </Text>
            </View>
          </TouchableOpacity>
        </View>
        <Link href="/gender" asChild>
          <TouchableOpacity className="rounded-xl w-full px-8 py-4 absolute self-center bottom-12 bg-purple-600">
            <Text className="w-full text-center text-white text-xl" style={{fontFamily:"InterMedium"}}>Next</Text>
          </TouchableOpacity>
        </Link>
      </View>
    </View>
  );
};

export default trainerOrUser;

const styles = StyleSheet.create({});
