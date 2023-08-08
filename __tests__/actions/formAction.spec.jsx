import {
    AGE,
    AGREE,
    DEPARTMENT,
    EMAIL_ID,
    FIRST_NAME, 
    GENDER, 
    LAST_NAME, 
    QUALIFICATION, 
    ADDR_LINE_1, 
    ADDR_LINE_2, 
    APT_SUITE, 
    SOCIETY, 
    CITY, 
    STATE, 
    COUNTRY, 
    ZIP_CODE,
    ALL,
    ageAction, agreeAction, departmentAction, 
    emailIdAction, firstNameAction, genderAction, 
    lastNameAction, qualificationAction, 
    addressLine1Action, addressLine2Action, 
    aptSuiteAction, societyAction, 
    cityAction, stateAction, 
    countryAction, zipCodeAction, allAction, 
} from "../../src/actions/formAction";


describe("formAction", ()=>{
    it("should return firstName action with type", ()=>{
        const action = firstNameAction("mockValue");
        expect(typeof action).toBe("object");
        expect(action).toEqual(expect.objectContaining({
            type: FIRST_NAME,
            payload: "mockValue"
        }));
    });

    it("should return lastName action with type", ()=>{
        const action = lastNameAction("mockValue");
        expect(typeof action).toBe("object");
        expect(action).toEqual(expect.objectContaining({
            type: LAST_NAME,
            payload: "mockValue"
        }));
    });

    it("should return emailId action with type", ()=>{
        const action = emailIdAction("mockValue");
        expect(typeof action).toBe("object");
        expect(action).toEqual(expect.objectContaining({
            type: EMAIL_ID,
            payload: "mockValue"
        }));
    });

    it("should return age action with type", ()=>{
        const action = ageAction("mockValue");
        expect(typeof action).toBe("object");
        expect(action).toEqual(expect.objectContaining({
            type: AGE,
            payload: "mockValue"
        }));
    });

    it("should return gender action with type", ()=>{
        const action = genderAction("mockValue");
        expect(typeof action).toBe("object");
        expect(action).toEqual(expect.objectContaining({
            type: GENDER,
            payload: "mockValue"
        }));
    });

    it("should return department action with type", ()=>{
        const action = departmentAction("mockValue");
        expect(typeof action).toBe("object");
        expect(action).toEqual(expect.objectContaining({
            type: DEPARTMENT,
            payload: "mockValue"
        }));
    });

    it("should return qualification action with type", ()=>{
        const action = qualificationAction("mockValue");
        expect(typeof action).toBe("object");
        expect(action).toEqual(expect.objectContaining({
            type: QUALIFICATION,
            payload: "mockValue"
        }));
    });

    it("should return on board action with type", ()=>{
        const action = agreeAction();
        expect(typeof action).toBe("object");
        expect(action).toEqual(expect.objectContaining({
            type: AGREE
        }));
    });

    it("should return address line1 action with type", ()=>{
        const action = addressLine1Action("mockValue");
        expect(typeof action).toBe("object");
        expect(action).toEqual(expect.objectContaining({
            type: ADDR_LINE_1,
            payload: "mockValue"
        }));
    });

    it("should return address line2 action with type", ()=>{
        const action = addressLine2Action("mockValue");
        expect(typeof action).toBe("object");
        expect(action).toEqual(expect.objectContaining({
            type: ADDR_LINE_2,
            payload: "mockValue"
        }));
    });

    it("should return apt suite action with type", ()=>{
        const action = aptSuiteAction("mockValue");
        expect(typeof action).toBe("object");
        expect(action).toEqual(expect.objectContaining({
            type: APT_SUITE,
            payload: "mockValue"
        }));
    });

    it("should return society action with type", ()=>{
        const action = societyAction("mockValue");
        expect(typeof action).toBe("object");
        expect(action).toEqual(expect.objectContaining({
            type: SOCIETY,
            payload: "mockValue"
        }));
    });

    it("should return city action with type", ()=>{
        const action = cityAction("mockValue");
        expect(typeof action).toBe("object");
        expect(action).toEqual(expect.objectContaining({
            type: CITY,
            payload: "mockValue"
        }));
    });

    it("should return state action with type", ()=>{
        const action = stateAction("mockValue");
        expect(typeof action).toBe("object");
        expect(action).toEqual(expect.objectContaining({
            type: STATE,
            payload: "mockValue"
        }));
    });

    it("should return country action with type", ()=>{
        const action = countryAction("mockValue");
        expect(typeof action).toBe("object");
        expect(action).toEqual(expect.objectContaining({
            type: COUNTRY,
            payload: "mockValue"
        }));
    });

    it("should return zipCode action with type", ()=>{
        const action = zipCodeAction("mockValue");
        expect(typeof action).toBe("object");
        expect(action).toEqual(expect.objectContaining({
            type: ZIP_CODE,
            payload: "mockValue"
        }));
    });

    it("should return all action with type", ()=>{
        const action = allAction("mockValue");
        expect(typeof action).toBe("object");
        expect(action).toEqual(expect.objectContaining({
            type: ALL,
            payload: "mockValue"
        }));
    });
})