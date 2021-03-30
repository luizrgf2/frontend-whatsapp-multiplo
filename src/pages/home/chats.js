const {useState} = require('react')
const React = require('react');
const {View,Text,TouchableOpacity,Image,TextInput,KeyboardAvoidingView,FlatList, Alert} = require('react-native')
const styles = require('./style').default // importar estilos da tela de login
const {Checkbox} = require('react-native-paper')
import { MaterialIcons , Ionicons } from '@expo/vector-icons';

function delete_atendente(name){



    Alert.alert('Atenção!' ,'Deseja deletar o chat do cliente'+name+'?',
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


    const name = props.item.name
    const description = props.item.desc

    return(


        <View style={[styles.container_user]}>
            <MaterialIcons name="chat-bubble" size={40} color="#00b6c7" style={{marginRight:10}}/>
            <View>
                <Text style={[styles.text_chat]}>{name}</Text>
                <Text style={[styles.text_client]}>{description}</Text>
            </View>


        </View>



    )



}



function Atendentes(){


    const [data, Setdata] =  useState([{name:'fernando',desc:'tudo'},{name:'gustavo',desc:'tudo mais um pouco'}])


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