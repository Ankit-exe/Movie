import { View, Text, Platform, TouchableOpacity, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { StackRouter } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { AntDesign } from '@expo/vector-icons';
import TrendingMovies from './TrendingMovies';
import MovieList from './MovieList';

const ios = Platform.OS == 'ios';
const Home = () => {
  const [Trending , setTrending ] = useState([1,2,3,4])
  const [upcomming, setUpcomming ] = useState([1,2,3])
  const [toprated, setToprated ] = useState([1,2,3])
  return (
    <View>
      <SafeAreaView className={ios ? "-mb-2" : "mb-3"}>
        <StatusBar style='light' />
        <View className="flex-row justify-between items-center mx-4">
        <AntDesign name="menuunfold" size={30} color="white" />
        <Text className="text-3xl font-bold text-yellow-300 tracking-widest">M
          <Text className="text-white text-3xl font-bold tracking-widest">ovies</Text>
        </Text>
        <TouchableOpacity>
        <AntDesign name="search1" size={30} color="white" />
        </TouchableOpacity>
        </View>
        <ScrollView className='mb-11'
     showsHorizontalScrollIndicator={false}
     contentContainerStyle={{paddingBottom:10}}
     >
      <TrendingMovies data={Trending} />
      <MovieList title="Upcomming" data={upcomming}/>

      <MovieList title="Top Rated" data={toprated}/>

     </ScrollView>
     </SafeAreaView>

    </View>
  )
}

export default Home

