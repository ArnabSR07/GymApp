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

const Age = () => {
  const ages = Array.from({ length: 61 }, (_, i) => i + 10); // 10 → 70
  const [selectedAge, setSelectedAge] = useState(26);

  const flatListRef = useRef(null);

  const ITEM_WIDTH = 60; // width for each number item

  const onScroll = (event) => {
    const index = Math.round(event.nativeEvent.contentOffset.x / ITEM_WIDTH);
    setSelectedAge(ages[index]);
  };
  return (
    <View className="bg-gray-900 py-12  h-full">
      <View className="flex flex-col gap-8 px-8">
        <Link href="/fitnessLevel" asChild>
          <Entypo name="chevron-thin-left" size={24} color="white" />
        </Link>
        <Text className="text-3xl text-white" style={{fontFamily:'InterBold'}}>
          How old are you?
        </Text>
      </View>

      <View className="flex flex-col items-center justify-between h-full py-20">
        {/* Age bar */}
        <View className="flex flex-col justify-center gap-6 items-center">
          <View className="bg-black h-40 items-center justify-center">
            {/* Top yellow triangle */}
            <View className="w-5 h-5 border-l-8 border-r-8 border-b-8 border-b-yellow-500 mb-3" />

            <FlatList
              ref={flatListRef}
              horizontal
              data={ages}
              showsHorizontalScrollIndicator={false}
              snapToInterval={ITEM_WIDTH}
              decelerationRate="fast"
              contentContainerStyle={{ paddingHorizontal: ITEM_WIDTH * 3.25 }}
              onScroll={onScroll}
              scrollEventThrottle={16}
              renderItem={({ item }) => {
                const isSelected = item === selectedAge;

                return (
                  <View
                    style={{ width: ITEM_WIDTH }}
                    className="items-center justify-center"
                  >
                    <Text
                      className={`${
                        isSelected
                          ? "text-white text-5xl font-bold"
                          : "text-gray-500 text-xl"
                      }`}
                    >
                      {item}
                    </Text>
                  </View>
                );
              }}
            />

            {/* Bottom yellow triangle */}
            <View className="w-5 h-5 border-l-8 border-r-8 border-t-8 border-t-yellow-500 mt-2" />
          </View>
          <Text className="w-full text-center text-white" style={{fontFamily:'InterSemiBold'}}>YEARS OLD</Text>
        </View>

        <View className="px-8 w-full">
          <Link href="/goals" asChild>
            <TouchableOpacity className="rounded-xl w-full px-8 py-4 mb-10 bg-purple-600">
              <Text className="w-full text-center text-white text-xl" style={{fontFamily:'InterMedium'}}>
                Next
              </Text>
            </TouchableOpacity>
          </Link>
        </View>
      </View>
    </View>
  );
};

export default Age;

const styles = StyleSheet.create({});
