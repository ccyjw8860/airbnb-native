import React from 'react';
import styled from 'styled-components/native';
import {Dimensions, TouchableOpacity} from 'react-native'
import PropTypes from "prop-types";
import colors from '../../colors';

const {width, height} = Dimensions.get('screen')

const Container = styled.TextInput`
    width: ${width/2}px;

`;

const Input = ({value, placeholder, isPassword=false, autoCapitalize, stateFn}) => {
    return(
        <Container value={value} placeholder={placeholder} secureTextEntry={isPassword ? true : false}
        autoCapitalize={autoCapitalize} onChangeText={(text)=>stateFn(text)}/>
    )
   
}

Input.propTypes = {
    value: PropTypes.string,
    placeholder:PropTypes.string, 
}

export default Input;