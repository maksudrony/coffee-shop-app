import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert, KeyboardAvoidingView, Platform, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';
import { Feather } from '@expo/vector-icons';
import CustomButton from '../../components/CustomButton';
import { loginUser } from '../../utils/auth';

export default function SignInScreen() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {
    if (!email || !password) {
      Alert.alert('Error', 'Please fill in all fields');
      return;
    }
    setLoading(true);
    const { user, error } = await loginUser(email, password);
    setLoading(false);
    if (error) {
      Alert.alert('Login Failed', error);
    } else {
      router.replace('/(tabs)');
    }
  };

  return (
    <SafeAreaView className="flex-1 bg-[#F9F9F9]" edges={['top', 'bottom']} style={{ flex: 1, backgroundColor: '#F9F9F9' }}>
      <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} className="flex-1" style={{ flex: 1 }}>
        <ScrollView contentContainerStyle={{ flexGrow: 1, justifyContent: 'center', padding: 24 }}>
          {/* Header */}
          <View className="items-center mb-10">
            <Text className="text-[28px] font-bold text-blackText">Welcome Back!</Text>
            <Text className="text-grayText text-center mt-2">Login to your existing account of Coffee Shop</Text>
          </View>

          {/* Form */}
          <View className="gap-y-4">
            {/* Email Input */}
            <View>
              <Text className="text-sm font-bold text-blackText mb-2 ml-1">Email Address</Text>
              <View className="flex-row items-center bg-white h-14 px-4 rounded-xl border border-gray-200">
                <Feather name="mail" size={20} color="#9B9B9B" />
                <TextInput
                  placeholder="Email Address"
                  value={email}
                  onChangeText={setEmail}
                  autoCapitalize="none"
                  keyboardType="email-address"
                  className="flex-1 ml-3 text-blackText text-base h-full"
                  placeholderTextColor="#9B9B9B"
                />
              </View>
            </View>

            {/* Password Input */}
            <View>
              <Text className="text-sm font-bold text-blackText mb-2 ml-1">Password</Text>
              <View className="flex-row items-center bg-white h-14 px-4 rounded-xl border border-gray-200">
                <Feather name="lock" size={20} color="#9B9B9B" />
                <TextInput
                  placeholder="Password"
                  value={password}
                  onChangeText={setPassword}
                  secureTextEntry
                  className="flex-1 ml-3 text-blackText text-base h-full"
                  placeholderTextColor="#9B9B9B"
                />
              </View>
              <TouchableOpacity className="self-end mt-2">
                <Text className="text-[#C67C4E] font-bold text-sm">Forgot Password?</Text>
              </TouchableOpacity>
            </View>
          </View>

          {/* Button */}
          <View className="mt-8">
            <CustomButton title={loading ? "Logging in..." : "Login"} onPress={handleLogin} />
          </View>

          {/* Footer */}
          <View className="flex-row justify-center mt-8">
            <Text className="text-grayText">Don't have an account? </Text>
            <TouchableOpacity onPress={() => router.push('/(auth)/sign-up')}>
              <Text className="text-[#C67C4E] font-bold">Sign Up</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
