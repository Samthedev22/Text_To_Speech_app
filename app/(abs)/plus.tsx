import React from 'react'
import { FlatList, StyleSheet, Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { ttsData } from '../Data/listdata'

export default function plus() {
  return (
    <SafeAreaView>
      <View style={styles.container }>

      {/*FlatList Items Display */}
      <FlatList 
        data={ttsData}
        renderItem={({item}) => {
          return(
            <View className='text-center itmes-center my-3 bg-red-400 h-40 p-5 px-2'>  
              <Text>{item.id}</Text>
              <Text>{item.title}</Text>
            </View>
          )
        }} 

      />      
      </View> 
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  safeContainer: {
    flex: 1
  },
  container: {
    padding: 5
  }
})
