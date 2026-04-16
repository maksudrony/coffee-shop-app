import React, { useEffect } from 'react';
import { View, Text } from 'react-native';
import { useRouter } from 'expo-router';
import Animated, { FadeIn, FadeOut, useSharedValue, useAnimatedStyle, withTiming, withDelay } from 'react-native-reanimated';
import { FontAwesome5 } from '@expo/vector-icons';

export default function SplashScreen() {
  const router = useRouter();
  const opacity = useSharedValue(0);

  useEffect(() => {
    opacity.value = withTiming(1, { duration: 1000 });
    
    // Simulate auth check / splash duration
    const timer = setTimeout(() => {
      // Mocking check: routing to Get Started or Auth
      router.replace('/(auth)/onboarding');
    }, 2500);
    
    return () => clearTimeout(timer);
  }, []);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      opacity: opacity.value,
      transform: [{ scale: opacity.value }]
    };
  });

  return (
    <View className="flex-1 bg-primary items-center justify-center">
      <Animated.View style={animatedStyle} className="items-center">
        <FontAwesome5 name="coffee" size={80} color="white" />
        <Text className="text-white text-4xl font-bold mt-4 tracking-widest">COFFEE</Text>
      </Animated.View>
    </View>
  );
}
