import React, {
    useEffect,
    useReducer, useRef, useState 
} from "react";
import Address from "emp_address/Address";
import { Name } from "./Name";
import { Email } from "./Email";
import { Demographics } from "./Demographics";
import { OnBoard } from "./OnBoard";
import { useParams } from "react-router-dom";
import { useEmployee } from "../hooks/useEmployee";
import { useEmployeeInfo } from "../hooks/useEmployeeInfo";
import { formReducer } from "emp_employee/reducer";
import { FormContext, defaultValue } from "emp_employee/context";
import { ErrorBanner } from "./ErrorBanner";
import { SuccessBanner } from "./SuccessBanner";
import { allAction } from "../actions/formAction";

export const Home = () => {
     
    let backLink = useRef(null);

    let { id } = useParams();

    const [formState, formDispatch] = useReducer(formReducer, defaultValue);

    const {
        isLoading: empLoading, 
        data: empData, 
        error: empError,
        fetchEmployeeInfo
    } = useEmployeeInfo();

    const {
        isLoading, 
        data, 
        error,
        updateEmployee,
    } =  useEmployee();

    useEffect(()=>{
        if(!empLoading && !empError && empData) {
            const updateAction = allAction(empData);
            formDispatch(updateAction);
        }
    }, [empLoading, empError, empData]);

    useEffect(() => {
        if(id) fetchEmployeeInfo(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [id]);

    useEffect(()=>{
        if(!error && data){
            backLink?.current.click();
        }
    }, [data, error]);

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

        const isUpdate = id ? true : false;
        const empId = id;
        const body = JSON.stringify(formState);

        console.info(`Submit Form => ${JSON.stringify(formState)}`);
        updateEmployee(isUpdate, empId, body);
    };

    return (
        <FormContext.Provider value={ formState }>
            <a ref={ backLink } 
                className="d-none" 
                aria-hidden={ true } 
                href="/">Go Back</a>
            {error && <ErrorBanner></ErrorBanner>}
            {data && <SuccessBanner></SuccessBanner>}
            <form data-testid="formId" 
                ref={ formRef } 
                className={ `p-2 ${formValidationClass}` } 
                noValidate>
                <Name formDispatch={ formDispatch }></Name>

                <Email formDispatch={ formDispatch }></Email>

                <Demographics formDispatch={ formDispatch }></Demographics>
                
                <Address formDispatch={ formDispatch }/>

                <OnBoard isUpdate={ id ? true: false } formDispatch={ formDispatch }></OnBoard>

                <button
                    type="submit" 
                    className="btn btn-outline-success" 
                    onClick={ (e) => submitForm(e) } disabled={ isLoading }>
                    {isLoading && <span 
                        className="spinner-border spinner-border-sm me-2" 
                        role="status" 
                        aria-hidden="true"></span>}
                    {id ? "Update": "Add"}
                </button>
            </form>
        </FormContext.Provider>
    );
};