import React from 'react'
import { StatusBar} from 'react-native'
import styled from 'styled-components/native'
import Btn from '../../../components/Auth/Btn'
import Input from '../../../components/Auth/Input'
import DismissKeyboard from '../../../components/DismissKeyboard'


const Container = styled.View`
    flex:1;
    justify-content:center;
    align-items:center;
    margin-top: 100px;
`

const InputContainer = styled.View`
    margin-bottom:30px;

`
export default ({email, setEmail, inputPassword, setInputPassword, handleSubmit}) => {
    return(
        <DismissKeyboard>
            <Container>
                <StatusBar translucent barStyle="dark-content" backgroundColor='transparent'/>
                    <InputContainer>
                        <Input value={email} placeholder="Username" autoCapitalize="none" stateFn={setEmail}/>
                        <Input vlaue={inputPassword} placeholder='Password' isPassword={true} stateFn={setInputPassword}/>
                    </InputContainer>
                    <Btn text={'Sign In'} accent onPress={handleSubmit}></Btn>
            </Container>
        </DismissKeyboard>
    )
}