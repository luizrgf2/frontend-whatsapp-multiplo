const {StyleSheet,Dimensions} = require('react-native')

const x = Dimensions.get('screen').width
const y = Dimensions.get('screen').height


const Styles = StyleSheet.create({


    input_style:{ // usado para dar estilo ao TextInput do username e da senha

        width:x*0.8,
        height:y*0.05,
        borderColor:'#fff',
        color:'#fff',
        fontWeight:'bold',
        padding:4
    },
    image_principal:{ //usado para dar estilo a imagem principal da tela

        width:x*0.4,
        height:y*0.15

    },
    container_principal:{ //usado para dar estilo a View principal(tela de fundo)

        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#000'



    },
    container_form_login:{ //usado para dar estilo a Form login
    
        height: y*0.4,
        width:x,
        marginTop: y*0.01,
        justifyContent:"center",
        alignItems:'center',
    
    
    },
    text_button_login_style:{
        color:'#fff',
        fontWeight:"bold",
        fontSize:20


    },
    button_login_style:{
        width:x*0.4,
        height:y*0.05,
        backgroundColor:'#23b180',
        borderRadius:10,
        justifyContent:'center',
        alignItems: 'center',
        marginTop:y*0.02
    },
    text_button_register:{
        color:'#23b180',
        fontWeight:'bold'
    },
    container_checkbox:{
        width: x*0.8,
        flexDirection:'row',
        alignItems:'center'

        
    },
    text_checkbox:{

        fontWeight:'bold',
        color:'#FFF'


    },
    container_user:{

        flexDirection:'row',
        width:x*0.95,
        height:y*0.08,
        backgroundColor:'#23b180',
        marginTop:10,
        borderRadius:20,
        opacity:0.8,
        alignItems:'center',
        paddingLeft:10,
        paddingBottom:10
        


    },
    image_user:{


        width:x*0.2,
        height:y*0.1,
        borderRadius:40,
        marginRight:20

    },
    text_user:{
        color:'#fff',
        fontWeight:"bold",
        marginRight:x*0.4
    },
    text_chat:{
        color:'#fff',
        fontWeight:"bold",
        marginRight:x*0.4,
        fontSize:20,
        color:'#006dc7'
    },
    text_client:{
        color:'#fff',
        marginRight:x*0.4,
        color:'#89939c'
    }

    



})

export default Styles