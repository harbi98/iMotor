import React, { createContext, useState } from 'react';
import { BASE_URL, processResponse } from '../config';
import { createNavigationContainerRef } from '@react-navigation/native';
import { useToast } from "react-native-toast-notifications";

export const AuthContext = createContext();

export const navigationRef = createNavigationContainerRef()

export function navigate(name) {
  if (navigationRef.isReady()) {
    navigationRef.navigate(name);
  }
}

export const AuthProvider = ({children}) => {
    const toast = useToast();

    const [email, setEmail] = useState();
    const [userToken, setUserToken] = useState();
    const [forgotPasswordToken, setForgotPasswordToken] = useState();
    const [notVerified, setNotVerified] = useState();
    const [passWord, setPassWord] = useState();
    const [confirmPassWord, setConfirmPassWord] = useState();
    const [errorMessage, setErrorMessage] = useState();

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
                console.log(statusCode);
                if(statusCode === 401) {
                    if(data.verify_email == true) {
                        setErrorMessage(data.message);
                        setNotVerified(data.verify_email);
                        setEmail(data.email);
                        setPassWord(text_password);
                    } else {
                        setErrorMessage(data.message);
                    }
                } else if(statusCode === 404){
                    setErrorMessage(data.message);
                } else if(statusCode === 422){
                    setErrorMessage(data.message);
                } else if(statusCode === 200){
                    toast.show(data.message, {
                        type: "custom", // "normal | success | warning | danger | custom"
                        placement: "top", // "top | bottom"
                        duration: 4000,
                        animationType: "zoom-in", // "slide-in | zoom-in"
                    });
                    setUserToken(data.token);
                    setErrorMessage(null);
                } else if (statusCode === 500) {
                    alert(data.message)
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
                    toast.show(data.message, {
                        type: "custom", // "normal | success | warning | danger | custom"
                        placement: "top", // "top | bottom"
                        duration: 4000,
                        animationType: "zoom-in", // "slide-in | zoom-in"
                    });
                    login(email, passWord);
                    setEmail(null);
                    setPassWord(null);
                    setNotVerified(false);
                } else if(statusCode === 422){
                    toast.show(data.message, {
                        type: "danger", // "normal | success | warning | danger | custom"
                        placement: "top", // "top | bottom"
                        duration: 4000,
                        animationType: "zoom-in", // "slide-in | zoom-in"
                    });
                } else if(statusCode === 404){
                    toast.show(data.message, {
                        type: "danger", // "normal | success | warning | danger | custom"
                        placement: "top", // "top | bottom"
                        duration: 4000,
                        animationType: "zoom-in", // "slide-in | zoom-in"
                    });
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
                toast.show(data.message, {
                    type: "custom", // "normal | success | warning | danger | custom"
                    placement: "top", // "top | bottom"
                    duration: 4000,
                    animationType: "zoom-in", // "slide-in | zoom-in"
                });
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
    const forgotPassword = (text_email) => {
        try{
            fetch(BASE_URL+'forgot-password',{
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    email: text_email
                })
            })
            .then(processResponse)
            .then(res => {
                const { statusCode, data } = res;
                console.log(statusCode);
                if(statusCode === 200) {
                    console.log(data.message);
                    setEmail(text_email);
                    navigate('VerifyForgotPassword');
                }
                console.log(data.message);
            })
            .catch((e) => {
                console.log(e);
            })
        } catch (e){
            console.log(e);
        }
    };
    const verifyPasswordReset = (otp) => {
        try{
            fetch(BASE_URL+'forgot-password/verify/password-reset-request',{
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    email: email,
                    verification_code: otp
                })
            })
            .then(processResponse)
            .then(res => {
                const { statusCode, data } = res;
                if(statusCode === 200) {
                    console.log(data.message);
                    navigate('ResetPassword');
                }
                console.log(data.message);
            })
            .catch((e) => {
                console.log(e);
            })
        } catch (e){
            console.log(e);
        }
    };
    const passwordReset = (new_password, confirm_new_password) => {
        try{
            fetch(BASE_URL+'forgot-password/verify/password-reset-request',{
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${forgotPasswordToken}`,
                },
                body: JSON.stringify({
                    email: email,
                    new_password: new_password,
                    confirm_password: confirm_new_password
                })
            })
            .then(processResponse)
            .then(res => {
                const { statusCode, data } = res;
                if(statusCode === 200) {
                    console.log(data.message)
                }
            })
            .catch((e) => {
                console.log(e);
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
                if(statusCode === 200) {
                    toast.show(data.message, {
                        type: "custom", // "normal | success | warning | danger | custom"
                        placement: "top", // "top | bottom"
                        duration: 4000,
                        animationType: "zoom-in", // "slide-in | zoom-in"
                    });
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
            errorMessage,
            forgotPassword,
        }}>{children}</AuthContext.Provider>
    );
}