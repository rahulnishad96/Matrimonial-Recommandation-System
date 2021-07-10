import {ADD_FORM_DATA} from './actionTypes'

export const initialState = {
    fullname:'',
    gender:"",
    motherTongue:"",
    community:"",
    location:"",
    withFamily:"",
    marriedStatus:"",
    height:"",
    deit:"",
    subCommunity:"",
    qualification:"",
    income:"",
    workAs:"",
    workIn:"",
    userId:"",
    password:"",
    dob:"",
    mobNumber:""
  };


const formReducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_FORM_DATA: 
        console.log( {
            ...state,
            ...action.payload
        } , "data that is getting set in state"
        )
             return {
                ...state,
                ...action.payload
    };
    }
    
}
export default formReducer;