import { formReducer } from "../../src/reducer/formReducer";
import { defaultValue } from "../../src/context/formContext";
import {
    ageAction, agreeAction, departmentAction, emailIdAction, 
    firstNameAction, genderAction, lastNameAction, qualificationAction 
} from "../../src/actions/formAction";

describe("formReducer", () => {
    it("should work for firstName action", ()=>{
        const action = firstNameAction("mockValue");
        const state = formReducer(defaultValue, action);
        expect(state.firstName).toEqual("mockValue");
    });

    it("should work for lastName action", ()=>{
        const action = lastNameAction("mockValue");
        const state = formReducer(defaultValue, action);
        expect(state.lastName).toEqual("mockValue");
    });

    it("should work for email action", ()=>{
        const action = emailIdAction("mockValue");
        const state = formReducer(defaultValue, action);
        expect(state.emailId).toEqual("mockValue");
    });

    it("should work for age action", ()=>{
        const action = ageAction("mockValue");
        const state = formReducer(defaultValue, action);
        expect(state.age).toEqual("mockValue");
    });

    it("should work for gender action", ()=>{
        const action = genderAction("mockValue");
        const state = formReducer(defaultValue, action);
        expect(state.gender).toEqual("mockValue");
    });

    it("should work for department action", ()=>{
        const action = departmentAction("mockValue");
        const state = formReducer(defaultValue, action);
        expect(state.department).toEqual("mockValue");
    });

    it("should work for qualification action", ()=>{
        const action = qualificationAction("mockValue");
        const state = formReducer(defaultValue, action);
        expect(state.qualification).toEqual("mockValue");
    });

    it("should work for on board action", ()=>{
        const action = agreeAction();
        const state = formReducer(defaultValue, action);
        expect(state.agree).toEqual(true);
    });

    it("should throw an error for invalid action", ()=>{
        const action = {
            type: "INVALID_ACTION"
        };
        try {
            formReducer(defaultValue, action);
        } catch (error) {
            expect(error.name).toEqual("Error");
        }
    });
    
});