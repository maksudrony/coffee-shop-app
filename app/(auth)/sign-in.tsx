import React from 'react';
import { View, Text, Image, StatusBar } from 'react-native';
import { useRouter } from 'expo-router';
import CustomButton from '../../components/CustomButton';

export default function SignInScreen() {
  const router = useRouter();

  return (
    <View className="flex-1 bg-black">
      <StatusBar barStyle="light-content" />
      {/* Background Image */}
      <View className="flex-1">
        <Image 
          source={require('../../assets/images/coffee.png')} 
          className="absolute w-full h-full"
          style={{ resizeMode: 'cover' }}
        />
        <View className="flex-1 justify-end">
          {/* Content gradient / overlay mockup */}
          <View className="absolute bottom-0 w-full h-[55%] bg-black/80" />
          
          <View className="px-6 mb-12 items-center">
            <Text className="text-white text-[34px] font-bold text-center leading-tight">
              Fall in Love with Coffee in Blissful Delight!
            </Text>
            <Text className="text-grayText text-center mt-4 text-sm px-4">
              Welcome to our cozy coffee corner, where every cup is a delightful for you.
            </Text>
            
            <View className="w-full mt-8">
              <CustomButton 
                title="Get Started" 
                onPress={() => router.replace('/(tabs)')} 
              />
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}
