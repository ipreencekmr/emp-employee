import React from "react";
import PropTypes from "prop-types";

export const defaultValue = {
    firstName: "",
    lastName: "",
    emailId: "",
    age: "",
    gender: "MALE",
    department: {
        id: "",
        value: ""
    },
    qualification: {
        id: "",
        value: ""
    },
    address: {
        addressLine1: "",
        addressLine2: "",
        aptSuite: "",
        society: "",
        city: "",
        state: "",
        country: "",
        zipCode: "",
    },
    agree: false
};

export const FormContext = React.createContext(defaultValue);

export const FormContextProvider = ({ children }) => {
    return (
        <FormContext.Provider value={ defaultValue }>{children}</FormContext.Provider>
    )
};

export const useFormContext = () => React.useContext(FormContext);

FormContextProvider.propTypes = {
    children: PropTypes.node.isRequired 
};