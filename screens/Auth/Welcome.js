import { BlurView } from 'expo-blur'
import React from 'react'
import { StatusBar } from 'react-native'
import styled from 'styled-components/native'
import Btn from '../../components/Auth/Btn'

const LOGO_URL = "http://logok.org/wp-content/uploads/2014/07/airbnb-logo-belo-219x286.png"

const Container = styled.View`
    flex:1;
`
const Image = styled.Image`
    position:absolute;
    z-index:-1;
    top:0;
    width: 100%;
    height:100%;
`
const Logo = styled.Image`
margin-top:200px;
    width:100px;
    height:100px;
`

const BtnContainer = styled.View`
    margin-top: 50px;
`;

export default ({navigation}) => {
    const goToSignUp = () =>{
        navigation.navigate('SignUp')
    }
    const goToSignIn = () =>{
        navigation.navigate('SignIn')
    }
    return(
        <Container>
            <BlurView tint='light' intensity={70} style={{flex:1, width:'100%', height:'100%', justifyContent:'center', alignItems:'center'}}>
                <Logo source={{uri:LOGO_URL}}/>
                <BtnContainer>
                    <Btn onPress={goToSignUp} text={'Sign Up'} accent={true}/>
                    <Btn onPress={goToSignIn} text={'Sign In'} />
                </BtnContainer>
            </BlurView>
                <Image source={require('../../assets/main_bg1.png')}/>
            <StatusBar translucent barStyle="white-content" backgroundColor='transparent' />
        </Container>
    )
}
