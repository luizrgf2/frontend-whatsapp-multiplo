import { useState } from 'react'
import { color } from 'react-native-reanimated'

const React = require('react')
const {TouchableOpacity,Text,View, TextInput} = require('react-native')
const {createBottomTabNavigator} = require('@react-navigation/bottom-tabs')
const Atendentes = require('./atendentes').default
const Chats = require('./chats').default
const Tabs = createBottomTabNavigator()
const {AntDesign,Ionicons, Entypo} = require('@expo/vector-icons')
const {ReactNativeModal} =  require('react-native-modal')
const styles = require('./style').default

export default function Tab({navigation}){
    
    const [visivel,Setvisivel] = useState(false)
    navigation.setOptions({headerRight:()=>{

  
        return( 
        
            <TouchableOpacity style={{paddingRight:10}}  onPress={()=>Setvisivel(true)}>
               <View>
                    <ReactNativeModal isVisible={visivel} onBackdropPress={()=>Setvisivel(!visivel)} backdropOpacity={0.9} >
                        <View style={[styles.style_modal]}>
                            <TextInput placeholder='Setor' autoCorrect={false} maxLength={100} secureTextEntry={true} style={[styles.input_style]} onChangeText={text=>Setcetor(text)} autoCapitalize='none' placeholderTextColor='#a19e9c'></TextInput>
                            <TouchableOpacity>
                                <View style={[styles.button_login_style]}>
                                    <Text style={[styles.text_button_login_style]}>
                                        Novo setor
                                    </Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                    </ReactNativeModal>

                    <Entypo name="forward" size={24} color="black" />
               </View>
            
            </TouchableOpacity>

        )
    }})


    return(



        <Tabs.Navigator screenOptions={{tabBarOptions:{color:'#FFF'}}}> 
            <Tabs.Screen name='Atendentes' component={Atendentes} options={{tabBarIcon:(op)=>(<AntDesign name="user" size={24} color="green" />)}}></Tabs.Screen>
            <Tabs.Screen name='Chats' component={Chats} options={{tabBarIcon:(op)=>(<Ionicons name="md-chatbubble-ellipses-outline" size={24} color="green" />)}}></Tabs.Screen>
        </Tabs.Navigator>


    )

}