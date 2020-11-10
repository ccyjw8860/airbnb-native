import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import React from 'react';
import { Platform } from 'react-native';
import styled from 'styled-components/native';
import colors from '../../colors';
import utils from '../../utils';


const Container = styled.View`
`


export default () => {
    return(
        <Container>
            <MaterialIcons name={utils.isAndroid() ? "keyboard-arrow-left":"keyboard-arrow-left"} size={40} color={colors.red}/>
        </Container>
    )
}