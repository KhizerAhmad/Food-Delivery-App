import { Stack } from "expo-router";

export default function AuthLayout(){
    return (
        <Stack>
            <Stack.Screen name="sign_in" options={{title:"Sign In", headerTitleAlign:"center"}}/>
            <Stack.Screen name="sign_up" options={{title:"Sign Up", headerTitleAlign:"center"}}/>
        </Stack>
    )
}