import React, { createContext, useState } from 'react';
import { BASE_URL, processResponse } from '../config';
import { createNavigationContainerRef } from '@react-navigation/native';

export const AuthContext = createContext();

export const navigationRef = createNavigationContainerRef()

export function navigate(name) {
  if (navigationRef.isReady()) {
    navigationRef.navigate(name);
  }
}

export const AuthProvider = ({children}) => {
    const [email, setEmail] = useState('');
    const [userToken, setUserToken] = useState();
    const [notVerified, setNotVerified] = useState();
    const [passWord, setPassWord] = useState();

    const login = async (text_email, text_password) => {
        try{
            fetch(BASE_URL+'login',{
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    email: text_email,
                    password: text_password,
                })
            })
            .then(processResponse)
            .then(res => {
                const { statusCode, data } = res;
                if(statusCode === 401) {
                    if(data.verify_email == true) {
                        alert(data.message);
                        setNotVerified(data.verify_email);
                        setEmail(data.email);
                        setPassWord(text_password);
                    } else {
                        alert(data.message);
                    }
                } else if(statusCode === 200){
                    alert("Successfully Logged In!");
                    setUserToken(data.token)
                }
            })
            .catch((e) => {
                console.log(e);
                console.log('Login Error!');
            })
        } catch (e){
            console.log(e);
        }
    }
    const verify = (verification_code) => {
        try{
            fetch(BASE_URL+'verify/email',{
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    email: email,
                    verification_code: verification_code,
                })
            })
            .then(processResponse)
            .then(res => {
                const { statusCode, data } = res;
                console.log("Status Code", statusCode);
                console.log(data.message);
                if(statusCode === 200){
                    login(email, passWord);
                    setNotVerified(false);
                } else if(statusCode === 422){
                    alert(data.message);
                } else if(statusCode === 404){
                    alert(data.message);
                }
            })
            .catch((e) => {
                console.log(e);
                alert('Verification Error!');
            })
        } catch (e){
            console.log(e);
        }
    }
    const registerUser = (text_firstName, text_lastName, text_email, text_password, text_confirmPassword) => {
        try{
            fetch(BASE_URL+'register',{
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    first_name: text_firstName,
                    last_name: text_lastName,
                    email: text_email,
                    password: text_password,
                    confirm_password: text_confirmPassword,
                })
            })
            .then(processResponse)
            .then(res => {
                const { statusCode, data } = res;
                console.log("Status Code", statusCode);
                alert(data.message);
                navigate('Login');
            })
            .catch((e) => {
                console.log(e);
                console.log('Registration Error!');
            })
        } catch (e){
            console.log(e);
        }
    };

    const logout = () => {
        try{
            fetch(BASE_URL+'logout',{
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${userToken}`,
                },
            })
            .then(processResponse)
            .then(res => {
                const { statusCode, data } = res;
                console.log("Status Code", statusCode);
                alert(data.message);
                if(statusCode === 200) {
                    setUserToken(null);
                }
            })
            .catch((e) => {
                console.log(e);
                console.log('Logout Error!');
            })
        } catch (e){
            console.log(e);
        }
    };

    return (
        <AuthContext.Provider value={{
            login,
            userToken,
            logout,
            notVerified,
            email,
            verify,
            registerUser,
        }}>{children}</AuthContext.Provider>
    );
}