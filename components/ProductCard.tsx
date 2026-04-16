import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

interface ProductCardProps {
  id: string;
  name: string;
  subtitle: string;
  price: number;
  rating: number;
  imageUrl: any; // using require() or uri
  onPress: () => void;
  onAddPress: () => void;
}

export default function ProductCard({ id, name, subtitle, price, rating, imageUrl, onPress, onAddPress }: ProductCardProps) {
  return (
    <TouchableOpacity 
      activeOpacity={0.8} 
      className="bg-white rounded-[16px] p-2 w-[48%] mb-4 shrink-0" 
      style={{ shadowColor: '#000', shadowOpacity: 0.05, shadowRadius: 10, shadowOffset: { width: 0, height: 4 } }}
      onPress={onPress}
    >
      <View className="relative w-full h-32 rounded-[12px] overflow-hidden mb-3">
        <Image source={imageUrl} className="w-full h-full object-cover" />
        {/* Rating Badge */}
        <View className="absolute top-2 left-2 bg-[#00000030] backdrop-blur-md flex-row items-center px-2 py-1 rounded-full">
          <FontAwesome name="star" size={10} color="#D4A056" />
          <Text className="text-white text-xs ml-1 font-semibold">{rating}</Text>
        </View>
      </View>
      
      <Text className="text-blackText text-lg font-bold mb-1" numberOfLines={1}>{name}</Text>
      <Text className="text-grayText text-sm mb-3" numberOfLines={1}>{subtitle}</Text>
      
      <View className="flex-row items-center justify-between mt-auto">
        <Text className="text-blackText text-lg font-bold">$ {price.toFixed(2)}</Text>
        <TouchableOpacity 
          activeOpacity={0.8} 
          onPress={onAddPress}
          className="bg-primary w-8 h-8 rounded-[10px] items-center justify-center"
        >
          <FontAwesome name="plus" size={14} color="white" />
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
}
