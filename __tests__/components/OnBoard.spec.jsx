import React from "react";
import {
    fireEvent, render, screen 
} from "@testing-library/react";
import { OnBoard } from "../../src/components/OnBoard";

jest.mock("emp_employee/context", () => ({
    useFormContext: jest.fn().mockReturnValue({
        agree: false,
    }),
}), {
    virtual: true 
});

jest.mock("emp_employee/actions", () => ({
    agreeAction: jest.fn(),
}), {
    virtual: true 
});

describe("OnBoard", () => {
    it("should render as expected", () => {
        const formDispatch = jest.fn();
        render(<OnBoard formDispatch={ formDispatch }></OnBoard>);
    });

    it("should call dispatch on checkbox change", () => {
        const formDispatch = jest.fn();
        render(<OnBoard formDispatch={ formDispatch }></OnBoard>);
       
        expect(screen.getByRole("checkbox")).toBeInTheDocument();
        fireEvent.click(screen.getByRole("checkbox"));

        expect(formDispatch).toHaveBeenCalledTimes(1);
    });
});