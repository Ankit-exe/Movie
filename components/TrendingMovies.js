import { View, Text, Dimensions,TouchableWithoutFeedback,Image } from 'react-native'
import React from 'react';
import Carousel from 'react-native-snap-carousel';


var {width,height} = Dimensions.get('window')

const TrendingMovies = ({data}) => {
  return (
    <View className="mb-8">
      <Text className="text-white text-xl mx-4 mb-5">Trending</Text>
      <Carousel
      data={data}
      renderItem={({item}) => <MovieCard item={item} />}
      firstItem={1}
      inactiveSlideOpacity={0.60}
      sliderWidth={width}
      itemWidth={width*0.62}
      slideStyle={{display:'flex',alignItems:"center"}}
      />
    </View>
  )
}

const MovieCard = ({item}) => {
    return (
      <View>
          <TouchableWithoutFeedback>
              <Image
              style={{
                  width: width*0.6,
                  height:height*0.4
              }}
              className="rounded-3xl"
              source={require('../assets/p-1.jpg')}
              />
  
          </TouchableWithoutFeedback>
  
      </View>
    )}

export default TrendingMovies