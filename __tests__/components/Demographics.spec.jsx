import React from "react";
import {
    fireEvent, render, screen 
} from "@testing-library/react";
import { Demographics } from "../../src/components/Demographics";

jest.mock("emp_employee/context", () => ({
    useFormContext: jest.fn().mockReturnValue({
        age: "mockAge", 
        department: {
            id: 1,
            value: "mockDepartment"
        }, 
        qualification: {
            id: 1,
            value: "mockQualification"
        }
    }),
}), {
    virtual: true 
});

jest.mock("emp_employee/actions", () => ({
    ageAction: jest.fn(), 
    departmentAction: jest.fn(),
    genderAction: jest.fn(),
    qualificationAction: jest.fn()
}), {
    virtual: true 
});

jest.mock("../../src/hooks/useQualifications", () => ({
    ...jest.requireActual("../../src/hooks/useQualifications"),
    useQualifications: jest.fn().mockReturnValue({
        data: [
            {
                id: 1,
                value: "mock qualification 1"
            },
            {
                id: 2,
                value: "mock qualification 2"
            }
        ]
    })
}));

jest.mock("../../src/hooks/useDepartments", () => ({
    ...jest.requireActual("../../src/hooks/useDepartments"),
    useDepartments: jest.fn().mockReturnValue({
        data: [
            {
                id: 1,
                value: "mock department 1"
            },
            {
                id: 2,
                value: "mock department 2"
            }
        ]
    })
}));

describe("Demographics", () => {
    it("should render as expected", async () => {
        const formDispatch = jest.fn();
        render(<Demographics formDispatch={ formDispatch }></Demographics>);
    });

    it("should call dispatch on age input change", async () => {

        const formDispatch = jest.fn();
        render(<Demographics formDispatch={ formDispatch }></Demographics>);

        fireEvent.change(screen.getByTestId("ageId"), {
            target: {
                value: "mockAge"
            }
        });

        expect(formDispatch).toHaveBeenCalled();
    });

    it("should call dispatch on select input change", async () => {

        const formDispatch = jest.fn();
        render(<Demographics formDispatch={ formDispatch }></Demographics>);

        screen.getAllByTestId("selectId").forEach(element => {
            fireEvent.change(element, {
                target: {
                    value: "1"
                }
            });
        });

        expect(formDispatch).toHaveBeenCalledTimes(3);
    });
});

