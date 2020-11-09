import React from 'react';
import styled from 'styled-components/native';
import {Dimensions, TouchableOpacity} from 'react-native'
import PropTypes from "prop-types";
import colors from '../../colors';

const {width, height} = Dimensions.get('screen')

const Container = styled.TextInput`
    width: ${width/2}px;
    border: 1px solid rgb(120,120,120);
    border-radius: 10px;
    padding: 10px 0px;
    padding-left: 20px;
    background-color: white;
    margin-bottom:10px;
`;

const Input = ({value, placeholder, isPassword=false, autoCapitalize, stateFn,keyboardType}) => {
    return(
        <Container keyboardType={keyboardType} value={value} placeholder={placeholder} secureTextEntry={isPassword ? true : false}
        autoCapitalize={autoCapitalize} onChangeText={(text)=>stateFn(text)}/>
    )
   
}

Input.propTypes = {
    value: PropTypes.string,
    placeholder:PropTypes.string, 
    isPassword:PropTypes.bool,
    autoCapitalize: PropTypes.string,
    stateFn:PropTypes.func.isRequired
}

export default Input;