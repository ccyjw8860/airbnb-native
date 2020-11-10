import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Explore from '../screens/Main/Explore';
import Saved from '../screens/Main/Saved';
import MapScreen from '../screens/Main/MapScreen';
import Profile from '../screens/Main/Profile';
import colors from '../colors';
import utils from '../utils';
import { Ionicons } from '@expo/vector-icons';

const Main = createBottomTabNavigator();

export default ()=>(
    <Main.Navigator tabBarOptions={{
        activeTintColor:colors.red,
        tabStyle:{
            paddingBottom:5,
            paddingTop:5
        },
        labelStyle:{
            textTransform:'uppercase',
            fontWeight:'600'
        }
    }} screenOptions={({route})=>({
        tabBarIcon:({focused}) => {
            const isAndroid = utils.isAndroid();
            let iconName = `${isAndroid ? 'md-' : 'ios-'}`
            if(route.name==='Explore'){
                iconName += 'search'
            }else if(route.name==='Saved'){
                iconName += 'heart'
            }else if(route.name==='Map'){
                iconName += 'map'
            }else if(route.name==='Profile'){
                iconName += 'person'
            }
            return <Ionicons 
                        name={iconName} 
                        color={focused ? colors.red : 'grey'}
                        size={26}/>

        }
    })}>

        <Main.Screen name='Explore' component={Explore}></Main.Screen>
        <Main.Screen name='Saved' component={Saved}></Main.Screen>
        <Main.Screen name='Map' component={MapScreen}></Main.Screen>
        <Main.Screen name='Profile' component={Profile}></Main.Screen>
    </Main.Navigator>
)