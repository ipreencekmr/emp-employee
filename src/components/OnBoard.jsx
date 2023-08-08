import React from "react"
import PropTypes from "prop-types";
import { useFormContext } from "emp_employee/context";
import { agreeAction } from "emp_employee/actions";

export const OnBoard = ({ formDispatch }) => {

    const { agree } = useFormContext();

    return (
        <div className="form-group">
            <div className="form-check">
                <input 
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
    formDispatch: PropTypes.func.isRequired 
};