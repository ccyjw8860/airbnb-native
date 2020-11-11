import React from 'react';
import { ActivityIndicator, ScrollView, Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
// import { ScrollView } from 'react-native-gesture-handler';
import styled from 'styled-components/native'
import RoomCard from '../../../components/RoomCard';

const Container = styled.View`
    flex:1;
    justify-content:center;
    align-items:center;
`

const FakeBar = styled.View`
  height: 40px;
  width: 100%;
  background-color: red;
  box-shadow:5px 5px 18px black;
  margin: 40px 0px 10px 0px;
  border-radius: 7px;
  justify-content: center;
  padding-left: 10px;
`;

const FakeText = styled.Text`
    font-size:16px;
    font-weight:300;
`

export default ({rooms, increasePage}) => {
    if(rooms.length === 0){
        return (
            <Container>
                <ActivityIndicator color='black'/>
            </Container>
        )
    }else{
        return(
            <Container>
                <FakeBar>
                    <FakeText>Search</FakeText>
                </FakeBar>

                <ScrollView showsVerticalScrollIndicator={false} style={{width:'100%'}} contentContainerStyle={{paddingHorizontal:15, paddingTop:30}}>
                    {rooms.map(room => 
                        <RoomCard 
                            key={room.id} 
                            price={room.price} 
                            id={room.id} 
                            name={room.name} 
                            isSuperHost={room.user.superhost} 
                            isFav={room.is_fav} 
                            photos={room.photos} /> )}
                    <TouchableOpacity onPress={increasePage}>
                        <Text>Load More</Text>
                    </TouchableOpacity>
                </ScrollView>
            </Container>
        )
    }
}

