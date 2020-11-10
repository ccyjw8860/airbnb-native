import {createSlice} from '@reduxjs/toolkit';
import api from '../api';

const roomSlice = createSlice({
    name:'rooms',
    initialState:{
        explore:{
            page:1,
            rooms:[]
        },
        favs:[]
    },
    reducers:{
        setExploreRooms(state, action){
            state.explore.rooms.push(action.payload.rooms);
            state.explore.page = action.payload.page;
        }
    }
})

export const {setExploreRooms} = roomSlice.actions;

export const getRooms = () => async dispatch => {
    try{
        const {data} = await api.rooms();
    }catch(e){
        console.log(e)
    }
}

export default roomSlice.reducer;