import { plans } from "@/src/assets/assets";
import PlanCard from "@/src/components/planCard";
import Feather from "@expo/vector-icons/Feather";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Link } from "expo-router";
import React from "react";
import {
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const home = () => {
  const heroImg = require("@/src/assets/images/homeImg.png");

  return (
    <View className="bg-gray-200 h-full">
      <View className="flex flex-row justify-between px-8 py-12">
        <Feather name="settings" size={24} color="black" />
        <Text className="font-bold text-2xl">HOME</Text>
        <Ionicons name="notifications-outline" size={24} color="black" />
      </View>
      <Text className="text-lg font-semibold mb-5 px-8" style={{fontFamily:'InterBold'}}>Featured Workouts</Text>
      <View className="rounded-lg px-4 h-60">
        <Link href="/fatBurner">
          <ImageBackground
            source={heroImg}
            className="flex-1 items-start justify-between h-full w-full rounded-lg py-10 px-8"
            resizeMode="contain"
          >
            <View className="flex flex-row items-start justify-between w-full">
              <TouchableOpacity className="bg-gray-600 rounded-lg px-3 py-1">
                <Text className="w-full text-center text-white" style={{fontFamily:'InterMedium'}}>Free</Text>
              </TouchableOpacity>
              <Text className="text-white w-1/3 text-xl" style={{fontFamily:'InterBold'}}>
                Whole Body Workout
              </Text>
            </View>
            <View className="flex flex-row   justify-between items-start w-full ">
              <Text className=" text-lg text-white" style={{fontFamily:'InterBold'}}>Level 2</Text>
              <View className="flex flex-row items-center justify-center w-1/3">
                <Feather name="watch" size={12} color="white" />
                <Text className="text-white font-semibold" style={{fontFamily:'InterBold'}}>GO MIN</Text>
              </View>
            </View>
          </ImageBackground>
        </Link>
      </View>

      <View
        className="bg-white w-full h-[55%] absolute bottom-0 py-10 px-5"
        style={{ borderTopStartRadius: 50, borderTopEndRadius: 50 }}
      >
        <View className="flex flex-row justify-between items-center mb-10">
          <Text className="text-xl" style={{fontFamily:'InterBold'}}>Plans Set</Text>
          <Text className="text-gray-500" style={{fontFamily:'InterBold'}}>see more</Text>
        </View>
        <ScrollView
          className=" py-5"
          horizontal={true}
          showsHorizontalScrollIndicator={false}
        >
          {plans.map((plan, index) => {
            return (
              <View key={index} className="mx-3 h-60 w-28 rounded-xl">
                <Link href="/preview" asChild>
                  <TouchableOpacity className="h-full">
                    <PlanCard plan={plan} />
                  </TouchableOpacity>
                </Link>
              </View>
            );
          })}
        </ScrollView>
      </View>
    </View>
  );
};

export default home;

const styles = StyleSheet.create({});
