import { View, Text } from 'react-native';
import React from 'react';
import Button from './components/Button';
import { Link } from 'expo-router';

const index = () => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', padding: 10 }}>
      <Link href={"../(auth)/sign_in?role=tabs"} asChild>
        <Button text="User" />
      </Link>
      <Link href={'../(auth)/sign_in?role=admin'} asChild>
        <Button text="Admin" />
      </Link>
    </View>
  );
};

export default index;