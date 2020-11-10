import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { userLogin } from '../../../redux/usersSlice' 
import utils from '../../../utils'
import SignInPresenter from './SignInPresenter'


export default ({route:{params}}) => {
    const dispatch = useDispatch();
    const [email, setEmail] = useState(params?.email);
    const [inputPassword, setInputPassword] = useState(params?.password);
    const isFormValid = () => {
        if(email === '' || inputPassword === ''){
            alert('All fields are required');
            return false
        }
        if(!utils.isEmail(email)){
            alert('Email is invalid')
            return false
        }
        return true;
    }
    const handleSubmit = () =>{
        if(!isFormValid()){
            return;
        }
        dispatch(userLogin({
            username:email,
            password:inputPassword
        }))
    }


    return(
        <SignInPresenter email={email} setEmail={setEmail} inputPassword={inputPassword} setInputPassword={setInputPassword} handleSubmit={handleSubmit}/>
    )
}