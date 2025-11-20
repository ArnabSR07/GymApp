import React from "react";
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import ProgressBar from "@/src/components/progressBar";
const Statistics = () => {
  const calenderImg = require("@/src/assets/images/calendar.png");
  return (
    <View className="bg-gray-300 h-full">
      <View className="bg-black  pt-12 pb-8">
        <View className="flex flex-row justify-between items-center mb-3 px-8">
          <Text className="text-lg text-white" style={{fontFamily:'InterMedium'}}>STATISTICS</Text>
          <TouchableOpacity className="rounded-lg bg-yellow-500 px-5 py-2">
            <Text className="text-white" style={{fontFamily:'InterMedium'}}>Week</Text>
          </TouchableOpacity>
        </View>
        <ScrollView className="h-[35%]">
          <View className="flex flex-row items-center justify-center mb-28">
            <Image source={calenderImg} />
          </View>
        </ScrollView>
      </View>

      <View
        className="bg-gray-300  h-[65%] absolute bottom-0 py-10 px-8 w-full"
        style={{ borderTopStartRadius: 50, borderTopEndRadius: 50 }}
      >
        <Text className="text-2xl font-semibold mb-10">Today's Workout</Text>
        <View className="flex flex-row gap-8 items-center justify-center">
          <View className="rounded-xl bg-white py-6 px-10 flex flex-col gap-5  items-center justify-center">
            <Text style={{fontFamily:'InterMedium'}}>Active Time</Text>
            <Text className="text-xl" style={{fontFamily:'InterBold'}}>58</Text>
            <Text className="text-xl" style={{fontFamily:'InterBold'}}>MIN</Text>
          </View>
          <View className="rounded-xl bg-white py-6 px-10 flex flex-col gap-5  items-center justify-center">
            <Text style={{fontFamily:'InterMedium'}}>Active Time</Text>
            <Text className="text-xl" style={{fontFamily:'InterBold'}}>58</Text>
            <Text className="text-xl" style={{fontFamily:'InterBold'}}>MIN</Text>
          </View>
        </View>

        <ScrollView className="my-5 bg-white px-8 py-10 rounded-xl" showsVerticalScrollIndicator={false}>
          <Text className="text-lg mb-5" style={{fontFamily:'InterMedium'}}>Upper Body</Text>
          <View className="flex flex-row justify-start px-8 gap-2 items-center">
            <Text className="text-lg font-bold">83%</Text>
            <Text className="text-gray-500">Completed</Text>
          </View>
          <View className="flex flex-row justify-center items-center w-full my-3">
          <ProgressBar completed={83} total={100} />
        </View>
          <View className="mb-20 flex flex-col gap-4 items-start justify-between">
            <View>
              <Text className="mb-3" style={{fontFamily:'InterSemiBold'}}>1.Muscle</Text>
            </View>
            <View>
              <Text className="mb-3" style={{fontFamily:'InterSemiBold'}}>1.Muscle</Text>
            </View>
            <View>
              <Text className="mb-3" style={{fontFamily:'InterSemiBold'}}>1.Muscle</Text>
            </View>
            <View>
              <Text className="mb-3" style={{fontFamily:'InterSemiBold'}}>1.Muscle</Text>
            </View>
            <View>
              <Text className="mb-3" style={{fontFamily:'InterSemiBold'}}>1.Muscle</Text>
            </View>
            <View>
              <Text className="mb-3" style={{fontFamily:'InterSemiBold'}}>1.Muscle</Text>
            </View>
            <View>
              <Text className="mb-3" style={{fontFamily:'InterSemiBold'}}>1.Muscle</Text>
            </View>
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

export default Statistics;

const styles = StyleSheet.create({});
