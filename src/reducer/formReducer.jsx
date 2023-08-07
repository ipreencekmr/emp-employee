import {
    AGE, AGREE, ALL, DEPARTMENT, EMAIL_ID, FIRST_NAME, GENDER, LAST_NAME, QUALIFICATION 
} from "../actions/formAction";

import {
    ADDR_LINE_1, ADDR_LINE_2, APT_SUITE, 
    SOCIETY, CITY, STATE, COUNTRY, ZIP_CODE 
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
        case ADDR_LINE_1:{
            return {
                ...state,
                address: {
                    ...state.address,
                    addressLine1: action.payload 
                }
            }
        }
        case ADDR_LINE_2:{
            return {
                ...state,
                address: {
                    ...state.address,
                    addressLine2: action.payload 
                }
            }
        }
        case APT_SUITE:{
            return {
                ...state,
                address: {
                    ...state.address,
                    aptSuite: action.payload 
                }
            }
        }    
        case SOCIETY:{
            return {
                ...state,
                address: {
                    ...state.address,
                    society: action.payload 
                }
            }
        }
        case CITY:{
            return {
                ...state,
                address: {
                    ...state.address,
                    city: action.payload 
                }
            }
        }
        case STATE:{
            return {
                ...state,
                address: {
                    ...state.address,
                    state: action.payload
                }
            }
        }
        case COUNTRY:{
            return {
                ...state,
                address: {
                    ...state.address,
                    country: action.payload 
                }
            }
        }
        case ZIP_CODE:{
            return {
                ...state,
                address: {
                    ...state.address,
                    zipCode: action.payload 
                }
            }
        }
        case ALL:{
            return {
                ...action.payload
            }
        }
        default:{
            throw Error("Unknown action.");
        }
    }
}