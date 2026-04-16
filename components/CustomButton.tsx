import React from 'react';
import { TouchableOpacity, Text, ViewStyle, TextStyle } from 'react-native';

interface CustomButtonProps {
  title: string;
  onPress: () => void;
  style?: ViewStyle;
  textStyle?: TextStyle;
  disabled?: boolean;
}

export default function CustomButton({ title, onPress, style, textStyle, disabled = false }: CustomButtonProps) {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={onPress}
      disabled={disabled}
      className={`bg-primary w-full h-14 rounded-[16px] items-center justify-center ${disabled ? 'opacity-50' : 'opacity-100'}`}
      style={style}
    >
      <Text className="text-white text-lg font-bold" style={textStyle}>
        {title}
      </Text>
    </TouchableOpacity>
  );
}
