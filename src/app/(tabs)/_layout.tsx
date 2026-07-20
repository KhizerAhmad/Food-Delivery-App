import {Tabs } from "expo-router";
import FontAwesome from "@expo/vector-icons/FontAwesome";

export default function TabsLayout() {
  return (
    <Tabs>
      <Tabs.Screen name="menu" options={{title:"Menu", tabBarIcon: ({ color }) => (
        <FontAwesome name="cutlery" size={20} color={color} />), headerShown:false}}
        />
      <Tabs.Screen name="menuPizza" options={{title:"Orders", tabBarIcon:({color})=>(
        <FontAwesome name="list" size={20} color={color} />)}}
        />
        <Tabs.Screen name="index" options={{href:null}}/>
    </Tabs>
  );
};

