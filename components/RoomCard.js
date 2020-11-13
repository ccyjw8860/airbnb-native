import React from 'react';
import styled from 'styled-components/native';
import Pt from 'prop-types'
import { Dimensions, Text } from 'react-native';
import Swiper from 'react-native-swiper'
import { TouchableOpacity } from 'react-native-gesture-handler';
import {Ionicons} from '@expo/vector-icons'
import utils from '../utils';
import { toggleFavs } from '../redux/usersSlice';
import {useDispatch} from 'react-redux';


const {width, height} =  Dimensions.get('screen')

const Container = styled.View`
    width:100%;
    margin-bottom:50px;
    align-items:flex-start;
    position:relative;

`
const Name = styled.Text`
    font-size:18px;
    font-weight: 300;
    margin-bottom: 7px;
`;

const PriceContainer = styled.View`
    flex:1;
    flex-direction: row;
`;

const PriceNumber = styled.Text`
    font-weight:800;
    color:black;
`

const PriceText = styled.Text`
`

const SuperHost = styled.View`
    padding: 3px 5px;
    border: 1px solid black;
    border-radius:5px;
    margin-bottom:5px;
`

const SuperHostText = styled.Text`
    text-transform:uppercase;
    font-weight:500;
    font-size: 12px;
`

const PhotosContainer = styled.View`
    height: ${height / 3}px;
    overflow:hidden;
    width:100%;
    margin-bottom:10px;
`;

const DefaultImg = styled.Image`
    width:100%;
    height:100%;
`;

const SlideImg = styled.Image`
    width:100%;
    height:100%;
`

const FavBtn = styled.View`
    background-color:white;
    width: 50px;
    height: 50px;
    justify-content:center;
    align-items:center;
    border-radius:25px;

`

const TOpacity = styled.TouchableOpacity`
    position: absolute;
    z-index:10;
    right:10px;
    top:10px;
`

const RoomCard = ({id, isFav, isSuperHost, photos, name, price}) => {
    const dispatch = useDispatch();
    return(
        <Container>
                <TOpacity onPress={()=>dispatch(toggleFavs(id))}>
                    <FavBtn>
                        <Ionicons size={24} name={utils.isAndroid() ? 'md-heart-empty' : 'ios-heart-empty'}/>
                    </FavBtn>
                </TOpacity>
            <PhotosContainer>
                {photos.length === 0 ? 
                    <DefaultImg resizeMethode='repeat' source={require('../assets/default_house.jpg')}/> 
                    : <Swiper paginationStyle={{marginBottom:-15}} activeDotColor={'white'} dotColor={"rgba(200,200,200,0.5)"}>
                        {photos.map(photo => {
                            return(
                                <SlideImg key = {photo.id} esizeMethode='repeat' source={{uri: photo.file}}/>
                            )
                        })}
                     </Swiper>}
            </PhotosContainer>
            {isSuperHost ? <SuperHost><SuperHostText>SuperHost</SuperHostText></SuperHost> : null}
            <Name>{name}</Name>
            <PriceContainer>
                <PriceNumber>${price} / </PriceNumber><PriceText>night</PriceText>
            </PriceContainer>
        </Container>
    )
}

RoomCard.propTypes = {
    id: Pt.number.isRequired,
    isFav: Pt.bool.isRequired,
    isSuperHost: Pt.bool.isRequired,
    photos: Pt.arrayOf(Pt.shape({
        file: Pt.string
    })),
    name: Pt.string.isRequired,
    price: Pt.number.isRequired
}

export default RoomCard;