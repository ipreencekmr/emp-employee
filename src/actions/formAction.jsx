export const FIRST_NAME = "FIRST_NAME";
export const LAST_NAME = "LAST_NAME";
export const EMAIL_ID = "EMAIL_ID";
export const AGE = "AGE";
export const GENDER = "GENDER";
export const DEPARTMENT = "DEPARTMENT";
export const QUALIFICATION = "QUALIFICATION";
export const AGREE = "AGREE";

export const firstNameAction = (firstName) => {
    return {
        type: FIRST_NAME,
        payload: firstName
    }
};

export const lastNameAction = (lastName) => {
    return {
        type: LAST_NAME,
        payload: lastName
    }
};

export const emailIdAction = (emailId) => {
    return {
        type: EMAIL_ID,
        payload: emailId
    }
};

export const ageAction = (age) => {
    return {
        type: AGE,
        payload: age
    }
};

export const genderAction = (gender) => {
    return {
        type: GENDER,
        payload: gender
    }
};

export const departmentAction = (department) => {
    return {
        type: DEPARTMENT,
        payload: department
    }
};

export const qualificationAction = (qualification) => {
    return {
        type: QUALIFICATION,
        payload: qualification
    }
};

export const agreeAction = () => {
    return {
        type: AGREE
    }
}