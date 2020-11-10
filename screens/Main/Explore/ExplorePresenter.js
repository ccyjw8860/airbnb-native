import React from 'react';
import { ActivityIndicator, ScrollView } from 'react-native';
// import { ScrollView } from 'react-native-gesture-handler';
import styled from 'styled-components/native'
import RoomCard from '../../../components/RoomCard';

const Container = styled.View`
    flex:1;
    justify-content:center;
    align-items:center;
`;

const Text = styled.Text``;

export default ({rooms}) => {
    if(rooms.length === 0){
        return (
            <Container>
                <ActivityIndicator color='black'/>
            </Container>
        )
    }else{
        return(
            <Container>
                <ScrollView showsVerticalScrollIndicator={false} style={{width:'100%', marginTop:150}} contentContainerStyle={{paddingHorizontal:15}}>
                    {rooms.map(room => 
                        <RoomCard 
                            key={room.id} 
                            price={room.price} 
                            id={room.id} 
                            name={room.name} 
                            isSuperHost={room.user.superhost} 
                            isFav={room.is_fav} 
                            photos={room.photos} /> )}
                </ScrollView>
            </Container>
        )
    }
}

