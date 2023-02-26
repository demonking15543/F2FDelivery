import { View, Text, Image } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import { SafeAreaView } from 'react-native-safe-area-context';
import { ChevronDownIcon, UserIcon } from 'react-native-heroicons/solid';
const HomeScreen = () => {
    
useLayoutEffect(() => {
  navigation.setOptions({
    headerTitle:"Testing",
    headerShown:false
  })

  
}, [])
    const navigation = useNavigation()
  return (
    <SafeAreaView>
      <Text className="text-red-400">
      {/* Header */}
      <View className="flex-row pb-3 items-center mx-4 space-x-2">
        <Image
        source={{
            uri:'https://links.papareact.com/wru',
        }}
        className="h-7 w-7 bg-gray-300 rounded-full"
        />
        <View className="flex-1">
            <Text className="font-bold text-gray-400 text-sm">F2F Delivery</Text>
            <Text className='font-bold text-lg'>Current Loaction
            <ChevronDownIcon size={20} color='#00CCBB'/>
            
            </Text>
            
        </View>
        <UserIcon size={35} color='#00CCBB' />
      </View>

      
      </Text>

      

    </SafeAreaView>
  )
}

export default HomeScreen