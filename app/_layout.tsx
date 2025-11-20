import { Stack } from "expo-router";
import { useFonts } from "expo-font";
export default function RootLayout() {
  const [loaded] = useFonts({
    InterBold: require("../src/assets/fonts/Inter_24pt-Bold.ttf"),
    InterSemiBold : require("../src/assets/fonts/Inter_28pt-SemiBold.ttf"),
    InterRegular : require("../src/assets/fonts/Inter_28pt-Regular.ttf"),
    InterMedium : require("../src/assets/fonts/Inter_28pt-Medium.ttf")
});
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="index" />
      <Stack.Screen name="authPage" />
      <Stack.Screen name="signup" />
      <Stack.Screen name="trainerOrUser" />
      <Stack.Screen name="gender" />
      <Stack.Screen name="fitnessLevel" />
      <Stack.Screen name="age" />
      <Stack.Screen name="goals" />
      <Stack.Screen name="heightAndWeight" />
      <Stack.Screen name="login" />
      

      <Stack.Screen name="(tabs)" />
      <Stack.Screen name="fatBurner" />
      <Stack.Screen name="preview" />
      <Stack.Screen name="workout" />
    </Stack>
  );
}
