import {Tabs } from "expo-router";
import FontAwesome from "@expo/vector-icons/FontAwesome";

export default function TabsLayout() {
  return (
    <Tabs screenOptions={{tabBarStyle:{borderRadius:30,backgroundColor:"#3b82f6"},tabBarInactiveTintColor:"gainsboro",tabBarActiveTintColor:"rgb(189, 192, 197)"}}>
      <Tabs.Screen name="menu" options={{title:"Menu", tabBarIcon: ({ color }) => (
        <FontAwesome name="cutlery" size={20} color={color} />), headerShown:false}}
        />
      <Tabs.Screen name="orders" options={{title:"Orders", tabBarIcon:({color})=>(
        <FontAwesome name="list" size={20} color={color} />), headerShown:false}}
        />
        <Tabs.Screen name="index" options={{href:null}}/>
    </Tabs>
  );
};

