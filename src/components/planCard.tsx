import React from "react";
import { ImageBackground, StyleSheet, Text } from "react-native";

type Plan = {
  title: string;
  image: any; // local require image
};

const PlanCard = ({ plan }: { plan: Plan }) => {
  return (
    <ImageBackground
      className="flex-1 items-start justify-end  rounded-xl py-3"
      source={plan.image}
      resizeMode="cover"
       imageStyle={{ borderRadius: 12,alignSelf:"center" }}
       
    >
      <Text className="text-center text-white w-full" style={{fontFamily:'InterBold'}}>{plan.title}</Text>
    </ImageBackground>
  );
};

export default PlanCard;

const styles = StyleSheet.create({});
