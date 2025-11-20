import Entypo from "@expo/vector-icons/Entypo";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useEvent } from "expo";
import { useRouter } from "expo-router";
import { useVideoPlayer, VideoView } from "expo-video";
import React, { useState } from "react";
import {
  ActivityIndicator,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { muscles } from "../src/assets/assets.js";

const videoSource =
  require("@/src/assets/videos/exerciseVdo.mp4");

const Preview = () => {
  const router = useRouter();
  const [error, setError] = useState(null);
  
  const player = useVideoPlayer(videoSource, (player) => {
    player.loop = true;
    player.muted = false;
  });

  const { isPlaying } = useEvent(player, "playingChange", {
    isPlaying: player.playing,
  });

  const { status } = useEvent(player, "statusChange", {
    status: player.status,
  });

  // Auto-play when loaded
  React.useEffect(() => {
    if (status === "readyToPlay" && !isPlaying) {
      player.play();
    }
  }, [status]);

  return (
    <View className="flex flex-col h-full bg-black">
      {/* Video Section */}
      <View className="h-[55%]">
        <VideoView
          player={player}
          allowsFullscreen
          allowsPictureInPicture
          nativeControls={false}
          style={styles.video}
          contentFit="cover"
          
          
        />

        {/* Loading Indicator */}
        {(status === "loading" || !isPlaying) && (
          <View className="absolute inset-0 justify-center items-center bg-black/50">
            <ActivityIndicator size="large" color="#34ebde" />
            <Text className="text-white mt-4">
              {status === "loading" ? "Loading..." : "Buffering..."}
            </Text>
          </View>
        )}

        {/* Error Message */}
        {status === "error" && (
          <View className="absolute inset-0 justify-center items-center bg-black">
            <Text className="text-white text-center px-4">
              Failed to load video
            </Text>
          </View>
        )}

        {/* Back Button Overlay */}
        <View className="absolute top-12 left-5 z-10">
          <TouchableOpacity 
            onPress={() => router.replace("(tabs)")}
            className="bg-black/30 rounded-full p-2"
          >
            <Entypo name="chevron-left" size={32} color="white" />
          </TouchableOpacity>
        </View>

        {/* Play/Pause Button (for debugging) */}
        <View className="absolute bottom-1/2  self-center z-10">
          <TouchableOpacity
            onPress={() => {
              if (isPlaying) {
                player.pause();
              } else {
                player.play();
              }
            }}
            className="bg-black/50 rounded-full p-3"
          >
            <Ionicons
              name={isPlaying ? "pause" : "play"}
              size={24}
              color="white"
            />
          </TouchableOpacity>
        </View>
      </View>

      {/* Content Section */}
      <View
        className="bg-white absolute bottom-0 h-[50%] flex-1 px-5 py-10"
        style={{ borderTopStartRadius: 50, borderTopEndRadius: 50 }}
      >
        <Text className="text-3xl text-black mb-5" style={{fontFamily:'InterBold'}}>Fat Burner</Text>

        <View className="flex flex-row justify-between items-center w-full my-6">
          <TouchableOpacity
            className="rounded-xl py-3 px-5 mr-4"
            style={{ backgroundColor: "#34ebde" }}
          >
            <Text className="text-2xl text-white text-center" style={{fontFamily:'InterMedium'}}>
              + Exercise
            </Text>
          </TouchableOpacity>

          <View className="flex flex-row items-center gap-2">
            <Text className="font-bold text-black" style={{fontFamily:'InterBold'}}>Level 2</Text>
            <Ionicons name="timer-outline" size={22} color="gray" />
            <Text className="font-bold text-black" style={{fontFamily:'InterBold'}}>2 MIN</Text>
          </View>
        </View>

        <Text className="text-lg text-black mb-5" style={{fontFamily:'InterBold'}}>
          Muscles Involved
        </Text>

        <View className="flex flex-row w-full gap-6 flex-wrap">
          {muscles.map((muscle, index) => {
            return (
              <View
                key={index}
                className="px-3 py-2 border border-gray-600 rounded-md"
              >
                <Text className="w-20 text-center text-gray-500 text-xs" style={{fontFamily:'InterMedium'}}>
                  {muscle}
                </Text>
              </View>
            );
          })}
        </View>
      </View>
    </View>
  );
};

export default Preview;

const styles = StyleSheet.create({
  video: {
    width: "100%",
    height: "100%",
    backgroundPosition:"center"
  },
});