import React, { useEffect } from 'react';
import { getRooms } from '../../../redux/roomsSlice';
import ExplorePresenter from './ExplorePresenter';

export default ({getRooms}) => {
    useEffect(()=>{
        getRooms();
    }, []);
    return <ExplorePresenter/>
}


