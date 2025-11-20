import Entypo from "@expo/vector-icons/Entypo";
import SimpleLineIcons from "@expo/vector-icons/SimpleLineIcons";
import { Link, useRouter } from "expo-router";
import React from "react";
import {
  Image,
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { exercises, muscles } from "../src/assets/assets.js";

const FatBurner = () => {
  const router = useRouter();
  const backgroundImage = require("../src/assets/images/fatburner.png");
  return (
    <View className="flex flex-col h-full bg-white">
      <ImageBackground
        source={backgroundImage}
        className="flex justify-between items-start h-[45%] py-12 px-5"
      >
      
        <TouchableOpacity onPress={() => router.replace("(tabs)")}>
          <Entypo name="chevron-left" size={48} color="white" />
          </TouchableOpacity>
       

        <View className="flex-1 justify-end items-start w-full">
          <Text className="text-3xl text-white" style={{fontFamily:'InterBold'}}>Low Back</Text>
          <View className="flex flex-row items-center gap-6 mb-2">
            <Text className="text-lg text-white">Duration</Text>
            <Text className="text-lg text-white">Exercise</Text>
            <Text className="text-lg text-white">Level</Text>
          </View>
          <View className="flex flex-row items-center justify-between gap-16">
            <Text className=" text-white">20MIN</Text>
            <Text className=" text-white">06</Text>
            <Text className="text-lg text-white">2</Text>
          </View>
        </View>
      </ImageBackground>
      <View
        className="bg-white h-[56%] absolute bottom-8 px-5 w-full"
        style={{ borderTopStartRadius: 50, borderTopEndRadius: 50 }}
      >
        <Text className="text-lg mt-8 mb-5 w-full" style={{fontFamily:'InterSemiBold'}}>
          Muscles Involved
        </Text>
        <View className="flex flex-row w-full gap-6  flex-wrap">
          {muscles.map((muscle, index) => {
            return (
              <View
                key={index}
                className="px-3 py-2 border border-gray-600 rounded-md"
              >
                <Text className="w-20 text-center text-gray-500 text-xs" style={{fontFamily:'InterMedium'}}>
                  {muscle}
                </Text>
              </View>
            );
          })}
        </View>
        <Text className="font-bold text-lg my-5">Round 1</Text>
        <ScrollView className="pb-12 mb-3" showsVerticalScrollIndicator={false}>
          {exercises.map((exercises, index) => {
            return (
              <View
                key={index}
                className="flex flex-row items-center justify-between"
              >
                <View className="mb-4 flex flex-row items-center gap-2">
                  <Image source={exercises.image} className="h-20 w-20" />
                  <Text className="text-lg" style={{fontFamily:'InterSemiBold'}}>{exercises.name}</Text>
                </View>
                <View className="mb-4 flex flex-row items-center gap-4">
                  <Text className="text-lg text-gray-500 font-bold" style={{fontFamily:'InterBold'}}>
                    x{exercises.frequency}
                  </Text>
                  <SimpleLineIcons
                    name="options-vertical"
                    className="text-gray-500"
                    size={18}
                    color="gray"
                  />
                </View>
              </View>
            );
          })}
          <View className="w-full h-12"></View>
        </ScrollView>
        <Link href="/workout" asChild>
          <TouchableOpacity className="w-[80%] bg-purple-500 rounded-xl py-4 absolute bottom-8 self-center">
            <Text className="text-center text-white font-semibold text-2xl" style={{fontFamily:'InterMedium'}}>
              Start Now
            </Text>
          </TouchableOpacity>
        </Link>
      </View>
    </View>
  );
};

export default FatBurner;

const styles = StyleSheet.create({});
