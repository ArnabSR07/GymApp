import AntDesign from "@expo/vector-icons/AntDesign";
import { Link } from "expo-router";
import React from "react";
import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import "../global.css";
const Signup = () => {
  const backgroundImage = require("../src/assets/images/loginImage.png");
  return (
    <View className="flex flex-col h-full bg-white">
      <Image source={backgroundImage} className="w-full h-[45%] bg-cover" />
      <View
        className="bg-white h-[60%] absolute bottom-8 px-10"
        style={{ borderTopStartRadius: 50, borderTopEndRadius: 50 }}
      >
        <Text className="py-10  text-2xl" style={{fontFamily:'InterSemiBold'}}>Welcome Back!</Text>
        <Text className="text-black" style={{fontFamily:'InterBold'}}>NAME</Text>
        <TextInput className="w-full border-b-hairline py-2 mt-2 mb-3"></TextInput>
        <Text className="text-black" style={{fontFamily:'InterBold'}}>EMAIL</Text>
        <TextInput className="w-full border-b-hairline mt-2 mb-3"></TextInput>
        <Text className="text-black" style={{fontFamily:'InterBold'}}>PASSWORD</Text>
        <View className="flex-row items-center justify-center  relative rounded-t-lg mb-5">
          <TextInput secureTextEntry={true} className="w-full border-b-hairline py-2 mt-3 mb-3"></TextInput>
          <AntDesign
            name="eye"
            size={18}
            color="black"
            className="absolute right-6"
          />
        </View>
        <Link href="/login" asChild>
          <Text className="text-center text-purple-700 mb-5 underline" style={{fontFamily:"InterRegular"}}>
            Already have an account ? Log in
          </Text>
        </Link>

        <Link href="/trainerOrUser" asChild>
        <TouchableOpacity className="w-full bg-purple-500 absolute bottom-12 self-center rounded-xl py-3 mt-3">
          <Text className="text-center text-white font-semibold text-2xl" style={{fontFamily:'InterMedium'}}>
            Signup
          </Text>
        </TouchableOpacity>
        </Link>
      </View>
    </View>
  );
};

export default Signup;

const styles = StyleSheet.create({});
