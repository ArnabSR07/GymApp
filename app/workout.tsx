import { exercises } from "@/src/assets/assets";
import ProgressBar from "@/src/components/progressBar";
import Entypo from "@expo/vector-icons/Entypo";
import Feather from "@expo/vector-icons/Feather";
import SimpleLineIcons from "@expo/vector-icons/SimpleLineIcons";
import { Link } from "expo-router";
import React from "react";
import { useRouter } from "expo-router";
import {
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
const Workout = () => {
  const router = useRouter();
  const backgroundImage = require("../src/assets/images/workoutImage.png");
  return (
    <View className="flex flex-col h-full bg-gray-900">
      <ImageBackground
        source={backgroundImage}
        className="flex justify-between items-start h-[45%] py-12 px-5"
      >
        <Link href="/login" asChild>
          <Entypo name="cross" size={32} color="white" />
        </Link>
      </ImageBackground>
      <View
        className="bg-gray-900 py-5 flex flex-col items-center gap-5 justify-start h-[58%] absolute z-10 bottom-8  px-5 w-full"
        style={{ borderTopStartRadius: 50, borderTopEndRadius: 50 }}
      >
        <Text className="text-gray-500 text-lg" style={{fontFamily:'InterSemiBold'}}>Time Passed</Text>
        <Text className="text-5xl text-white" style={{fontFamily:'InterSemiBold'}}>6:22</Text>
        <View className="flex flex-row gap-4 items-center justify-center">
          <Text className="text-white text-xl" style={{fontFamily:'InterSemiBold'}}>Hang Snatch</Text>
          <Text className="text-gray-500 text-xl" style={{fontFamily:'InterSemiBold'}}>x20</Text>
        </View>
        <View className="flex flex-row justify-center items-center gap-4">
          <TouchableOpacity className="bg-gray-600 rounded-lg py-3 px-4">
            <Feather name="pause" size={24} color="white" />
          </TouchableOpacity>
         
            <TouchableOpacity className="bg-purple-600 rounded-lg py-3 px-10" onPress={() => router.replace("(tabs)")}>
              <Text className="text-white text-xl" style={{fontFamily:'InterMedium'}}>Next</Text>
            </TouchableOpacity>
         
        </View>
         <View className='flex flex-row justify-between items-center w-full px-8'>
                    <Text className='text-white text-lg'>Round 1</Text>
                    <Text className='text-white text-lg'>3/5</Text>
                  </View>
        <ProgressBar completed={3} total={5} />
      </View>
      <View
        className="bg-white absolute h-[25%] w-full bottom-0 py-5 px-5 z-20"
        style={{ borderTopStartRadius: 50, borderTopEndRadius: 50 }}
      >
        <Text className=" text-gray-700 text-sm mb-2">Up Next</Text>
        <View className="flex flex-row items-center justify-between">
          <View className="flex flex-row items-center gap-2">
            <Image source={exercises[0].image} className="w-15 h-15" />
            <Text className="text-lg" style={{fontFamily:'InterSemiBold'}}>{exercises[0].name}</Text>
          </View>
          <View className="flex flex-row items-center gap-2">
            <Text className="text-lg text-gray-500" style={{fontFamily:'InterBold'}}>
              x{exercises[0].frequency}
            </Text>
            <SimpleLineIcons
              name="options-vertical"
              className="text-gray-500"
              size={18}
              color="gray"
            />
          </View>
        </View>
      </View>
    </View>
  );
};

export default Workout;

const styles = StyleSheet.create({});
