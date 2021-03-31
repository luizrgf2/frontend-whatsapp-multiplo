const {useState} = require('react')
const React = require('react');
const {View,Text,TouchableOpacity,Image,TextInput,KeyboardAvoidingView,FlatList, Alert} = require('react-native')
const styles = require('./style').default // importar estilos da tela de login
const {Checkbox} = require('react-native-paper')
import { Ionicons } from '@expo/vector-icons';
const {ReactNativeModal} = require('react-native-modal')

function delete_atendente(name){



    Alert.alert('Atenção!' ,'Deseja deletar o atendente '+name+'?',
    [
        {
            text:'Sim',
            onPress:()=>{console.log('Deletado Atendente '+name)},
            style:'cancel'
        },
        {
            text:'Não',
            onPress:()=>{console.log('Não deletado Atendente '+name)},
            style:'destructive'
        },
    
    ])

}


function ItemRender(props){


    const image = require('../../../assets/programmer.png')
    const name = props.item.name
    const [visivel, Setvisivel] = useState(false)
    const [cetor,Setcetor] = useState('')


    return(

        <TouchableOpacity onPress={()=>Setvisivel(!visivel)}>

            <View style={[styles.container_user]}>
                <ReactNativeModal isVisible={visivel} onBackdropPress={()=>Setvisivel(!visivel)} backdropOpacity={0.9} >
                    <View style={[styles.style_modal]}>
                        <Text style={[styles.text_button_login_style,{marginBottom:10}]}>{name}</Text>
                        <TextInput placeholder='Setor' autoCorrect={false} maxLength={100} secureTextEntry={true} style={[styles.input_style]} onChangeText={text=>Setcetor(text)} autoCapitalize='none' placeholderTextColor='#a19e9c'></TextInput>
                        <TouchableOpacity>
                            <View style={[styles.button_login_style]}>
                                <Text style={[styles.text_button_login_style]}>
                                    Mudar Setor
                                </Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </ReactNativeModal>
                <Image source={image} style={[styles.image_user]}></Image>
                <Text style={[styles.text_user]}>{name}</Text>
                <TouchableOpacity onPress={()=>{delete_atendente(name)}}>
                    <Ionicons name="md-trash-bin" size={40} color="red" />
                </TouchableOpacity>


            </View>
        </TouchableOpacity>



    )



}



function Atendentes(){


    const [data, Setdata] =  useState([{name:'luiz'}])


    return(

        <View 
            style={[styles.container_principal]}>
            
            <FlatList
                data={data}
                renderItem={item=><ItemRender item={item.item}></ItemRender>}
            >
            


            </FlatList>




        </View>
        


    )


}


function App({navigation}){



    return(



        <Atendentes></Atendentes>



    )


}

export default App