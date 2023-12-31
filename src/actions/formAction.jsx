export const FIRST_NAME = "FIRST_NAME";
export const LAST_NAME = "LAST_NAME";
export const EMAIL_ID = "EMAIL_ID";
export const AGE = "AGE";
export const GENDER = "GENDER";
export const DEPARTMENT = "DEPARTMENT";
export const QUALIFICATION = "QUALIFICATION";
export const ADDR_LINE_1 = "ADDR_LINE_1";
export const ADDR_LINE_2 = "ADDR_LINE_2";
export const APT_SUITE = "APT_SUITE";
export const SOCIETY = "SOCIETY";
export const CITY = "CITY";
export const STATE = "STATE";
export const COUNTRY = "COUNTRY";
export const ZIP_CODE = "ZIP_CODE";
export const AGREE = "AGREE";
export const ALL = "ALL";

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

export const addressLine1Action = (value) => {
    return {
        type: ADDR_LINE_1,
        payload: value
    }
};

export const addressLine2Action = (value) => {
    return {
        type: ADDR_LINE_2,
        payload: value
    }
};

export const aptSuiteAction = (value) => {
    return {
        type: APT_SUITE,
        payload: value
    }
};

export const societyAction = (value) => {
    return {
        type: SOCIETY,
        payload: value
    }
};

export const cityAction = (value) => {
    return {
        type: CITY,
        payload: value
    }
};

export const stateAction = (value) => {
    return {
        type: STATE,
        payload: value
    }
};

export const countryAction = (value) => {
    return {
        type: COUNTRY,
        payload: value
    }
};

export const zipCodeAction = (value) => {
    return {
        type: ZIP_CODE,
        payload: value
    }
};

export const agreeAction = () => {
    return {
        type: AGREE
    }
}

export const allAction = (value) => {
    return {
        type: ALL,
        payload: value
    }
}