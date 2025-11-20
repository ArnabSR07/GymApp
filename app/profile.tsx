import Entypo from "@expo/vector-icons/Entypo";
import React from "react";
import { ImageBackground, StyleSheet, Text, View } from "react-native";
import HorizontalLine from "@/src/components/horizontalLine";

const Profile = () => {
  const profilePic = require("@/src/assets/images/profileImg.png");
  return (
    <View className="bg-gray-200 flex flex-col h-full">
      <View className="bg-white h-[45%] w-full py-10 px-8">
        <View className="flex flex-row w-[66%] justify-between">
          <Entypo name="edit" size={24} color="black" />
          <Text className="text-xl font-semibold mb-8">MY PROFILE</Text>
        </View>
        <View className="flex flex-row justify-center text-center">
          <ImageBackground
            className="h-28 w-28 rounded-full mb-3"
            source={profilePic}
            resizeMode="cover"
          ></ImageBackground>
        </View>
        <Text className=" text-center text-black font-semibold text-2xl mb-2">Esther Browen</Text>
        <Text className="text-green-700 text-lg text-center">Free Member</Text>
      </View>
      <View className="w-full bg-gray-200 h-[65%] flex flex-col justify-start items-center absolute bottom-0"  style={{ borderTopStartRadius: 50, borderTopEndRadius: 50 }}>
        <View className="px-8 w-full flex flex-row justify-between my-6 items-center">
            <Text className="text-lg font-semibold">Become a pro member</Text>
            <Entypo name="chevron-small-right" size={32} color="black" />
        </View>
        <View className="px-8 w-full flex flex-row justify-between my-6 items-center">
            <Text className="text-lg font-semibold">My Fitness Data</Text>
            <Entypo name="chevron-small-right" size={32} color="black" />
        </View>
        <View className="px-8 w-full flex flex-row justify-between my-6 items-center">
            <Text className="text-lg font-semibold">Workout</Text>
            <Entypo name="chevron-small-right" size={32} color="black" />
        </View>
        <HorizontalLine/>
        <View className="px-8 w-full flex flex-row justify-between my-6 items-center">
            <Text className="text-lg text-gray-600 font-semibold">Invite a friend</Text>
            <Entypo name="chevron-small-right" size={32} color="gray" />
        </View>
        <View className="px-8 w-full flex flex-row justify-between my-6 items-center">
            <Text className="text-lg text-gray-600 font-semibold">Help</Text>
            <Entypo name="chevron-small-right" size={32} color="gray" />
        </View>
      </View>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({});
