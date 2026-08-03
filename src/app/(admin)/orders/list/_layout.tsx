import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { NavigationContainer, NavigationIndependentTree } from '@react-navigation/native';
import ActiveOrdersScreen from './index';
import ArchivedOrdersScreen from './archive';

// Create a standard material top tab navigator
const Tab = createMaterialTopTabNavigator();

export default function OrdersTabs() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }} edges={['top']}>
      <NavigationIndependentTree>
        <NavigationContainer>
          <Tab.Navigator
            screenOptions={{
              tabBarActiveTintColor: '#000',
              tabBarIndicatorStyle: { backgroundColor: '#3b82f6', height: 3 },
              tabBarLabelStyle: { fontWeight: 'bold', textTransform: 'capitalize' },
            }}
          >
            <Tab.Screen 
              name="ActiveOrders" 
              component={ActiveOrdersScreen} 
              options={{ title: 'Active' }} 
            />
            <Tab.Screen 
              name="ArchivedOrders" 
              component={ArchivedOrdersScreen} 
              options={{ title: 'Delivered' }} 
            />
          </Tab.Navigator>
        </NavigationContainer>
      </NavigationIndependentTree>
    </SafeAreaView>
  );
}