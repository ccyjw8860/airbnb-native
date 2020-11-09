import React, { useState } from 'react'
import { KeyboardAvoidingView, StatusBar, Text, View } from 'react-native'
import styled from 'styled-components/native'
import Btn from '../../components/Auth/Btn'
import Input from '../../components/Auth/Input'
import DismissKeyboard from '../../components/DismissKeyboard'


const Container = styled.View`
    flex:1;
    justify-content:center;
    align-items:center;
    margin-top:200px;
`
const InputContainer = styled.View`
    margin-bottom:30px;

`
export default () => {
    const [firstname, setFirstname] = useState('');
    const [lastname, setLastname] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async() =>{
        if(firstname==='' || lastname===''||username===''||password===''){
            alert('All fields are required');
        }
    }

    return(
        <DismissKeyboard>
            <Container>
                <StatusBar translucent barStyle="dark-content" backgroundColor='transparent'/>
                    <InputContainer>
                        <KeyboardAvoidingView behavior='position'>
                            <Input value={firstname} placeholder="Firt name" stateFn={setFirstname}/>
                            <Input value={lastname} placeholder="Last name" stateFn={setLastname}/>
                        </KeyboardAvoidingView>
                        <Input keyboardType={'email-address'} value={email} placeholder="Email" autoCapitalize="none" stateFn={setEmail}/>
                        <Input vlaue={password} placeholder='Password' isPassword={true} stateFn={setPassword}/>
                    </InputContainer>
                    <Btn text={'Sign Up'} accent onPress={handleSubmit}></Btn>
            </Container>
        </DismissKeyboard>
    )
}