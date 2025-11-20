import React from "react";
import { ImageBackground, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import "../global.css";
import { Link } from "expo-router";

const Home = () => {
  const backgroundImage = require("../src/assets/images/fitness-man.png");
  return (
    <ImageBackground
      style={{}}
      className="flex-1 justify-center items-center p-5 opacity-70"
      source={backgroundImage}
      resizeMode="cover"
    >
       <View className="absolute inset-0 bg-black/50" />
      <View className="flex-1 justify-center items-center p-5 w-full absolute bottom-32">
        <Text className="text-white text-5xl mb-3" style={{fontFamily: 'InterBold'}}>
          Unleash your inner athlete.
        </Text>
        <Text className="text-white" style={{fontFamily:"InterRegular"}}>
         High intensity training:anytime and anywhere. Start training today!
        </Text>
        <Link href="/authPage" asChild>
        <TouchableOpacity className="bg-purple-700 rounded-xl px-10 py-5 mt-16 w-full">
          <Text className="text-white text-xl text-center" style={{fontFamily:'InterSemiBold'}}>Get Started</Text>
        </TouchableOpacity>
        </Link>
      </View>
    </ImageBackground>
  );
};

export default Home;

const styles = StyleSheet.create({});
