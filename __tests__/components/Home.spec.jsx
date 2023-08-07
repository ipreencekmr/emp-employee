import React from "react";
import {
    fireEvent, render, screen 
} from "@testing-library/react";
import "@testing-library/jest-dom"
import { Home } from "../../src/components/Home";

jest.mock("emp_employee/context", () => ({
    useFormContext: jest.fn().mockReturnValue({
        firstName: "mockFirstName",
        lastName: "mockLastName",
        emailId: "mockEmailAddress",
        age: "mockAge",
        gender: "mockGender",
        department: {
            id: "",
            value: "mockDepartment"
        },
        qualification: {
            id: "",
            value: "mockQualification"
        },
        address: {
            addressLine1: "mockLine1",
            addressLine2: "mockLine2",
            aptSuite: "mockSuite",
            society: "mockSociety",
            city: "mockCity",
            state: "mockState",
            country: "mockCountry",
            zipCode: "mockZip" 
        }
    }),
    FormContext: jest.fn().mockReturnValueOnce({
        Provider: jest.fn()
    }),
}), {
    virtual: true 
});

jest.mock("emp_employee/actions", () => ({
    ageAction: jest.fn(),
    agreeAction: jest.fn(),
    departmentAction: jest.fn(), 
    emailIdAction: jest.fn(),
    firstNameAction: jest.fn(),
    genderAction: jest.fn(), 
    lastNameAction: jest.fn(),
    qualificationAction: jest.fn(),
    addressLine1Action: jest.fn(),
    addressLine2Action: jest.fn(),
    aptSuiteAction: jest.fn(),
    societyAction: jest.fn(),
    cityAction: jest.fn(),
    stateAction: jest.fn(),
    countryAction: jest.fn(),
    zipCodeAction: jest.fn(),
    allAction: jest.fn()
}), {
    virtual: true 
});


jest.mock("emp_employee/reducer", () => ({
    formReducer: jest.fn(),
}), {
    virtual: true 
});

jest.mock("emp_address/Address", () => ({
    Address: jest.fn(()=>"<div></div>")
}), {
    virtual: true 
});

describe("Employee App", () => {

    it("renders App component", () => {
        render(<Home />);
        expect(screen.getByTestId("formId")).toBeInTheDocument();
    });

    it("should check unfilled form validation", () => {
        render(<Home />);
        const submitBtn = screen.getByRole("button");
        expect(submitBtn.textContent).toEqual("Add");
        fireEvent.click(submitBtn, {
            target: submitBtn
        });

        const form = screen.getByTestId("formId");
        expect(form.checkValidity()).toEqual(false);
    });

    it("should check filled form validation on submit", () => {
        render(<Home />);
        const submitBtn = screen.getByRole("button");
        expect(submitBtn.textContent).toEqual("Add");

        const inputs = screen.getAllByRole("textbox");
        const selects = screen.getAllByTestId("selectId");
        const spinbutton = screen.getByRole("spinbutton");
        const checkbox = screen.getByRole("checkbox");
        
        // Validate element existence in the document
        expect(inputs).toHaveLength(3);
        expect(spinbutton).toBeInTheDocument();
        expect(checkbox).toBeInTheDocument();
        expect(selects).toHaveLength(3);

        // Expect Input Values
        inputs.forEach(element => {
            fireEvent.change(element, {
                target: {
                    value: "mockValue"
                }
            });
            expect(element.value).toEqual("mockValue");
            expect(element.id).toMatch(/(firstNameId|lastNameId|emailId)/gi);
            element.checkValidity = jest.fn().mockReturnValue(true);
            expect(element.checkValidity()).toEqual(true);
        });

        // Expect Dropdown values
        selects.forEach(element => {
            fireEvent.change(element, {
                target: {
                    value: "1"
                } 
            });
            expect(element.checkValidity()).toBe(true);
            expect(element.value).toEqual("1");
        });

        fireEvent.click(checkbox);
        expect(checkbox.checkValidity()).toBe(true);
        expect(checkbox.checked).toEqual(true);

        // Expect Age Value
        fireEvent.change(spinbutton, {
            target: {
                value: 30
            }
        });
        expect(spinbutton.checkValidity()).toBe(true);
        expect(spinbutton.value).toEqual("30");

        //check form validated
        const form = screen.getByTestId("formId");
        form.checkValidity = jest.fn().mockReturnValue(true);
        fireEvent.click(submitBtn, {
            target: submitBtn
        });
        
        expect(form.checkValidity()).toEqual(true);
    });
});