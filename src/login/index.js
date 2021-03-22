const {useState} = require('react')
const React = require('react');
const {View,Text,TouchableOpacity,Image,TextInput,KeyboardAvoidingView} = require('react-native')
const styles = require('./style').default // importar estilos da tela de login


function FormLogin(){


    /*Form login da tela de login. use essa funçao quando for fazer um form login*/

    const [user,Setuser] = useState('') // estado do texto do text input
    const [senha,Setsenha] = useState('') // estado do texto no campo de senha
    
    return(

        <KeyboardAvoidingView style={[styles.container_form_login]}>
            
            <View>
                <TextInput placeholder='Nome de usuário' autoCorrect={false} maxLength={100} style={[styles.input_style]} onChangeText={text=>Setuser(text)} autoCapitalize='none' placeholderTextColor='#a19e9c'></TextInput>
            </View>
            
            <View style={{marginTop:10}}>
                <TextInput placeholder='Senha' autoCorrect={false} maxLength={100} secureTextEntry={true} style={[styles.input_style]} onChangeText={text=>Setsenha(text)} autoCapitalize='none' placeholderTextColor='#a19e9c'></TextInput>
            </View>

            <TouchableOpacity>
                <View style={[styles.button_login_style]}>
                    <Text style={[styles.text_button_login_style]}>Login</Text>
                </View>
            </TouchableOpacity>
           
            <TouchableOpacity style={{marginTop:10}}>
                <Text style={[styles.text_button_register]}>Registrar uma conta?</Text>
            </TouchableOpacity>


        </KeyboardAvoidingView>
        

    )



}

function App({navigation}){


    const image = require('../../assets/wpp.png')


    return(

        <View style={[styles.container_principal]}>

            <Image source={image} style={[styles.image_principal]}></Image>

            <FormLogin></FormLogin>

        </View>


    )


}

export default App