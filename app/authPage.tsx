import { Link } from "expo-router";
import React from "react";
import {
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import "../global.css";

const authPage = () => {
  const backgroundImage = require("../src/assets/images/fitness-woman.png");
  return (
    <ImageBackground
      className="flex-1 justify-center items-center p-5"
      source={backgroundImage}
      resizeMode="cover"
    >
      <View className="absolute bottom-32 flex-1 justify-center items-start w-full p-3">
        <Image source={require("../src/assets/images/videoIcon.png")} />
        <Text className="text-5xl text-white mt-5 mb-10" style={{fontFamily:"InterBold"}}>
          Unleash your inner athlete.
        </Text>
        <Link href="/signup" asChild>
          <TouchableOpacity className="w-full bg-yellow-500 rounded-xl py-5 mb-5">
            <Text className="text-xl text-black text-center" style={{fontFamily:'InterMedium'}}>
              Sign Up
            </Text>
          </TouchableOpacity>
        </Link>

        <Link href="/login" asChild>
          <TouchableOpacity className="w-full bg-gray-500 rounded-xl py-5 opacity-80">
            <Text className="text-xl text-white text-center" style={{fontFamily:'InterMedium'}}>
              Login
            </Text>
          </TouchableOpacity>
        </Link>
      </View>
    </ImageBackground>
  );
};

export default authPage;

const styles = StyleSheet.create({});
