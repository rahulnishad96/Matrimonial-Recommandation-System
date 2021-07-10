import React, {createContext, useContext, useReducer}from 'react';
import formReducer, {initialState} from '../reducer/formReducer'

const FormContext = createContext();

const useForm = () => {
    const context = useContext(FormContext);

    if(!context) {
        throw new Error('useForm must be used within a valid provider')
    }
    return context;
}

const FormProvider = ({children}) => {
    const [state, dispatch] = useReducer(formReducer, initialState);

    const value = {
        state,
        dispatch
    }
    return (
        <FormContext.Provider value={value}>{children} </FormContext.Provider>
    )

}

export {FormProvider, useForm};