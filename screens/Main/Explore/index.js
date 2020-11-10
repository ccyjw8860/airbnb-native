import React from 'react';
import { connect } from 'react-redux';
import { getRooms } from '../../../redux/roomsSlice';
import ExploreContainer from './ExploreContainer';


function mapDispatchToProps(dispatch){
    return{
        getRooms: ()=> dispatch(getRooms())
    }
}

function mapStateToProps(state){
    console.log(state.roomsReducer);
    return state.roomsReducer;
}

export default connect(mapStateToProps, mapDispatchToProps)(ExploreContainer);