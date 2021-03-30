const {useState} = require('react')
const React = require('react');
const {View,Text,TouchableOpacity,Image,TextInput,KeyboardAvoidingView,FlatList, Alert} = require('react-native')
const styles = require('./style').default // importar estilos da tela de login
const {Checkbox} = require('react-native-paper')
import { Ionicons } from '@expo/vector-icons';

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


    return(


        <View style={[styles.container_user]}>
            <Image source={image} style={[styles.image_user]}></Image>
            <Text style={[styles.text_user]}>{name}</Text>
            <TouchableOpacity onPress={()=>{delete_atendente(name)}}>
                <Ionicons name="md-trash-bin" size={40} color="red" />
            </TouchableOpacity>


        </View>



    )



}



function Atendentes(){


    const [data, Setdata] =  useState([])


    return(

        <View 
            style={[styles.container_principal]}>
            
            <FlatList
                data={data}
                renderItem={item=><TouchableOpacity><ItemRender item={item.item}></ItemRender></TouchableOpacity>}
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