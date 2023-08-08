import React from "react";
import * as Router from "react-router-dom";
import {
    fireEvent, render, screen 
} from "@testing-library/react";
import "@testing-library/jest-dom"
import { Home } from "../../src/components/Home";
import { useEmployeeInfo } from "../../src/hooks/useEmployeeInfo";
import { useEmployee } from "../../src/hooks/useEmployee";

jest.mock("emp_employee/context", () => ({
    ...jest.requireActual("../../src/context/formContext"),
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

jest.mock("emp_address/Address", () => {
    return {
        __esModule: true,
        default: jest.fn(() => <div data-testid="addressFormId"></div>),
    }
}, {
    virtual: true
});

jest.mock("react-router-dom", () => ({
    ...jest.requireActual("react-router-dom"),
    useParams: jest.fn(),
}));

jest.mock("../../src/hooks/useEmployeeInfo", () => ({
    ...jest.requireActual("../../src/hooks/useEmployeeInfo"),
    useEmployeeInfo: jest.fn(()=>({
        isLoading: false, 
        data: null, 
        error: null,
        fetchEmployeeInfo: jest.fn()
    })),
}));

jest.mock("../../src/hooks/useEmployee", () => ({
    ...jest.requireActual("../../src/hooks/useEmployee"),
    useEmployee: jest.fn(()=>({
        isLoading: false, 
        data: null, 
        error: null,
        updateEmployee: jest.fn()
    })),
}));

describe("Employee App", () => {

    let useEffectSpy;
    let routerSpy;

    beforeEach(() => {
        useEffectSpy = jest.spyOn(React, "useEffect");
        routerSpy = jest.spyOn(Router, "useParams");

        useEffectSpy.mockImplementationOnce((f)=>f());
        useEffectSpy.mockImplementationOnce((f)=>f());
    });

    it("renders App component for update with employee Info", () => {
        routerSpy.mockReturnValue({
            id: "1234" 
        });

        const fetchEmployeeInfo = jest.fn();
        const empData = {
            firstName: "mockFirstName",
            lastName: "mockLastName"
        };

        useEmployeeInfo.mockReturnValue({
            isLoading: false, 
            data: empData, 
            error: null,
            fetchEmployeeInfo
        });

        render(<Home />);
        expect(fetchEmployeeInfo).toHaveBeenCalled();
    });
    
    it("renders App component for update without employee Info", () => {
        routerSpy.mockReturnValue({
            id: "1234" 
        });

        const fetchEmployeeInfo = jest.fn();
        useEmployeeInfo.mockReturnValue({
            isLoading: false, 
            data: null, 
            error: new Error("Something went wrong!"),
            fetchEmployeeInfo
        });

        render(<Home />);
        expect(fetchEmployeeInfo).toHaveBeenCalled();
    });
    
    it("renders App component for create", () => {
        routerSpy.mockReturnValue({
            id: null
        });

        const fetchEmployeeInfo = jest.fn();
        const empData = {
            firstName: "mockFirstName",
            lastName: "mockLastName"
        };
        useEmployeeInfo.mockReturnValue({
            isLoading: false, 
            data: empData, 
            error: null,
            fetchEmployeeInfo
        });

        render(<Home />);
        expect(screen.getByTestId("formId")).toBeInTheDocument();
        expect(fetchEmployeeInfo).not.toHaveBeenCalled();
    });

    it("should not call updateEmployee on submit if form not validated", () => {
        routerSpy.mockReturnValue({
            id: "1234" 
        });

        const fetchEmployeeInfo = jest.fn();
        const updateEmployee = jest.fn();
        const empData = {
            firstName: "mockFirstName",
            lastName: "mockLastName"
        };

        useEmployeeInfo.mockReturnValue({
            isLoading: false, 
            data: empData, 
            error: null,
            fetchEmployeeInfo
        });

        useEmployee.mockReturnValue({
            isLoading: false, 
            data: empData, 
            error: null,
            updateEmployee
        });

        render(<Home />);
        const form = screen.getByTestId("formId");
        fireEvent.click(screen.getByRole("button", {
            name: /update/i
        }));
        expect(form.checkValidity()).toEqual(false);
        expect(updateEmployee).not.toHaveBeenCalled();
    });

    it("should call updateEmployee for Update on submit if form validated", () => {
        routerSpy.mockReturnValue({
            id: "1234" 
        });

        const fetchEmployeeInfo = jest.fn();
        const updateEmployee = jest.fn();
        const empData = {
            firstName: "mockFirstName",
            lastName: "mockLastName"
        };

        useEmployeeInfo.mockReturnValue({
            isLoading: false, 
            data: empData, 
            error: null,
            fetchEmployeeInfo
        });

        useEmployee.mockReturnValue({
            isLoading: false, 
            data: empData, 
            error: null,
            updateEmployee
        });

        render(<Home />);
        const form = screen.getByTestId("formId");
        form.checkValidity = jest.fn().mockReturnValue(true);

        fireEvent.click(screen.getByRole("button", {
            name: /update/i
        }));

        expect(form.checkValidity()).toEqual(true);
        expect(updateEmployee).toHaveBeenCalled();
    });

    it("should call updateEmployee for Add Employee on submit if form validated ", () => {
        routerSpy.mockReturnValue({
            id: null
        });

        const fetchEmployeeInfo = jest.fn();
        const updateEmployee = jest.fn();
        const empData = {
            firstName: "mockFirstName",
            lastName: "mockLastName"
        };

        useEmployeeInfo.mockReturnValue({
            isLoading: false, 
            data: empData, 
            error: null,
            fetchEmployeeInfo
        });

        useEmployee.mockReturnValue({
            isLoading: false, 
            data: empData, 
            error: null,
            updateEmployee
        });

        render(<Home />);
        const form = screen.getByTestId("formId");
        form.checkValidity = jest.fn().mockReturnValue(true);

        fireEvent.click(screen.getByRole("button", {
            name: /add/i
        }));

        expect(form.checkValidity()).toEqual(true);
        expect(updateEmployee).toHaveBeenCalled();
    });

    it("should display spinner on submit button if api loading and form validated ", () => {
        routerSpy.mockReturnValue({
            id: null
        });

        const fetchEmployeeInfo = jest.fn();
        const updateEmployee = jest.fn();
     
        useEmployeeInfo.mockReturnValue({
            isLoading: false, 
            data: null, 
            error: null,
            fetchEmployeeInfo
        });

        useEmployee.mockReturnValue({
            isLoading: true, 
            data: null, 
            error: null,
            updateEmployee
        });

        render(<Home />);
        const form = screen.getByTestId("formId");
        form.checkValidity = jest.fn().mockReturnValue(true);

        fireEvent.click(screen.getByRole("button", {
            name: /add/i
        }));

        expect(form.checkValidity()).toEqual(true);
        expect(screen.getByRole("button", {
            name: /add/i
        })).toHaveAttribute("disabled", "");
    });

    it("should display error banner on submit error for validated form ", () => {
        routerSpy.mockReturnValue({
            id: null
        });

        const fetchEmployeeInfo = jest.fn();
        const updateEmployee = jest.fn();
        const empData = {
            firstName: "mockFirstName",
            lastName: "mockLastName"
        };

        useEmployeeInfo.mockReturnValue({
            isLoading: false, 
            data: empData, 
            error: null,
            fetchEmployeeInfo
        });

        useEmployee.mockReturnValue({
            isLoading: false, 
            data: null, 
            error: new Error("Something went wrong!"),
            updateEmployee
        });

        render(<Home />);
        const form = screen.getByTestId("formId");
        form.checkValidity = jest.fn().mockReturnValue(true);

        fireEvent.click(screen.getByRole("button", {
            name: /add/i
        }));

        expect(form.checkValidity()).toEqual(true);
        expect(updateEmployee).toHaveBeenCalled();
        expect(screen.getByRole("alert").getAttribute("class")).toContain("alert");
    });
});