import { Tabs } from "expo-router";
import React from "react";
import { Image, StyleSheet, View } from "react-native";

const TabRoot = () => {
  const profileIcon = require("../../src/assets/images/profileIcon.png");
  const dumbleIcon = require("../../src/assets/images/dumbleIcon.png");
  const graphIcon = require("../../src/assets/images/graphIcon.png");
  const homeIcon = require("../../src/assets/images/homeIcon.png");
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          borderTopEndRadius: 30,
          borderTopStartRadius: 30,
          backgroundColor: "black",
          paddingTop: 20,
          paddingBottom: 20,
          position: "absolute",
          bottom: 0,
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                backgroundColor: focused ? "purple" : "transparent",
                padding: 10, // space around the icon
                borderRadius: 12, // makes it a rounded box
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Image
                source={homeIcon}
                style={{
                  width: 20,
                  height: 20,
                  tintColor: focused ? "white" : "white", // icon color inside the box
                }}
              />
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="workstat"
        options={{
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                backgroundColor: focused ? "purple" : "transparent",
                padding: 10,
                borderRadius: 12,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Image
                source={dumbleIcon}
                style={{
                  width: 20,
                  height: 20,
                  tintColor: focused ? "white" : "white",
                }}
              ></Image>
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="statistics"
        options={{
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                backgroundColor: focused ? "purple" : "transparent",
                padding: 10,
                borderRadius: 12,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Image
                source={graphIcon}
                style={{
                  width: 20,
                  height: 20,
                  tintColor: focused ? "white" : "white",
                }}
              ></Image>
            </View>
          ),
        }}
      />

      <Tabs.Screen
        name="profile"
        options={{
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                backgroundColor: focused ? "purple" : "transparent",
                padding: 10,
                borderRadius: 12,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Image
                source={profileIcon}
                style={{
                  width: 20,
                  height: 20,
                  tintColor: focused ? "white" : "white",
                }}
              ></Image>
            </View>
          ),
        }}
      />
    </Tabs>
  );
};

export default TabRoot;

const styles = StyleSheet.create({});
