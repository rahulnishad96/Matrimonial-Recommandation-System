import {ADD_FORM_DATA} from './actionTypes'

export const initialState = {
    community: "",
dait: "",
dob: "",
fullname: "",
gender: "",
hight: "",
income: "",
location: "",
maritalStatus: "",
mobileNumber: "",
motherTongue: "",
password: "",
qualification: "",
subcommunity: "",
userId: "",
workAs: "",
workIn: ""
};


const formReducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_FORM_DATA: 
             return {
                ...state,
                ...action.payload
    };
    }
    
}
export default formReducer;