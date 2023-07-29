import React from "react";
import PropTypes from "prop-types";
import { useFormContext } from "../context/formContext";
import {
    ageAction, departmentAction, genderAction, qualificationAction 
} from "../actions/formAction";
import { GENDER_LIST } from "../constants/genderConstant";
import { DEPARTMENT_LIST } from "../constants/departmentConstant";
import { QUALIFICATION_LIST } from "../constants/qualificationConstant";

export const Demographics =  ({ formDispatch }) => {

    const { age, gender, department, qualification } = useFormContext();

    const changeValue = (e) => {

        const value = e.target.value;
        let action;

        switch(e.target.id){
            case "ageId":{
                action = ageAction(value);
            }
                break;
            case "genderId":{
                const payload = GENDER_LIST.find((x) => x.id === Number(value));
                action = genderAction(payload);
            }
                break;
            case "departmentId": {
                const payload = DEPARTMENT_LIST.find(x => x.id === Number(value));
                action = departmentAction(payload);
            }
                break;
            case "qualificationId": {
                const payload = QUALIFICATION_LIST.find(x => x.id === Number(value));
                action = qualificationAction(payload);
            }
                break;
        }

        formDispatch(action);
    }

    return (
        <fieldset className="mt-4">
            <legend><label htmlFor="demographicsFormId">Demographic Details</label></legend>
            <div className="form-row" id="demographicsFormId">
                <div className="form-group col-md-2">
                    <label htmlFor="ageId">Age</label>

                    <input type="number" 
                        maxLength={ 3 } 
                        className="form-control"
                        id="ageId"
                        value={ age } 
                        onChange={ changeValue }
                        required/>

                    <div className="invalid-feedback">
                        Please provide age
                    </div>
                </div>

                <div className="form-group col-md-2">
                    <label htmlFor="genderId">Gender</label>
                    <select 
                        id="genderId"
                        data-testid="selectId"
                        className="form-control"
                        value={ gender.id }
                        onChange={ changeValue }
                        required>
                        <option disabled value="">Select gender</option>
                        {
                            GENDER_LIST.map((x)=><option 
                                key={ x.id } 
                                value={ x.id }>
                                {x.value}
                            </option>)
                        }
                    </select>
                    <div className="invalid-feedback">
                        Please select gender
                    </div>
                </div>

                <div className="form-group col-md-4">
                    <label htmlFor="departmentId">Department</label>

                    <select 
                        id="departmentId"
                        data-testid="selectId"
                        className="form-control"
                        value={ department.id } 
                        onChange={ changeValue }
                        required>
                        <option disabled value="">Choose Department</option>
                        {
                            DEPARTMENT_LIST.map((x)=><option 
                                key={ x.id } 
                                value={ x.id }>
                                {x.value}
                            </option>)
                        }
                    </select>
                    <div className="invalid-feedback">
                        Please choose department
                    </div>
                </div>

                <div className="form-group col-md-4">
                    <label htmlFor="qualificationId">Qualification</label>
                    <select 
                        id="qualificationId"
                        data-testid="selectId"
                        className="form-control" 
                        value={ qualification.id }
                        onChange={ changeValue }
                        required>
                        <option disabled value="">Choose Qualification</option>
                        {
                            QUALIFICATION_LIST.map((x)=><option 
                                key={ x.id } 
                                value={ x.id }>
                                {x.value}
                            </option>)
                        }
                    </select>
                    <div className="invalid-feedback">
                        Please choose qualification
                    </div>
                </div>
            </div>
        </fieldset>
    )
};

Demographics.propTypes = {
    formDispatch: PropTypes.func.isRequired 
};