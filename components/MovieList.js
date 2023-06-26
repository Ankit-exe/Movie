import { View, Text, Dimensions,Image } from 'react-native'
import React from 'react'
import { ScrollView, TouchableOpacity, TouchableWithoutFeedback } from 'react-native-gesture-handler'
import { styles } from '../theme'
import { Link } from 'expo-router'

var {width,height} = Dimensions.get('window')

const MovieList = ({title , data}) => {
    let movieName = 'Ant-Man and the Wasp: Qunatumania';
  return (
   
    <View className='mb-8 space-y-4'>
        <View className='mx-4 flex-row justify-between items-center'>
        <Text className="text-white text-xl">{title}</Text>
        <TouchableOpacity>
            <Text style={styles.text} className="text-lg">See All</Text>
        </TouchableOpacity>
        </View>
        <ScrollView 
        horizontal
        showsHorizontalScrollIndicator={false} 
        contentContainerStyle={{paddingHorizontal:15}}
        >
            <Link href='/details'>
            {
                data.map((item , index) => {
                    return(
                    <TouchableWithoutFeedback
                    key={index}
         >
                        <View className="space-y-1 mr-4">
                          <Image 
                          source={require('../assets/th.jpg')} 
                          className='rounded-3xl'
                          style={{width:width*0.33 ,height: height*0.22}}
                          />
                            <Text className='text-neutral-300 ml-1'>
                            {
                                movieName.length>14? movieName.slice(0,14)+'...' :movieName
                            }
                        </Text>

                        </View>
   
                    </TouchableWithoutFeedback>
                    )
                })
            }
            </Link>

        </ScrollView>
    </View>

  )
}

export default MovieList