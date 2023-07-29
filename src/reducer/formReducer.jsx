import {
    AGE, AGREE, DEPARTMENT, EMAIL_ID, FIRST_NAME, GENDER, LAST_NAME, QUALIFICATION 
} from "../actions/formAction";

export const formReducer = (state, action) => {
    switch(action.type) {
        case FIRST_NAME:{
            return {
                ...state,
                firstName: action.payload 
            }
        }
        case LAST_NAME:{
            return {
                ...state,
                lastName: action.payload 
            }
        }
        case EMAIL_ID:{
            return {
                ...state,
                emailId: action.payload 
            }
        }    
        case AGE:{
            return {
                ...state,
                age: action.payload 
            }
        }
        case GENDER:{
            return {
                ...state,
                gender: action.payload 
            }
        }
        case DEPARTMENT:{
            return {
                ...state,
                department: action.payload 
            }
        }
        case QUALIFICATION:{
            return {
                ...state,
                qualification: action.payload 
            }
        }
        case AGREE:{
            return {
                ...state,
                agree: !state.agree
            }
        }
        default:{
            throw Error("Unknown action.");
        }
    }
}