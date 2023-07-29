import React, {
    useReducer, useRef, useState 
} from "react";
import { FormContext } from "../context/formContext";
import { formReducer } from "../reducer/formReducer";
import { defaultValue } from "../context/formContext";
import { Name } from "./Name";
import { Email } from "./Email";
import { Demographics } from "./Demographics";
import { OnBoard } from "./OnBoard";

export const Home = () => {

    const [formState, formDispatch] = useReducer(formReducer, defaultValue);
    const [formValidationClass, setFormValidationClass] = useState("needs-validation");
    const formRef = useRef(null);

    const submitForm = (e) => {

        e.preventDefault();
        e.stopPropagation();

        const form = formRef.current;
        const isFormValidated = form.checkValidity();

        if(!isFormValidated) {
            setFormValidationClass("was-validated");
            return;
        }
        console.log(`Submit Form => ${JSON.stringify(formState)}`);
    };

    return (
        <FormContext.Provider value={ formState }>
            <form data-testid="formId" 
                ref={ formRef } 
                className={ `p-2 ${formValidationClass}` } 
                noValidate>
                <Name formDispatch={ formDispatch }></Name>

                <Email formDispatch={ formDispatch }></Email>

                <Demographics formDispatch={ formDispatch }></Demographics>
                
                <OnBoard formDispatch={ formDispatch }></OnBoard>

                <button
                    type="submit" 
                    className="btn btn-outline-success" 
                    onClick={ (e) => submitForm(e) }>Add</button>
            </form>
        </FormContext.Provider>
    );
};