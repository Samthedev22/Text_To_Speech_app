import Entypo from '@expo/vector-icons/Entypo';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { Tabs } from "expo-router";
import { StyleSheet, View } from 'react-native';
import '../global.css';


export default function TabLayout() {
  return ( 
    <Tabs 
    screenOptions={{
      tabBarActiveTintColor: 'white',

      tabBarLabelStyle: {
        fontFamily: 'arial',
        fontWeight: '600',
        fontSize: 14,
        transform: [{translateY: 12}]
      },
      tabBarStyle: {
        backgroundColor: '#011',
        borderTopStartRadius: 20,
        borderTopEndRadius: 20,
        borderTopColor: '#000',
        height: 100,

        //shadow effect
        shadowColor: '#000',
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.5,
        shadowRadius: 4,

        elevation: 3
        }
      }} 
    >
      <Tabs.Screen
        name="index" 
        options={{
          title: 'Home', 
          tabBarIcon: ({color}) => (
            <View style={styles.homeBtn }>
              <MaterialIcons size={35} name="home" color={color} />
            </View>
          ),
      }} />

      {/*Plus Button*/}
      <Tabs.Screen
      name="plus"
      options={{ 
        title: 'plus',
        tabBarLabel: () => null,
        tabBarIcon: () => (
        <View style={styles.plusBtn}>
          <Entypo name="plus" size={30} color="white" style={{textAlign: 'center', transform: [{translateY: 2}] }}/>        
        </View>
       ),
      }}  
      /> 

      <Tabs.Screen
      name="user"
      options={{
        title: 'User',
         tabBarIcon: ({ color }) => (
          <View style={styles.userBtn }>
            <FontAwesome name="user" size={30} color={color} />      
          </View>
         )
      }}  
      />

      </Tabs>
  )
}

const styles = StyleSheet.create ({ 
  homeBtn: {
    transform: [{translateY: 10}]
  },
  plusBtn: {
    backgroundColor: '#1b6521',
    transform: [{translateY: 15}],
    borderRadius: 5,
    width: 40,
    height: 40,

    animationDuration: 3,
    animationDelay: 2
  },
  userBtn: {
    transform: [{translateY: 10}]
  }
})
