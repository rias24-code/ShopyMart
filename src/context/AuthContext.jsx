import React, { createContext, useReducer } from 'react'
export const AuthContext = createContext();

const initialState = {
    user : JSON.parse(localStorage.getItem('user')) || null,
    isAuthenticated : !!localStorage.getItem('user'),
    error : null
}

function authReducer(state, action) {
    switch(action.type){
        case "LOGIN" : 
            localStorage.setItem('user', JSON.stringify(action.payload));
            return { ...state, user : action.payload, isAuthenticated: true, error: null};
        case "REGISTER" : 
            return { ...state, error : null}
        case "LOGOUT" :
            localStorage.removeItem('user');
            return { user : null, isAuthenticated : false, error : null};
        case "ERROR" :
            return { ...state, error : action.payload};
        default :
            return state;
    }
}

export const AuthProvider = ({ children }) => {
    const [state, dispatch] = useReducer (authReducer, initialState);
    return (
        <AuthContext.Provider value={{state, dispatch}} >
            {children}
        </AuthContext.Provider>
    )
}