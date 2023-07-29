import React from "react";

export const defaultValue = {
    firstName: "",
    lastName: "",
    emailId: "",
    age: "",
    gender: {
        id: "",
        value: ""
    },
    department: {
        id: "",
        value: ""
    },
    qualification: {
        id: "",
        value: ""
    },
    agree: false
};

export const FormContext = React.createContext(defaultValue);

export const useFormContext = () => React.useContext(FormContext);