import { goals } from "@/src/assets/assets";
import HorizontalLine from "@/src/components/horizontalLine";
import Entypo from "@expo/vector-icons/Entypo";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { Link } from "expo-router";
import React, { useState } from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const Goals = () => {
  const [selectedGoals, setSelectedGoals] = useState<string[]>([]);

  const handleSelect = (goal: string) => {
    if (selectedGoals.includes(goal)) return;
    if (selectedGoals.length < 3) {
      setSelectedGoals([...selectedGoals, goal]);
    }
  };

  const handleRemove = (goal: string) => {
    setSelectedGoals(selectedGoals.filter((g) => g !== goal));
  };

  return (
    <View className="bg-gray-900 py-12 px-8 h-full">
      <View className="flex flex-col gap-8">
        <Link href="/age" asChild>
          <Entypo name="chevron-thin-left" size={24} color="white" />
        </Link>
        <Text className="text-3xl text-white" style={{fontFamily:'InterBold'}}>
          What's your top 3 goals ?
        </Text>

        {/* Selected Goals */}
        <View className="flex flex-col gap-4">
          {selectedGoals.length > 0 &&
            selectedGoals.map((goal, index) => {
              return (
                <View
                  key={index}
                  className="flex flex-row w-full items-center justify-between"
                >
                  <View className="flex flex-row items-center justify-center gap-6">
                    <Text className="text-white text-lg" style={{fontFamily:'InterSemiBold'}}>
                      #{index + 1}
                    </Text>
                    <Text className="text-white text-lg" style={{fontFamily:'InterSemiBold'}}>
                      {goal}
                    </Text>
                  </View>
                  <TouchableOpacity onPress={() => handleRemove(goal)}>
                    <MaterialIcons name="cancel" size={24} color="orange" />
                  </TouchableOpacity>
                </View>
              );
            })}
        </View>
        <HorizontalLine />
        <ScrollView horizontal={true}>
          <View className="flex flex-row gap-6  items-center justify-center">
            {goals.map((goal, index) => {
              return (
                <TouchableOpacity
                  key={index}
                  onPress={() => handleSelect(goal)}
                  className="bg-gray-500 rounded-full px-4 py-2"
                >
                  <Text className="text-center w-full text-white" style={{fontFamily:'InterSemiBold'}}>{goal}</Text>
                </TouchableOpacity>
              );
            })}
          </View>
        </ScrollView>
      </View>

      
        <Link href="/heightAndWeight" asChild>
          <TouchableOpacity className="rounded-xl self-center px-8 py-4 mb-10 bg-purple-600 absolute bottom-12 mx-auto" style={{width:"95%"}}>
            <Text className="w-full text-center text-white text-xl" style={{fontFamily:'InterMedium'}}>Next</Text>
          </TouchableOpacity>
        </Link>
      
    </View>
  );
};

export default Goals;

const styles = StyleSheet.create({});
