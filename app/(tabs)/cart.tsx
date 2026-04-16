import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity, Image } from 'react-native';
import { useRouter } from 'expo-router';
import { Ionicons, FontAwesome, MaterialIcons } from '@expo/vector-icons';
import CustomButton from '../../components/CustomButton';

export default function CartScreen() {
  const router = useRouter();
  const [deliveryMode, setDeliveryMode] = useState('Deliver');
  const [quantity, setQuantity] = useState(1);

  return (
    <View className="flex-1 bg-light">
      {/* Header */}
      <View className="items-center px-6 pt-16 pb-4 bg-light z-10 w-full mb-2">
        <Text className="text-xl font-bold text-blackText">Order</Text>
      </View>

      <ScrollView className="flex-1 px-6 pb-20" showsVerticalScrollIndicator={false}>
        {/* Toggle Mode */}
        <View className="flex-row bg-[#F2F2F2] rounded-[14px] p-1.5 mb-6">
          {['Deliver', 'Pick Up'].map((mode) => (
            <TouchableOpacity 
              key={mode} 
              onPress={() => setDeliveryMode(mode)}
              className={`flex-1 py-3 rounded-[10px] items-center ${deliveryMode === mode ? 'bg-primary' : ''}`}
            >
              <Text className={`font-semibold ${deliveryMode === mode ? 'text-white' : 'text-blackText'}`}>{mode}</Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* Address */}
        <Text className="text-lg font-bold text-blackText mb-4">Delivery Address</Text>
        <Text className="font-bold text-blackText mb-1">Jl. Kpg Sutoyo</Text>
        <Text className="text-grayText text-sm mb-4">Kpg. Sutoyo No. 620, Bilzen, Tanjungbalai.</Text>
        
        <View className="flex-row gap-3 mb-6">
          <TouchableOpacity className="flex-row items-center border border-[#D9D9D9] py-1.5 px-3 rounded-full">
            <Ionicons name="create-outline" size={16} color="#313131" />
            <Text className="text-xs ml-1 text-[#313131]">Edit Address</Text>
          </TouchableOpacity>
          <TouchableOpacity className="flex-row items-center border border-[#D9D9D9] py-1.5 px-3 rounded-full">
            <Ionicons name="document-text-outline" size={16} color="#313131" />
            <Text className="text-xs ml-1 text-[#313131]">Add Note</Text>
          </TouchableOpacity>
        </View>
        <View className="h-[1px] bg-border mb-6" />

        {/* Cart Item */}
        <View className="flex-row items-center mb-6">
          <Image 
            source={require('../../assets/images/coffee-mocha.png')} 
            className="w-16 h-16 rounded-xl"
          />
          <View className="ml-4 flex-1">
            <Text className="font-bold text-blackText text-lg mb-1">Caffe Mocha</Text>
            <Text className="text-grayText text-xs">Deep Foam</Text>
          </View>
          <View className="flex-row items-center">
            <TouchableOpacity onPress={() => setQuantity(Math.max(1, quantity - 1))} className="w-8 h-8 rounded-full border border-gray-200 items-center justify-center bg-white">
              <FontAwesome name="minus" size={12} color="#2F2D2C" />
            </TouchableOpacity>
            <Text className="mx-4 font-bold text-base">{quantity}</Text>
            <TouchableOpacity onPress={() => setQuantity(quantity + 1)} className="w-8 h-8 rounded-full border border-gray-200 items-center justify-center bg-white">
              <FontAwesome name="plus" size={12} color="#2F2D2C" />
            </TouchableOpacity>
          </View>
        </View>
        <View className="h-[1px] bg-[#F2F2F2] mb-6 border border-b-[#EAEAEA] border-dashed" />

        {/* Discount Section */}
        <TouchableOpacity className="flex-row items-center justify-between border border-[#EAEAEA] rounded-[16px] p-4 bg-white mb-6">
          <View className="flex-row items-center">
            <MaterialIcons name="local-offer" size={24} color="#C67C4E" />
            <Text className="font-bold text-blackText ml-3 text-[15px]">1 Discount is Applies</Text>
          </View>
          <Ionicons name="chevron-forward" size={20} color="#2F2D2C" />
        </TouchableOpacity>

        {/* Payment Summary */}
        <Text className="text-lg font-bold text-blackText mb-4">Payment Summary</Text>
        <View className="flex-row justify-between mb-3">
          <Text className="text-blackText text-sm">Price</Text>
          <Text className="font-bold text-blackText text-sm">$ 4.53</Text>
        </View>
        <View className="flex-row justify-between mb-8">
          <Text className="text-blackText text-sm">Delivery Fee</Text>
          <View className="flex-row items-center">
            <Text className="text-[#2F2D2C] text-sm line-through mr-2">$ 2.0</Text>
            <Text className="font-bold text-blackText text-sm">$ 1.0</Text>
          </View>
        </View>
      </ScrollView>

      {/* Bottom Sticky Payment & Order button */}
      <View className="px-6 py-4 bg-white rounded-t-3xl border border-gray-100 shadow-xl pb-10">
        <View className="flex-row items-center justify-between mb-4">
          <View className="flex-row items-center gap-2">
            <Ionicons name="wallet-outline" size={24} color="#C67C4E" />
            <View>
              <Text className="text-sm font-semibold text-blackText">Cash/Wallet</Text>
              <Text className="text-primary text-xs font-bold">$ 5.53</Text>
            </View>
          </View>
          <Ionicons name="chevron-down" size={20} color="#2F2D2C" />
        </View>
        <CustomButton title="Order" onPress={() => router.replace('/(tabs)')} />
      </View>
    </View>
  );
}
