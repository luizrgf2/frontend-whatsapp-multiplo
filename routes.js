const React = require('react')
const {NavigationContainer} = require('@react-navigation/native')
const {createStackNavigator} = require('@react-navigation/stack')
const Login = require('./src/pages/login/index').default
const Register = require('./src/pages/register/index').default
const Home = require('./src/pages/home/route').default



const Stack = createStackNavigator() // stack navigation criada



function PrimeraTela(){


    return(


        <NavigationContainer>
            <Stack.Navigator initialRouteName='Login'>
                <Stack.Screen name='Login' component={Login} options={{headerStyle:{backgroundColor:'#23b180'}}}></Stack.Screen>
                <Stack.Screen name='Register' component={Register} options={{headerStyle:{backgroundColor:'#23b180'}, title:'Registro'}}></Stack.Screen>
                <Stack.Screen name='Home' component={Home} options={{headerStyle:{backgroundColor:'#23b180'}, title:'Home'}}></Stack.Screen>
            </Stack.Navigator>
        </NavigationContainer>

    )

}


export default PrimeraTela
