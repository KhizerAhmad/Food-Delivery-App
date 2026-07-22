import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      <Stack.Screen name="cart" options={{presentation: "modal", animation: "slide_from_bottom",}} />
    </Stack>
  );
};

