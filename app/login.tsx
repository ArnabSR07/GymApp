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
import { useRouter } from "expo-router";
const Login = () => {
  const backgroundImage = require("../src/assets/images/loginImage.png");
  const router = useRouter()
  return (
    <View className="flex flex-col h-full bg-white">
      <Image source={backgroundImage} className="w-full h-[45%] bg-cover" />
      <View
        className="bg-white h-[60%] absolute bottom-8 px-10"
        style={{ borderTopStartRadius: 50, borderTopEndRadius: 50 }}
      >
        <Text className="py-10  text-2xl" style={{fontFamily:'InterSemiBold'}}>Welcome Back!</Text>

        <Text className="text-black" style={{fontFamily:"InterBold"}}>EMAIL</Text>
        <TextInput className="w-full border-b-hairline mb-5"></TextInput>
        <Text className="text-black" style={{fontFamily:"InterBold"}}>PASSWORD</Text>
        <View className="flex-row items-center justify-center relative rounded-t-lg mb-5">
          <TextInput
            secureTextEntry={true}
            className="w-full border-b-hairline mt-4 mb-5"
          ></TextInput>
          <AntDesign
            name="eye"
            size={18}
            color="black"
            className="absolute right-6"
          />
        </View>

        <Text className="text-center text-gray-500 mt-4 mb-2 underline" style={{fontFamily:"InterRegular"}}>
          Forgot password?
        </Text>
        <Link href="/signup" asChild>
          <Text className="text-center text-gray-500 mt-5 mb-3 underline" style={{fontFamily:"InterRegular"}}>
            Create an account
          </Text>
        </Link>

        
          <TouchableOpacity className="w-full bg-yellow-500 rounded-xl absolute z-10 bottom-12 self-center py-3 mt-3 " onPress={() => router.replace("(tabs)")}>
            <Text className="text-center text-2xl" style={{fontFamily:"InterMedium"}}>Login</Text>
          </TouchableOpacity>
        
      </View>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({});
