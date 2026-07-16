import {Stack, useRouter } from "expo-router";
import { Pressable } from "react-native";

export default function RootLayout() {
    const router=useRouter();
  return (
    <Stack >
        <Stack.Screen name="index" options={{title:"Menu", headerBackground: () => (
            <Pressable 
              onPress={() => router.push("/menu/index")} 
              style={{ 
                height: 90, 
                backgroundColor: "#ffffff" 
              }} 
            />
          ),
          headerTitleStyle: {
            fontSize: 26, 
            fontWeight: "bold"
          }}}/>
        <Stack.Screen name="[id]" options={{title:"Details", headerBackground:()=>(
            <Pressable 
              onPress={() => router.push("/menu/[id]")} 
              style={{ 
                height: 90, 
                backgroundColor: "#ffffff" 
              }} 
            />
          ),
          headerTitleStyle: {
            fontSize: 26, 
            fontWeight: "bold"
          }
        }}/>
    </Stack>
  );
};

