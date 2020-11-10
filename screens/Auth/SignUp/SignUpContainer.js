import React, { useState } from 'react'
import api from '../../../api'
import utils from '../../../utils'
import SignUpPresenter from './SignUpPresenter';

export default ({navigation:{navigate}}) => {
    const [firstname, setFirstname] = useState('');
    const [lastname, setLastname] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const isFormValid = () =>{
        if(firstname==='' || lastname===''||email===''||password===''){
            alert('All fields are required');
            return false
        }
        if(!utils.isEmail(email)){
            alert('email 똑바로 적어라')
            return false
        }
        return true
    }
    const handleSubmit = async() =>{
        if(!isFormValid()){
            return;
        }
        setLoading(true);
        try{
            const {status} = await api.createAccount({
                first_name: firstname,
                last_name: lastname,
                email,
                username:email,
                password
            });
            if(status === 201){
                alert('Account created. Please Sign in')
                navigate('SignIn', {email, password});
            }
        } catch(e){
            console.log(e)
            alert('The email is already taken')
        } finally{
            setLoading(false);
        }
    }

    return(
        <SignUpPresenter firstname={firstname} setFirstname={setFirstname} lastname={lastname} setLastname={setLastname} email={email} setEmail={setEmail} password={password} setPassword={setPassword} loading={loading} handleSubmit={handleSubmit}/>
    )
}