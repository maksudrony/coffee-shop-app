import React from 'react';
import { View, Text, ScrollView, TouchableOpacity, Image } from 'react-native';
import { useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { useWishlist } from '../../context/WishlistContext';

export default function WishlistScreen() {
  const router = useRouter();
  const { wishlist, toggleWishlist } = useWishlist();

  return (
    <View className="flex-1 bg-light">
      {/* Header */}
      <View className="items-center px-6 pt-16 pb-4 bg-light z-10 w-full mb-2 border-b border-gray-100">
        <Text className="text-xl font-bold text-blackText">My Wishlist</Text>
      </View>

      <ScrollView className="flex-1 px-6 pt-4" showsVerticalScrollIndicator={false}>
        {wishlist.length === 0 ? (
          <View className="flex-1 items-center justify-center mt-20">
            <Ionicons name="heart-half-outline" size={80} color="#D9D9D9" />
            <Text className="text-grayText text-lg mt-4 font-semibold">Your wishlist is empty!</Text>
            <TouchableOpacity onPress={() => router.replace('/(tabs)')} className="mt-6 bg-primary px-8 py-3 rounded-full">
              <Text className="text-white font-bold">Go to Shop</Text>
            </TouchableOpacity>
          </View>
        ) : (
          wishlist.map((item) => (
            <TouchableOpacity 
              key={item.id} 
              onPress={() => router.push(`/product/${item.id}`)}
              className="flex-row items-center border border-[#EAEAEA] rounded-[16px] p-3 bg-white mb-4 shadow-sm"
            >
              <Image 
                source={item.image} 
                className="w-20 h-20 rounded-xl"
              />
              <View className="ml-4 flex-1">
                <Text className="font-bold text-blackText text-lg mb-1">{item.name}</Text>
                <Text className="text-grayText text-xs mb-2">{item.type}</Text>
                <Text className="text-primary font-bold text-base">$ {item.price}</Text>
              </View>
              
              <TouchableOpacity 
                onPress={() => toggleWishlist(item.id)}
                className="w-10 h-10 items-center justify-center bg-red-50 rounded-full"
              >
                <Ionicons name="trash-outline" size={20} color="#EF4444" />
              </TouchableOpacity>
            </TouchableOpacity>
          ))
        )}
      </ScrollView>
    </View>
  );
}
