import React from "react";
import { render } from "@testing-library/react";
import { FormContextProvider, useFormContext } from "../../src/context/formContext";

jest.mock("react", ()=> ({
    ...jest.requireActual("react"),
    useContext: jest.fn(()=>({
        firstName: "mockValue"
    }))
}));

describe("useFormContext", () => {
    it("should export default value object", ()=>{
        const { defaultValue } = require("../../src/context/formContext");
        expect(defaultValue).toEqual(expect.objectContaining({
            firstName: "",
            lastName: "",
            emailId: "",
            age: "",
            gender: "MALE",
            department: {
                id: "",
                value: ""
            },
            qualification: {
                id: "",
                value: ""
            },
            address: {
                addressLine1: "",
                addressLine2: "",
                aptSuite: "",
                society: "",
                city: "",
                state: "",
                country: "",
                zipCode: "",
            },
            agree: false
        }));
    });

    it("should return respective value from useFormContext", () =>{
        const { firstName } = useFormContext();
        expect(firstName).toBe("mockValue");
    });

    it("should wrap component with form context provider", () =>{
        render(<FormContextProvider>
            <div data-testid="sampleComponent"
            ></div>
        </FormContextProvider>);
        const { firstName } = useFormContext();
        expect(firstName).toBe("mockValue");
    });
});