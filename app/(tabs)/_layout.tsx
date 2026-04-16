// Expo router uses Tabs from 'expo-router'
import { Tabs as ExpoTabs } from 'expo-router';
import { FontAwesome5, FontAwesome, Ionicons } from '@expo/vector-icons';
import { View, Text } from 'react-native';
import { useCart } from '../../context/CartContext';

export default function TabLayout() {
  return (
    <ExpoTabs
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: '#FFFFFF',
          borderTopLeftRadius: 24,
          borderTopRightRadius: 24,
          height: 80,
          position: 'absolute',
          borderTopWidth: 0,
          shadowColor: '#000',
          shadowOffset: { width: 0, height: -2 },
          shadowOpacity: 0.1,
          shadowRadius: 10,
          elevation: 10,
        },
        tabBarActiveTintColor: '#C67C4E',
        tabBarInactiveTintColor: '#8D8D8D',
      }}
    >
      <ExpoTabs.Screen
        name="index"
        options={{
          tabBarIcon: ({ color, focused }) => (
            <View className="items-center justify-center h-full">
              <Ionicons name="home" size={24} color={color} />
              {focused && <View className="w-1.5 h-1.5 bg-primary rounded-full mt-1" />}
            </View>
          ),
        }}
      />
      <ExpoTabs.Screen
        name="wishlist"
        options={{
          tabBarIcon: ({ color, focused }) => (
            <View className="items-center justify-center h-full">
              <Ionicons name="heart-outline" size={26} color={color} />
              {focused && <View className="w-1.5 h-1.5 bg-primary rounded-full mt-1" />}
            </View>
          ),
        }}
      />
      <ExpoTabs.Screen
        name="order"
        options={{
          tabBarIcon: ({ color, focused }) => (
            <View className="items-center justify-center h-full">
              <Ionicons name="bag-handle-outline" size={24} color={color} />
              {focused && <View className="w-1.5 h-1.5 bg-primary rounded-full mt-1" />}
            </View>
          ),
        }}
      />
      <ExpoTabs.Screen
        name="notification"
        options={{
          tabBarIcon: ({ color, focused }) => (
            <View className="items-center justify-center h-full">
              <Ionicons name="notifications-outline" size={24} color={color} />
              {focused && <View className="w-1.5 h-1.5 bg-primary rounded-full mt-1" />}
            </View>
          ),
        }}
      />
      <ExpoTabs.Screen
        name="cart"
        options={{
          tabBarIcon: ({ color, focused }) => {
            const { cartCount } = useCart();
            return (
              <View className="items-center justify-center h-full">
                <Ionicons name="cart-outline" size={26} color={color} />
                {cartCount > 0 && (
                  <View className="absolute top-1 -right-2 bg-red-500 min-w-[18px] h-[18px] rounded-full items-center justify-center px-1">
                    <Text className="text-white text-[10px] font-bold">{cartCount}</Text>
                  </View>
                )}
                {focused && <View className="w-1.5 h-1.5 bg-primary rounded-full mt-1" />}
              </View>
            );
          },
        }}
      />
    </ExpoTabs>
  );
}
