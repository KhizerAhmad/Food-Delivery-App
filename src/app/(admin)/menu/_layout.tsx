import { FontAwesome } from "@expo/vector-icons";
import { Link, Stack } from "expo-router";
import { Pressable } from "react-native";

export default function MenuLayout() {
  return (
    <Stack
      screenOptions={{
        headerShadowVisible: true,
        headerStyle: {
          backgroundColor: "#ffffff", 
        },
        headerTitleAlign: "center",
      }}
    >
      <Stack.Screen
        name="index"
        options={{
          title: "Menu",
          headerTitleStyle: {
            fontSize: 26,
            fontWeight: "bold",
          },
          headerRight: () => (
          <Link href={"/(admin)/menu/create"} asChild>
            <Pressable style={{ paddingHorizontal: 10 }}>
              {({ pressed }) => (
                <FontAwesome 
                  name="plus-square-o" 
                  size={25} 
                  color="#3b82f6"
                  style={{opacity: pressed ? 0.5 : 1 }}
                />
              )}
            </Pressable>
          </Link>
        ),
        }}
      />
      
    </Stack>
  );
}