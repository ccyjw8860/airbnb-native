import React from 'react';
import { createStackNavigator, HeaderTitle } from '@react-navigation/stack';
import Welcome from '../screens/Auth/Welcome';
import SignUp from '../screens/Auth/SignUp';
import SignIn from '../screens/Auth/SignIn';
import BackBtn from '../components/Auth/BackBtn';
import { withTheme } from 'styled-components';


const Auth = createStackNavigator();

export default () => {
    return (
        <Auth.Navigator headerMode='float'
                        screenOptions={{
                            headerBackTitleVisible:false,
                            headerTransparent:true,
                            headerBackImage:()=><BackBtn/>}}>
            <Auth.Screen 
                name='Welcome' 
                component={Welcome} 
                options={{
                    title:'',
                    headerTitleStyle:{
                        color:'black',
                        justifyContent:'center',
                        alignItems:'center',
                        flex:1
                    }
                }}
                screenOptions={{}}/>
            <Auth.Screen name='SignIn' component={SignIn} options={{title:'Sign In'}}/>
            <Auth.Screen name='SignUp' component={SignUp} options={{title:'Sign Up'}}/>
        </Auth.Navigator>
    )
}
