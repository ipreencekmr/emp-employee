import React, { useEffect, useRef } from "react"
import PropTypes from "prop-types";
import { useFormContext } from "emp_employee/context";
import { agreeAction } from "emp_employee/actions";

export const OnBoard = ({ formDispatch, isUpdate }) => {

    const cbxInput = useRef(null);

    const { agree } = useFormContext();

    useEffect(()=> {
        if(isUpdate) cbxInput?.current.click();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <div className={ `form-group ${isUpdate?"d-none":""}` }>
            <div className="form-check">
                <input 
                    ref={ cbxInput }
                    className="form-check-input" 
                    type="checkbox" 
                    id="onboardId" 
                    defaultChecked={ agree }
                    onClick={ () => formDispatch(agreeAction()) }
                    required/>
                <label className="form-check-label" htmlFor="onboardId">
                        On Boarded
                </label>
                <div className="invalid-feedback">
                        You must agree that employee has on boarded
                </div>
            </div>
        </div>
    )
};

OnBoard.propTypes = {
    formDispatch: PropTypes.func.isRequired,
    isUpdate: PropTypes.bool
};