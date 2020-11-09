import React, { useState } from 'react'
import { StatusBar, Text, TouchableOpacity, View,TouchableWithoutFeedback, Keyboard } from 'react-native'
import styled from 'styled-components/native'
import Btn from '../../components/Auth/Btn'
import Input from '../../components/Auth/Input'
import DismissKeyboard from '../../components/DismissKeyboard'

const Container = styled.View`
    flex:1;
    justify-content:center;
    align-items:center;
    margin-top: 100px;
`

const InputContainer = styled.View`
    margin-bottom:30px;

`
export default () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const handleSubmit = () =>{
        return(alert(`${username}${password}`))
    }

    return(
        <DismissKeyboard>
            <Container>
                <StatusBar translucent barStyle="dark-content" backgroundColor='transparent'/>
                    <InputContainer>
                        <Input value={username} placeholder="Username" autoCapitalize="none" stateFn={setUsername}/>
                        <Input vlaue={password} placeholder='Password' isPassword={true} stateFn={setPassword}/>
                    </InputContainer>
                    <Btn text={'Sign Up'} accent onPress={handleSubmit}></Btn>
            </Container>
        </DismissKeyboard>
    )
}