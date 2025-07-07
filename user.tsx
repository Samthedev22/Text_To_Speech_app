import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';


export default function plus() {
  return (
    <SafeAreaView style={styles.safeContainer}>
        <View className=''>
            <Text>User Profile</Text>
        </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create ({
    safeContainer: {
        flex: 1
    },
    container: {
        flex: 1,
        padding: 10
    }

})