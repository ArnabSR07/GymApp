import Entypo from "@expo/vector-icons/Entypo";
import { Link } from "expo-router";
import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

const FitnessLevel = () => {
  const [selected, setSelected] = useState("Beginner");
  const levels = ["Beginner", "Intermediate", "Advanced"];
  return (
    <View className="bg-gray-900 py-12 px-8 h-full">
      <View className="flex flex-col gap-8">
        <Link href="/gender" asChild>
          <Entypo name="chevron-thin-left" size={24} color="white" />
        </Link>
        <Text className="text-3xl text-white" style={{fontFamily:'InterBold'}}>
          What's your fitness level ?
        </Text>
      </View>

      <View className="flex flex-col items-center justify-between h-full py-20">
        {/* Fitness Options */}
      
      <View className="flex flex-col gap-8 items-center justify-center w-full">
        {levels.map((level, index) => {
          return (<View key={index} className="flex flex-row items-center justify-start w-full gap-16">
            <View className="h-10 w-10 rounded-full bg-yellow-500"></View>
            <Text className="text-xl text-white" style={{fontFamily:'InterBold'}}>{level}</Text>
          </View>);
        })}
        </View>

        <Link href="/age" asChild>
          <TouchableOpacity className="rounded-xl w-full px-8 py-4 mb-20 bg-purple-600">
            <Text className="w-full text-center text-white text-xl" style={{fontFamily:'InterMedium'}}>Next</Text>
          </TouchableOpacity>
        </Link>
      </View>
    </View>
  );
};

export default FitnessLevel;

const styles = StyleSheet.create({});

