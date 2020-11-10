import React from 'react';
import styled from 'styled-components/native';
import {ActivityIndicator, Dimensions, TouchableOpacity} from 'react-native'
import PropTypes from "prop-types";
import colors from '../../colors';

const {width, height} = Dimensions.get('screen')

const Button = styled.View`
    padding: 15px 0px;
    margin: 5px 0px;
    align-items: center;
    border-radius:10px;
    border: ${props => props.accent ? '1px' : '0px'} solid ${props => props.accent ? "transparent" : colors.black};
    width: ${width / 2}px;
    background-color:${props => props.accent ? colors.red:'white'};
`;

const Text = styled.Text`
    color:${props=>props.accent ? 'white' : colors.black};
    font-weight:600;
    font-size:14px;
`;

const Btn = ({loading, onPress, text, accent = false}) => {
    return(
        <TouchableOpacity onPress={loading ? null : onPress}>
            <Button accent={accent}>
                {/* {loading ? <ActivityIndicator color={accent ? 'white' : 'black'}/> : <Text accent={accent}>{text}</Text>} */}
                <Text accent={accent}>{text}</Text>
            </Button>
        </TouchableOpacity>
    )

}

Btn.propTypes = {
    onPress: PropTypes.func.isRequired,
    text: PropTypes.string.isRequired,
    accent: PropTypes.bool,
    loading: PropTypes.bool
}

export default Btn;