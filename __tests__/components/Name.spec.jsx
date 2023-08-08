import React from "react";
import {
    fireEvent, render, screen 
} from "@testing-library/react";
import { Name } from "../../src/components/Name";

jest.mock("emp_employee/context", () => ({
    useFormContext: jest.fn().mockReturnValue({
        firstName: "mockFirstName",
        lastName: "mockLastName"
    }),
}), {
    virtual: true 
});

jest.mock("emp_employee/actions", () => ({
    firstNameAction: jest.fn(),
    lastNameAction: jest.fn(),
}), {
    virtual: true 
});

describe("Name", () => {
    it("should render as expected", () => {
        const formDispatch = jest.fn();
        render(<Name formDispatch={ formDispatch }></Name>);
    });

    it("should call dispatch on text change", () => {
        const formDispatch = jest.fn();
        render(<Name formDispatch={ formDispatch }></Name>);

        expect(screen.getAllByRole("textbox")).toHaveLength(2);

        screen.getAllByRole("textbox").forEach(element => {
            fireEvent.change(element, {
                target: {
                    value: "mockValue"
                }
            });
        });
       
        expect(formDispatch).toHaveBeenCalledTimes(2);
    });
});