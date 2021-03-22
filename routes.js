const React = require('react')
const {NavigationContainer} = require('@react-navigation/native')
const {createStackNavigator} = require('@react-navigation/stack')
const Login = require('./src/login/index').default



const Stack = createStackNavigator() // stack navigation criada

function PrimeraTela(){


    return(


        <NavigationContainer>
            <Stack.Navigator initialRouteName='Login'>
                <Stack.Screen name='Login' component={Login} options={{headerStyle:{backgroundColor:'#23b180'}}}></Stack.Screen>
            </Stack.Navigator>
        </NavigationContainer>

    )

}


export default PrimeraTela
