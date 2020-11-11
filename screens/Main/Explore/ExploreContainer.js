import React, { useEffect, useState } from 'react';
import { getRooms, increasePage } from '../../../redux/roomsSlice';
import ExplorePresenter from './ExplorePresenter';

export default ({getRooms, rooms,page, increasePage}) => {
    useEffect(()=>{
        getRooms(1);
    },[])
    useEffect(()=>{
        getRooms(page);
    }, [page]);
    return <ExplorePresenter rooms={rooms} increasePage={increasePage}/>
}


