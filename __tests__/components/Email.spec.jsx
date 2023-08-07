import React from "react";
import {
    fireEvent, render, screen 
} from "@testing-library/react";
import { Email } from "../../src/components/Email";

jest.mock("emp_employee/context", () => ({
    useFormContext: jest.fn().mockReturnValue({
        emailId: "mockEmailAddress",
    }),
}), {
    virtual: true 
});

jest.mock("emp_employee/actions", () => ({
    emailIdAction: jest.fn(),
}), {
    virtual: true 
});

describe("Email", () => {
    it("should render as expected", () => {
        const formDispatch = jest.fn();
        render(<Email formDispatch={ formDispatch }></Email>);
    });

    it("should call dispatch on text change", () => {
        const formDispatch = jest.fn();
        render(<Email formDispatch={ formDispatch }></Email>);

        fireEvent.change(screen.getByRole("textbox"), {
            target: {
                value: "mockValue"
            }
        });

        expect(formDispatch).toHaveBeenCalled();
    });
});