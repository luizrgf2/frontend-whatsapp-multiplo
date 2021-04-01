const {useState} = require('react')
const React = require('react');
const {View,Text,TouchableOpacity,Image,TextInput,KeyboardAvoidingView,FlatList, Alert} = require('react-native')
const styles = require('./style').default // importar estilos da tela de login
const {Checkbox} = require('react-native-paper')
import { Ionicons } from '@expo/vector-icons';
const {ReactNativeModal} = require('react-native-modal')

function Picker(props){

    
    const name = props.item.item
    console.log(name)



    const mudar_setor=()=>{


        console.log('Registrado novo cliente')

    }


    return(
        
        <TouchableOpacity onPress={()=>{}}>

            <View style={[styles.container_picker]}>
                <Text>{name}</Text>
            </View>

        </TouchableOpacity>


    )




}

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
    const [selected,Setselected] = useState('Escolha')
    const [data,Setdata] = useState(['Suporte','Franqueado','Finaceiro','Cliente'])

    return(

        <TouchableOpacity onPress={()=>Setvisivel(!visivel)}>

            <View style={[styles.container_user]}>
                <ReactNativeModal isVisible={visivel} onBackdropPress={()=>Setvisivel(!visivel)} backdropOpacity={0.9} >
                    <View style={[styles.style_modal]}>
                        
                        <Text style={[styles.text_button_login_style,{marginBottom:10}]}>{name}-escolha o setor</Text>
                        <FlatList data={data} renderItem={item=><Picker item={item}></Picker>}></FlatList>

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