import {Tabs } from "expo-router";

export default function TabsLayout() {
  return (
    <Tabs>
      <Tabs.Screen name="index" options={{title:"Home"}}/>
      <Tabs.Screen name="menu" options={{title:"Our Menu"}}/>
      <Tabs.Screen name="[id]" options={{href:null}}/>
    </Tabs>
  );
};

