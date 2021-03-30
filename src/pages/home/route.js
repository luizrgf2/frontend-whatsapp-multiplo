import { color } from 'react-native-reanimated'

const React = require('react')
const {createBottomTabNavigator} = require('@react-navigation/bottom-tabs')
const Atendentes = require('./atendentes').default
const Chats = require('./chats').default
const Tabs = createBottomTabNavigator()
const {AntDesign,Ionicons} = require('@expo/vector-icons')



export default function Tab(){
    
    const IconsTab1 = <AntDesign name="user" size={24} color="green" />


    return(



        <Tabs.Navigator screenOptions={{tabBarOptions:{color:'#FFF'}}}> 
            <Tabs.Screen name='Atendentes' component={Atendentes} options={{tabBarIcon:(op)=>(<AntDesign name="user" size={24} color="green" />)}}></Tabs.Screen>
            <Tabs.Screen name='Chats' component={Chats} options={{tabBarIcon:(op)=>(<Ionicons name="md-chatbubble-ellipses-outline" size={24} color="green" />)}}></Tabs.Screen>
        </Tabs.Navigator>


    )

}