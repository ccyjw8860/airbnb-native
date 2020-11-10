import React from 'react'
import { KeyboardAvoidingView, StatusBar } from 'react-native'
import styled from 'styled-components/native'
import Btn from '../../../components/Auth/Btn'
import Input from '../../../components/Auth/Input'
import DismissKeyboard from '../../../components/DismissKeyboard'


const Container = styled.View`
    flex:1;
    justify-content:center;
    align-items:center;
    margin-top:200px;
`
const InputContainer = styled.View`
    margin-bottom:30px;
`
export default ({firstname, setFirstname, lastname, setLastname, email, setEmail, password, setPassword, loading, handleSubmit}) => {
    return(
        <DismissKeyboard>
            <Container>
                <StatusBar translucent barStyle="dark-content" backgroundColor='transparent'/>
                    <InputContainer>
                        <KeyboardAvoidingView behavior='position'>
                            <Input value={firstname} placeholder="Firt name" autoCapitalize='words' stateFn={setFirstname}/>
                            <Input value={lastname} placeholder="Last name"  autoCapitalize='words' stateFn={setLastname}/>
                        </KeyboardAvoidingView>
                        <Input keyboardType={'email-address'} value={email} placeholder="Email" autoCapitalize="none" stateFn={setEmail}/>
                        <Input vlaue={password} placeholder='Password' isPassword={true} stateFn={setPassword}/>
                    </InputContainer>
                    <Btn loading={loading} text={'Sign Up'} accent onPress={handleSubmit}></Btn>
            </Container>
        </DismissKeyboard>
    )
}