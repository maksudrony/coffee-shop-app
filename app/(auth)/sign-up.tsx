import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert, KeyboardAvoidingView, Platform, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';
import { Feather } from '@expo/vector-icons';
import CustomButton from '../../components/CustomButton';
import { registerUser } from '../../utils/auth';

export default function SignUpScreen() {
  const router = useRouter();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSignUp = async () => {
    if (!name || !email || !password) {
      Alert.alert('Error', 'Please fill in all fields');
      return;
    }
    setLoading(true);
    const { user, error } = await registerUser(email, password);
    setLoading(false);
    if (error) {
      Alert.alert('Sign Up Failed', error);
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
            <Text className="text-[28px] font-bold text-blackText">Create Account</Text>
            <Text className="text-grayText text-center mt-2">Sign up to get started!</Text>
          </View>

          {/* Form */}
          <View className="gap-y-4">
            {/* Full Name Input */}
            <View>
              <Text className="text-sm font-bold text-blackText mb-2 ml-1">Full Name</Text>
              <View className="flex-row items-center bg-white h-14 px-4 rounded-xl border border-gray-200">
                <Feather name="user" size={20} color="#9B9B9B" />
                <TextInput
                  placeholder="Full Name"
                  value={name}
                  onChangeText={setName}
                  className="flex-1 ml-3 text-blackText text-base h-full"
                  placeholderTextColor="#9B9B9B"
                />
              </View>
            </View>

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
            </View>
          </View>

          {/* Button */}
          <View className="mt-8">
            <CustomButton title={loading ? "Creating Account..." : "Sign Up"} onPress={handleSignUp} />
          </View>

          {/* Footer */}
          <View className="flex-row justify-center mt-8">
            <Text className="text-grayText">Already have an account? </Text>
            <TouchableOpacity onPress={() => router.push('/(auth)/sign-in')}>
              <Text className="text-[#C67C4E] font-bold">Login</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
