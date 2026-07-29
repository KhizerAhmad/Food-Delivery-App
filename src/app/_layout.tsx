import { Stack } from "expo-router";
import CartProvider from "./providers/CartProvider";

export default function RootLayout() {
  return (
    <CartProvider>
      <Stack>
        <Stack.Screen name="index" options={{title:"Role Bases Access"}}/>
        <Stack.Screen name="(admin)" options={{headerShown:false}}/>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="cart" options={{ title: "Cart", presentation: "modal", animation: "slide_from_bottom", }} />
      </Stack>
    </CartProvider>
  );
};

