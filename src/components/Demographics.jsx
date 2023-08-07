import React, { useState } from "react";
import PropTypes from "prop-types";
import { useFormContext } from "emp_employee/context";
import {
    ageAction, departmentAction, genderAction, qualificationAction 
} from "emp_employee/actions";
import { GENDER_LIST } from "../constants/genderConstant";
import { useDepartments } from "../hooks/useDepartments";
import { useQualifications } from "../hooks/useQualifications";

export const Demographics =  ({ formDispatch }) => {

    const [genderValue, setGenderValue] = useState(1);
    const { age, department, qualification } = useFormContext();

    const { data: departmentList } = useDepartments();
    const { data: qualificationList } = useQualifications();

    const changeValue = (e) => {

        const value = e.target.value;
        let action;

        switch(e.target.id){
            case "ageId":{
                action = ageAction(value);
            }
                break;
            case "genderId":{
                setGenderValue(value);
                const genderObj = GENDER_LIST.find((x) => x.id === Number(value));
                action = genderAction(genderObj.value);
            }
                break;
            case "departmentId": {
                const payload = departmentList?.find(x => x.id === Number(value));
                action = departmentAction(payload);
            }
                break;
            case "qualificationId": {
                const payload = qualificationList?.find(x => x.id === Number(value));
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
                        value={ genderValue }
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
                        value={ department?.id } 
                        onChange={ changeValue }
                        required>
                        <option disabled value="">Choose Department</option>
                        {
                            departmentList?.map((x)=><option 
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
                        value={ qualification?.id }
                        onChange={ changeValue }
                        required>
                        <option disabled value="">Choose Qualification</option>
                        {
                            qualificationList?.map((x)=><option 
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