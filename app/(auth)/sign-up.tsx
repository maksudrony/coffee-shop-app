import React from 'react';
import { View, Text } from 'react-native';
import { useRouter } from 'expo-router';
import CustomButton from '../../components/CustomButton';

// Mock Sign Up if they want email/password later
export default function SignUpScreen() {
  const router = useRouter();

  return (
    <View className="flex-1 bg-light justify-center px-6">
      <Text className="text-3xl font-bold text-blackText text-center mb-10">Create Account</Text>
      <CustomButton title="Back to Sign In" onPress={() => router.back()} />
    </View>
  );
}
