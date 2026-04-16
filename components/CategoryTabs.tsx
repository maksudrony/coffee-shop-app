import React from 'react';
import { ScrollView, TouchableOpacity, Text } from 'react-native';

interface CategoryTabsProps {
  categories: string[];
  activeCategory: string;
  onSelect: (category: string) => void;
}

export default function CategoryTabs({ categories, activeCategory, onSelect }: CategoryTabsProps) {
  return (
    <ScrollView 
      horizontal 
      showsHorizontalScrollIndicator={false} 
      className="mb-4"
      contentContainerStyle={{ paddingHorizontal: 24, gap: 12 }}
    >
      {categories.map((item, index) => {
        const isActive = activeCategory === item;
        return (
          <TouchableOpacity
            key={index}
            onPress={() => onSelect(item)}
            className={`px-4 py-2 rounded-lg ${isActive ? 'bg-primary' : 'bg-[#EAEAEA]'}`}
          >
            <Text className={`font-semibold text-base ${isActive ? 'text-white' : 'text-[#2F2D2C]'}`}>
              {item}
            </Text>
          </TouchableOpacity>
        );
      })}
    </ScrollView>
  );
}
