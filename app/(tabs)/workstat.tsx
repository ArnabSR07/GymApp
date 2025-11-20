import ProgressBar from "@/src/components/progressBar";
import AntDesign from "@expo/vector-icons/AntDesign";
import Entypo from "@expo/vector-icons/Entypo";
import Feather from "@expo/vector-icons/Feather";
import SimpleLineIcons from "@expo/vector-icons/SimpleLineIcons";
import React from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const Workstat = () => {
  return (
    <View className="bg-gray-200 pb-10 pt-24 px-8 h-full">
      <View className="flex flex-row text-center items-center justify-between mb-5">
        <Text className="text-2xl" style={{ fontFamily: "InterSemiBold" }}>
          MY WORKOUT'S
        </Text>
        <TouchableOpacity className="bg-cyan-300 rounded-lg px-8 py-2">
          <Text className="w-full flex flex-row justify-between items-center text-lg text-white">
            NEW
            <AntDesign name="plus" className="ml-3" size={20} color="white" />
          </Text>
        </TouchableOpacity>
      </View>

      <View className="bg-white rounded-xl px-5 py-8 my-10">
        <View className="flex flex-row justify-between items-center mb-5">
          <Text className="text-lg font-semibold">UPPER BODY</Text>
          <SimpleLineIcons name="options-vertical" size={18} color="black" />
        </View>

        {/* Exercises for partcular muscles */}
        <View className="flex flex-col gap-3">
          <View className="w-full flex flex-row justify-between items-center">
            <View className="flex flex-row items-center justify-center gap-3">
              <View className="h-10 w-10 bg-gray-300 rounded-full flex flex-row justify-center items-center">
                <Text className="text-lg font-bold">1</Text>
              </View>
              <Text className="text-lg" style={{ fontFamily: "InterBold" }}>
                Barbeel Press
              </Text>
            </View>
            <Text className="text-gray-500 font-semibold">3 X 20</Text>
          </View>
          <View className="w-full flex flex-row justify-between items-center">
            <View className="flex flex-row items-center justify-center gap-3">
              <View className="h-10 w-10 bg-gray-300 rounded-full flex flex-row justify-center items-center">
                <Text className="text-lg font-bold">1</Text>
              </View>
              <Text className="text-lg" style={{ fontFamily: "InterBold" }}>
                Barbeel Press
              </Text>
            </View>
            <Text className="text-gray-500 font-semibold">3 X 20</Text>
          </View>
          <View className="w-full flex flex-row justify-between items-center">
            <View className="flex flex-row items-center justify-center gap-3">
              <View className="h-10 w-10 bg-gray-300 rounded-full flex flex-row justify-center items-center">
                <Text className="text-lg font-bold">1</Text>
              </View>
              <Text className="text-lg" style={{ fontFamily: "InterBold" }}>
                Barbeel Press
              </Text>
            </View>
            <Text className="text-gray-500 font-semibold">3 X 20</Text>
          </View>
        </View>

        <View className="flex flex-row items-center justify-between my-8">
          <Text className="text-lg font-semibold">LEVEL 2</Text>
          <View className="flex flex-row items-center gap-2 justify-center">
            <Feather name="clock" size={14} color="gray" />
            <Text className="font-semibold">50 MIN</Text>
          </View>

          <TouchableOpacity className="rounded-xl bg-purple-500 px-4 py-2 flex flex-row gap-2">
            <Entypo name="controller-jump-to-start" size={18} color="white" />
            <Text className="text-white">START</Text>
          </TouchableOpacity>
        </View>
      </View>

      <ScrollView
        className="my-5 bg-white px-8 py-10 rounded-xl"
        showsVerticalScrollIndicator={false}
      >
        <Text className="text-lg mb-5" style={{ fontFamily: "InterSemiBold" }}>
          Upper Body
        </Text>
        <View className="flex flex-row justify-start px-8 gap-2 items-center">
          <Text className="text-lg font-bold">83%</Text>
          <Text className="text-gray-500">Completed</Text>
        </View>
        <View className="flex flex-row justify-center items-center w-full my-3">
          <ProgressBar completed={83} total={100} />
        </View>
        <View className="mb-20 flex flex-col gap-4 items-start justify-between">
          <View>
            <Text className="mb-3" style={{ fontFamily: "InterSemiBold" }}>
              1.Muscle
            </Text>
          </View>
          <View>
            <Text className="mb-3" style={{ fontFamily: "InterSemiBold" }}>
              1.Muscle
            </Text>
          </View>
          <View>
            <Text className="mb-3" style={{ fontFamily: "InterSemiBold" }}>
              1.Muscle
            </Text>
          </View>
          <View>
            <Text className="mb-3" style={{ fontFamily: "InterSemiBold" }}>
              1.Muscle
            </Text>
          </View>
          <View>
            <Text className="mb-3" style={{ fontFamily: "InterSemiBold" }}>
              1.Muscle
            </Text>
          </View>
          <View>
            <Text className="mb-3" style={{ fontFamily: "InterSemiBold" }}>
              1.Muscle
            </Text>
          </View>
          <View>
            <Text className="mb-3" style={{ fontFamily: "InterSemiBold" }}>
              1.Muscle
            </Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default Workstat;

const styles = StyleSheet.create({});
