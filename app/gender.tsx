import Entypo from "@expo/vector-icons/Entypo";
import { Link } from "expo-router";
import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

const Gender = () => {
  const [selected, setSelected] = useState("male");
  return (
    <View className="bg-gray-900 py-12 px-8 h-full">
      <View className="flex flex-col gap-8">
        <Link href="/trainerOrUser" asChild>
          <Entypo name="chevron-thin-left" size={24} color="white" />
        </Link>
        <Text className="text-3xl text-white" style={{fontFamily:'InterBold'}}>
          What's your sex?
        </Text>
      </View>

      <View className="flex flex-col items-center justify-between h-full py-20">
        <View className="flex flex-row items-center justify-center mt-32 gap-6">
          <TouchableOpacity onPress={() => setSelected("male")}>
            <View
              className={`rounded-lg  flex flex-row justify-center items-center w-40 h-40 px-5 py-10 ${selected === "male" ? "bg-yellow-500" : "bg-gray-700"}`}
            >
              <Text
                className={`text-xl ${
                  selected === "male" ? "text-black" : "text-white"
                }`} style={{fontFamily:'InterBold'}}
              >
                Male
              </Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => setSelected("female")}>
            <View
              className={`rounded-lg  flex flex-row justify-center items-center w-40 h-40 px-5 py-10 ${selected === "female" ? "bg-yellow-500" : "bg-gray-700"}`}
            >
              <Text
                className={`text-xl  ${selected === "female" ? "text-black" : "text-white"}`} style={{fontFamily:'InterBold'}}
              >
                Female
              </Text>
            </View>
          </TouchableOpacity>
        </View>
        <Link href="/fitnessLevel" asChild>
          <TouchableOpacity className="rounded-xl w-full px-8 py-4 mb-10 bg-purple-600">
            <Text className="w-full text-center text-white text-xl" style={{fontFamily:'InterMedium'}}>Next</Text>
          </TouchableOpacity>
        </Link>
      </View>
    </View>
  );
};

export default Gender;

const styles = StyleSheet.create({});
