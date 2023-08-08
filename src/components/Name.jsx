import React from "react"
import PropTypes from "prop-types";
import { useFormContext } from "emp_employee/context";
import { firstNameAction, lastNameAction } from "emp_employee/actions";

export const Name = ({ formDispatch }) => {

    const { firstName, lastName } = useFormContext();

    const changeFirstName = (e) => {
        formDispatch(firstNameAction(e.target.value));
    };

    const changeLastName = (e) => {
        formDispatch(lastNameAction(e.target.value));
    };

    return (
        <div className="form-row">
            <div className="form-group col-md-6">
                <label htmlFor="firstNameId">First Name</label>

                <input 
                    type="text" 
                    className="form-control" 
                    id="firstNameId" 
                    value={ firstName }
                    placeholder="Ex: Prince" 
                    onChange={ changeFirstName }
                    required/>

                <div className="invalid-feedback">
                        Last name is required
                </div>
            </div>

            <div className="form-group col-md-6">
                <label htmlFor="lastNameId">Last Name</label>

                <input type="text" 
                    className="form-control" 
                    id="lastNameId" 
                    value={ lastName }
                    placeholder="Ex: Sharma" 
                    onChange={ changeLastName }
                    required/>

                <div className="invalid-feedback">
                        Last name is required
                </div>
            </div>
        </div>
    )
}

Name.propTypes = {
    formDispatch: PropTypes.func.isRequired 
};