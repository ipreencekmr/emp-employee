import React from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { emailIdAction } from "emp_employee/actions";
import { useFormContext } from "emp_employee/context";

export const Email = ({ formDispatch }) => {

    const { emailId } = useFormContext();

    const changeEmail = (e) => {
        formDispatch(emailIdAction(e.target.value));
    };

    return (
        <div className="form-group">
            <label htmlFor="emailId">Email</label>

            <div className="input-group">
                <span className="input-group-text">
                    <FontAwesomeIcon icon={ faEnvelope }></FontAwesomeIcon>
                </span>

                <input 
                    type="email" 
                    className="form-control" 
                    id="emailId" 
                    value={ emailId }
                    onChange={ changeEmail }
                    placeholder="Ex: prince.kumar@gmail.com" 
                    required/>

                <div className="invalid-feedback">
                        Please provide email address
                </div>
            </div>
        </div>
    )
}

Email.propTypes = {
    formDispatch: PropTypes.func.isRequired 
};