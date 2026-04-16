import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { Ionicons, FontAwesome, MaterialCommunityIcons } from '@expo/vector-icons';
import Toast from 'react-native-toast-message';
import CustomButton from '../../components/CustomButton';
import { useCart } from '../../context/CartContext';

export default function ProductDetailScreen() {
  const { id } = useLocalSearchParams();
  const router = useRouter();
  const { addToCart } = useCart();
  const [selectedSize, setSelectedSize] = useState('M');

  const handleAddToCart = () => {
    addToCart();
    Toast.show({
      type: 'success',
      text1: 'Added to Cart',
      text2: 'Caffe Mocha was successfully added to your cart.',
      visibilityTime: 2000,
    });
    router.push('/(tabs)/wishlist');
  };

  const SIZE_OPTIONS = ['S', 'M', 'L'];

  return (
    <View className="flex-1 bg-light">
      <ScrollView className="flex-1" showsVerticalScrollIndicator={false}>
        {/* Header */}
        <View className="flex-row justify-between items-center px-6 pt-16 pb-4 bg-light z-10">
          <TouchableOpacity onPress={() => router.back()} className="w-10 h-10 items-center justify-center">
            <Ionicons name="chevron-back" size={24} color="#2F2D2C" />
          </TouchableOpacity>
          <Text className="text-xl font-bold text-blackText">Detail</Text>
          <TouchableOpacity className="w-10 h-10 items-center justify-center">
            <Ionicons name="heart-outline" size={24} color="#2F2D2C" />
          </TouchableOpacity>
        </View>

        {/* Image */}
        <View className="px-6 mb-4">
          <Image 
            source={require('../../assets/images/coffee-mocha.png')} 
            className="w-full h-56 rounded-3xl object-cover"
          />
        </View>

        {/* Title & Info */}
        <View className="px-6 mb-6">
          <Text className="text-2xl font-bold text-blackText mb-1">Caffe Mocha</Text>
          <Text className="text-grayText text-sm mb-3">Ice/Hot</Text>
          
          <View className="flex-row items-center justify-between">
            <View className="flex-row items-center">
              <FontAwesome name="star" size={20} color="#D4A056" />
              <Text className="text-blackText text-lg font-bold ml-2">4.8</Text>
              <Text className="text-grayText text-sm ml-1">(230)</Text>
            </View>
            <View className="flex-row gap-4">
               <View className="w-14 h-14 bg-secondary/30 rounded-2xl items-center justify-center">
                 <MaterialCommunityIcons name="bike" size={24} color="#C67C4E" />
               </View>
               <View className="w-14 h-14 bg-secondary/30 rounded-2xl items-center justify-center">
                 <MaterialCommunityIcons name="seed" size={24} color="#C67C4E" />
               </View>
               <View className="w-14 h-14 bg-secondary/30 rounded-2xl items-center justify-center">
                 <MaterialCommunityIcons name="cup-water" size={24} color="#C67C4E" />
               </View>
            </View>
          </View>
        </View>

        {/* Divider */}
        <View className="h-[1px] bg-border mx-6 mb-6" />

        {/* Description */}
        <View className="px-6 mb-6">
          <Text className="text-lg font-bold text-blackText mb-2">Description</Text>
          <Text className="text-grayText text-sm leading-relaxed">
            A cappuccino is an approximately 150 ml (5 oz) beverage, with 25 ml of espresso coffee and 85ml of fresh milk the fo.. <Text className="text-primary font-bold">Read More</Text>
          </Text>
        </View>

        {/* Size Selector */}
        <View className="px-6 mb-8">
          <Text className="text-lg font-bold text-blackText mb-4">Size</Text>
          <View className="flex-row justify-between">
            {SIZE_OPTIONS.map((size) => {
              const isSelected = selectedSize === size;
              return (
                <TouchableOpacity
                  key={size}
                  onPress={() => setSelectedSize(size)}
                  className={`w-[30%] h-12 items-center justify-center rounded-[12px] border ${isSelected ? 'border-primary bg-secondary/20' : 'border-[#EAEAEA] bg-white'}`}
                >
                  <Text className={`text-base ${isSelected ? 'text-primary font-bold' : 'text-blackText'}`}>{size}</Text>
                </TouchableOpacity>
              )
            })}
          </View>
        </View>
      </ScrollView>

      {/* Bottom Sticky Bar */}
      <View className="px-6 py-4 bg-white flex-row items-center justify-between rounded-t-3xl border border-gray-100 shadow-xl pb-10">
        <View className="flex-1">
          <Text className="text-grayText text-sm mb-1">Price</Text>
          <Text className="text-primary text-2xl font-bold">$ 4.53</Text>
        </View>
        <View className="flex-1">
          <CustomButton title="Add to Cart" onPress={handleAddToCart} />
        </View>
      </View>
    </View>
  );
}
