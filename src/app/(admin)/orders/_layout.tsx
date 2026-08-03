import { Stack } from "expo-router";

export default function OrdersLayout(){
    return (
        <Stack>
            <Stack.Screen
        name="list"
        options={{
          title: "Orders",
          headerTitleStyle: {
            fontSize: 26,
            fontWeight: "bold",
          },
          headerTitleAlign:"center",
          headerShown:false
        }}
      />
        </Stack>
    )
}