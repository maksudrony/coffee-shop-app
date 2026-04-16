import React from 'react';
import { View, Text, Image, StatusBar } from 'react-native';
import { useRouter } from 'expo-router';
import CustomButton from '../../components/CustomButton';
import { LinearGradient } from 'expo-linear-gradient';

export default function SignInScreen() {
  const router = useRouter();

  return (
    <View className="flex-1 bg-black">
      <StatusBar barStyle="light-content" />

      {/* Image Onboarding */}
      <View className="absolute top-0 w-full h-[75%]">
        <Image 
          source={require('../../assets/images/coffee.png')} 
          className="w-full h-full"
          style={{ resizeMode: 'cover' }}
        />
      </View>

      {/* Container */}
      <View className="flex-1 justify-end">
        {/* Shadow Container */}
        <LinearGradient
          colors={['transparent', 'rgba(0,0,0,0.8)', '#000000', '#000000']}
          locations={[0, 0.35, 0.6, 1]}
          className="absolute bottom-0 w-full h-[60%]"
        />
        
        {/* Texts & Button */}
        <View className="px-8 pb-14 z-10 w-full">
          <Text className="text-white text-[34px] font-bold text-center leading-tight">
            Fall in Love with Coffee in Blissful Delight!
          </Text>
          <Text className="text-grayText text-center mt-4 text-sm px-4">
            Welcome to our cozy coffee corner, where every cup is a delightful for you.
          </Text>
          
          <View className="w-full mt-8">
            <CustomButton 
              title="Get Started" 
              onPress={() => router.replace('/(auth)/sign-in')} 
            />
          </View>
        </View>
      </View>
    </View>
  );
}
