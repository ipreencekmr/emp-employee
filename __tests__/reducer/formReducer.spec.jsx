import { formReducer } from "../../src/reducer/formReducer";
import { defaultValue } from "../../src/context/formContext";
import {
    addressLine1Action,
    addressLine2Action,
    ageAction, agreeAction, 
    allAction, aptSuiteAction, 
    cityAction, countryAction, 
    departmentAction, emailIdAction, 
    firstNameAction, genderAction, 
    lastNameAction, qualificationAction, 
    societyAction, stateAction, zipCodeAction 
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

    it("should work for address line 1 action", ()=>{
        const action = addressLine1Action("mockValue");
        const state = formReducer(defaultValue, action);
        expect(state.address.addressLine1).toEqual("mockValue");
    });

    it("should work for address line 2 action", ()=>{
        const action = addressLine2Action("mockValue");
        const state = formReducer(defaultValue, action);
        expect(state.address.addressLine2).toEqual("mockValue");
    });

    it("should work for apt suite action", ()=>{
        const action = aptSuiteAction("mockValue");
        const state = formReducer(defaultValue, action);
        expect(state.address.aptSuite).toEqual("mockValue");
    });

    it("should work for society action", ()=>{
        const action = societyAction("mockValue");
        const state = formReducer(defaultValue, action);
        expect(state.address.society).toEqual("mockValue");
    });

    it("should work for city action", ()=>{
        const action = cityAction("mockValue");
        const state = formReducer(defaultValue, action);
        expect(state.address.city).toEqual("mockValue");
    });

    it("should work for state action", ()=>{
        const action = stateAction("mockValue");
        const state = formReducer(defaultValue, action);
        expect(state.address.state).toEqual("mockValue");
    });

    it("should work for country action", ()=>{
        const action = countryAction("mockValue");
        const state = formReducer(defaultValue, action);
        expect(state.address.country).toEqual("mockValue");
    });

    it("should work for zipCode action", ()=>{
        const action = zipCodeAction("mockValue");
        const state = formReducer(defaultValue, action);
        expect(state.address.zipCode).toEqual("mockValue");
    });

    it("should work for all action", ()=>{
        const mockState = {
            "key": "mockKey",
            "value": "mockValue"
        };
        const action = allAction(mockState);
        const state = formReducer(defaultValue, action);
        expect(state).toEqual(expect.objectContaining({
            "key": "mockKey",
            "value": "mockValue"
        }));
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