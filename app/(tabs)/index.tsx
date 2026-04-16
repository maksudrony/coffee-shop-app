import React, { useState } from 'react';
import { View, Text, ScrollView, TextInput, Image, TouchableOpacity, FlatList } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons, Feather } from '@expo/vector-icons';
import CategoryTabs from '../../components/CategoryTabs';
import ProductCard from '../../components/ProductCard';
import { useRouter } from 'expo-router';

// Mock Data
const CATEGORIES = ['All Coffee', 'Machiato', 'Latte', 'Americano', 'Espresso'];
const PRODUCTS = [
  { id: '1', name: 'Caffe Mocha', subtitle: 'Deep Foam', price: 4.53, rating: 4.8, image: require('../../assets/images/coffee-mocha.png') },
  { id: '2', name: 'Flat White', subtitle: 'Espresso', price: 3.53, rating: 4.8, image: require('../../assets/images/flat-coffee.png') },
  { id: '3', name: 'Caramel Latte', subtitle: 'Ice/Hot', price: 5.12, rating: 4.9, image: require('../../assets/images/coffee-lattee.png') },
  { id: '4', name: 'Americano', subtitle: 'Strong', price: 2.50, rating: 4.5, image: require('../../assets/images/coffee.png') },
];

export default function HomeScreen() {
  const [activeCategory, setActiveCategory] = useState(CATEGORIES[0]);
  const router = useRouter();

  return (
    <View className="flex-1 bg-light">
      {/* Top Banner Area */}
      <View className="bg-dark px-6 pt-16 pb-24 relative">
        <View className="flex-row justify-between items-center mb-6">
          <View>
            <Text className="text-grayText text-xs font-semibold">Location</Text>
            <View className="flex-row items-center mt-1">
              <Text className="text-white text-md font-semibold font-bold mr-1">Dhaka, Bangladesh</Text>
              <Ionicons name="chevron-down" size={16} color="white" />
            </View>
          </View>
          <View className="w-11 h-11 rounded-xl overflow-hidden bg-white">
            <Image
              source={require('../../assets/images/avatar.png')}
              className="w-full h-full"
            />
          </View>
        </View>

        {/* Search */}
        <View className="flex-row items-center">
          <View className="flex-1 flex-row items-center bg-[#313131] rounded-2xl px-4 h-14" style={{ borderWidth: 1, borderColor: '#555' }}>
            <Feather name="search" size={20} color="white" />
            <TextInput
              placeholder="Search coffee"
              placeholderTextColor="#9B9B9B"
              className="flex-1 ml-3 text-white text-base"
            />
          </View>
          <TouchableOpacity className="w-14 h-14 bg-primary rounded-2xl items-center justify-center ml-4">
            <Feather name="sliders" size={20} color="white" />
          </TouchableOpacity>
        </View>
      </View>

      <ScrollView className="flex-1 -mt-16" showsVerticalScrollIndicator={false}>
        {/* Promo Banner */}
        <View className="px-6 mb-6">
          <View className="w-full h-36 rounded-2xl overflow-hidden items-start justify-center p-6 bg-[#D1C9C5]">
            <Image
              source={require('../../assets/images/home-screen-banner.png')}
              className="absolute w-full h-full"
              style={{ opacity: 0.5, resizeMode: 'cover' }}
            />
            <View className="bg-[#ED735B] px-2 py-1 rounded-[8px] mb-2 z-10">
              <Text className="text-white font-bold text-xs">Promo</Text>
            </View>
            <Text className="text-white text-3xl font-extrabold w-3/4 leading-tight shadow-md z-10" style={{ textShadowColor: 'black', textShadowRadius: 6 }}>
              Buy one get one FREE
            </Text>
          </View>
        </View>

        {/* Categories */}
        <CategoryTabs
          categories={CATEGORIES}
          activeCategory={activeCategory}
          onSelect={setActiveCategory}
        />

        {/* Grid */}
        <View className="px-6 pb-24 mt-2 flex-row flex-wrap justify-between">
          {PRODUCTS.map(product => (
            <ProductCard
              key={product.id}
              {...product}
              imageUrl={product.image}
              onPress={() => router.push(`/product/${product.id}`)}
              onAddPress={() => router.push('/cart')}
            />
          ))}
        </View>
      </ScrollView>
    </View>
  );
}
