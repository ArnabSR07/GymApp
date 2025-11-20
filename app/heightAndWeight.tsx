import HorizontalLine from "@/src/components/horizontalLine";
import Entypo from "@expo/vector-icons/Entypo";
import { Link } from "expo-router";
import React, { useRef, useState } from "react";
import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { useRouter } from "expo-router";

const HeightAndWeight = () => {
  const router = useRouter();
  const [selectedWeight, setSelectedWeight] = useState(60);
  const [selectedHeight, setSelectedHeight] = useState(150);
  const weights = Array.from({ length: 171 }, (_, i) => i + 30);
  const heights = Array.from({ length: 205 }, (_, i) => i + 10);
  const flatListRef = useRef(null);
  const ITEM_WIDTH = 60;

  const onScroll1 = (event) => {
    const index = Math.round(event.nativeEvent.contentOffset.x / ITEM_WIDTH);
    setSelectedHeight(heights[index]);
  };

  const onScroll2 = (event) => {
    const index = Math.round(event.nativeEvent.contentOffset.x / ITEM_WIDTH);
    setSelectedWeight(weights[index]);
  };

  return (
    <View className="bg-gray-900 flex-1">
      <View className="pt-12 px-8">
        <View className="flex flex-col gap-8">
          <Link href="/goals" asChild>
            <Entypo name="chevron-thin-left" size={24} color="white" />
          </Link>
          <Text className="text-3xl text-white" style={{fontFamily:'InterBold'}}>Find Details</Text>
        </View>
      </View>

      <View className="flex-1 justify-between px-8 py-24">
        {/* Height Section */}
        <View className="flex-1  gap-10 justify-center">
          <View className="flex flex-row items-center justify-between w-full mb-4">
            <Text className="text-white text-xl" style={{fontFamily:'InterSemiBold'}}>Height</Text>
            <View className="flex flex-row items-center justify-center gap-4">
              <TouchableOpacity className="rounded-full w-16 py-1 bg-gray-500">
                <Text className="text-white text-center">cm</Text>
              </TouchableOpacity>
              <TouchableOpacity className="rounded-full w-16 py-1 bg-gray-500">
                <Text className="text-white text-center">ft</Text>
              </TouchableOpacity>
            </View>
          </View>

          {/* Height Dial */}
          <View className="h-32 justify-center">
            <FlatList
              ref={flatListRef}
              horizontal
              data={heights}
              showsHorizontalScrollIndicator={false}
              snapToInterval={ITEM_WIDTH}
              decelerationRate="fast"
              contentContainerStyle={{ paddingHorizontal: ITEM_WIDTH * 3 }}
              onScroll={onScroll1}
              scrollEventThrottle={16}
              renderItem={({ item }) => {
                const isSelected = item === selectedHeight;
                return (
                  <View
                    style={{ width: ITEM_WIDTH }}
                    className="justify-center items-center"
                  >
                    <Text
                      className={`${
                        isSelected
                          ? "text-white text-5xl font-bold"
                          : "text-gray-500 text-xl"
                      }`} style={{fontFamily:'InterBold'}}
                    >
                      {item}
                    </Text>
                  </View>
                );
              }}
            />
          </View>
        </View>

        <HorizontalLine />

        {/* Weight Section */}
        <View className="flex-1 gap-10 justify-center">
          <View className="flex flex-row items-center justify-between w-full mb-4">
            <Text className="text-white text-xl" style={{fontFamily:'InterSemiBold'}}>Weight</Text>
            <View className="flex flex-row items-center justify-center gap-4">
              <TouchableOpacity className="rounded-full w-16 py-1 bg-gray-500">
                <Text className="text-white text-center">kg</Text>
              </TouchableOpacity>
              <TouchableOpacity className="rounded-full w-16 py-1 bg-gray-500">
                <Text className="text-white text-center">ft</Text>
              </TouchableOpacity>
            </View>
          </View>

          {/* Weight Dial */}
          <View className="h-32 justify-center">
            <FlatList
              ref={flatListRef}
              horizontal
              data={weights}
              showsHorizontalScrollIndicator={false}
              snapToInterval={ITEM_WIDTH}
              decelerationRate="fast"
              contentContainerStyle={{ paddingHorizontal: ITEM_WIDTH * 3 }}
              onScroll={onScroll2}
              scrollEventThrottle={16}
              renderItem={({ item }) => {
                const isSelected = item === selectedWeight;
                return (
                  <View
                    style={{ width: ITEM_WIDTH }}
                    className="justify-center items-center"
                  >
                    <Text
                      className={`${
                        isSelected
                          ? "text-white text-5xl font-bold"
                          : "text-gray-500 text-xl"
                      }`} style={{fontFamily:'InterBold'}}
                    >
                      {item}
                    </Text>
                  </View>
                );
              }}
            />
          </View>
        </View>

        {/* Next Button */}
       
          <TouchableOpacity className="rounded-xl py-4 absolute  bottom-20 self-center bg-cyan-300 mt-4" style={{width:"95%"}} onPress={() => router.replace("(tabs)")}>
            <Text className="text-white text-xl text-center" style={{fontFamily:'InterMedium'}}>Done</Text>
          </TouchableOpacity>
        
      </View>
    </View>
  );
};

export default HeightAndWeight;

const styles = StyleSheet.create({});