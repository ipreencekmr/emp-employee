import {
    AGE,
    AGREE,
    DEPARTMENT,
    EMAIL_ID,
    FIRST_NAME, 
    GENDER, 
    LAST_NAME, 
    QUALIFICATION, 
    ageAction, agreeAction, departmentAction, 
    emailIdAction, firstNameAction, genderAction, 
    lastNameAction, qualificationAction 
} from "../../src/actions/formAction";

describe("formAction", ()=>{
    it("should return firstName action with type", ()=>{
        const action = firstNameAction("mockValue");
        expect(typeof action).toBe("object");
        expect(action).toEqual(expect.objectContaining({
            type: FIRST_NAME,
            payload: "mockValue"
        }))
    });

    it("should return lastName action with type", ()=>{
        const action = lastNameAction("mockValue");
        expect(typeof action).toBe("object");
        expect(action).toEqual(expect.objectContaining({
            type: LAST_NAME,
            payload: "mockValue"
        }))
    });

    it("should return emailId action with type", ()=>{
        const action = emailIdAction("mockValue");
        expect(typeof action).toBe("object");
        expect(action).toEqual(expect.objectContaining({
            type: EMAIL_ID,
            payload: "mockValue"
        }))
    });

    it("should return age action with type", ()=>{
        const action = ageAction("mockValue");
        expect(typeof action).toBe("object");
        expect(action).toEqual(expect.objectContaining({
            type: AGE,
            payload: "mockValue"
        }))
    });

    it("should return gender action with type", ()=>{
        const action = genderAction("mockValue");
        expect(typeof action).toBe("object");
        expect(action).toEqual(expect.objectContaining({
            type: GENDER,
            payload: "mockValue"
        }))
    });

    it("should return department action with type", ()=>{
        const action = departmentAction("mockValue");
        expect(typeof action).toBe("object");
        expect(action).toEqual(expect.objectContaining({
            type: DEPARTMENT,
            payload: "mockValue"
        }))
    });

    it("should return qualification action with type", ()=>{
        const action = qualificationAction("mockValue");
        expect(typeof action).toBe("object");
        expect(action).toEqual(expect.objectContaining({
            type: QUALIFICATION,
            payload: "mockValue"
        }))
    });

    it("should return on board action with type", ()=>{
        const action = agreeAction();
        expect(typeof action).toBe("object");
        expect(action).toEqual(expect.objectContaining({
            type: AGREE
        }))
    });
})