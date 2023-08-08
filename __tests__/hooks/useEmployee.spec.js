import React from "react";
import { useEmployee } from "../../src/hooks/useEmployee";
import axios from "axios";

jest.mock("axios");

describe("useEmployee", () => {


    let useStateSpy;
    let useCallbackSpy;

    const setData = jest.fn();      
    const setError = jest.fn();
    const setIsLoading = jest.fn();

    beforeEach(()=>{
        useStateSpy = jest.spyOn(React, "useState");
        useCallbackSpy = jest.spyOn(React, "useCallback");

        useCallbackSpy.mockImplementationOnce(jest.fn((f) => {
            return (...args) => {
                f(...args);
            }
        }));
    });

    describe("update employee", () => {
        it("should return expected value on success status without empId", () => {

            useStateSpy.mockImplementationOnce(jest.fn(()=>[null, setData]));
            useStateSpy.mockImplementationOnce(jest.fn(()=>[null, setError]));
            useStateSpy.mockImplementationOnce(jest.fn(()=>[null, setIsLoading]));

            const { data, updateEmployee } = useEmployee();

            const body = {
                firstName: "mockFirstName",
                lastName: "mockLastName"
            }

            updateEmployee(true, null, body);
            expect(data).toEqual(null);
        });

        it("should return expected value on success status without body", () => {

            useStateSpy.mockImplementationOnce(jest.fn(()=>[null, setData]));
            useStateSpy.mockImplementationOnce(jest.fn(()=>[null, setError]));
            useStateSpy.mockImplementationOnce(jest.fn(()=>[null, setIsLoading]));

            const { data, updateEmployee } = useEmployee();

            const empId = 1;
            updateEmployee(true, empId);
            expect(data).toEqual(null);
        });

        it("should return expected value on success status with empId", () => {

            const mockEmpInfo = {
                firstName: "mockFirstName",
                lastName: "mockLastName",
                emailId: "mockEmailId"
            };

            useStateSpy.mockImplementationOnce(jest.fn(()=>[mockEmpInfo, setData]));
            useStateSpy.mockImplementationOnce(jest.fn(()=>[null, setError]));
            useStateSpy.mockImplementationOnce(jest.fn(()=>[null, setIsLoading]));

            axios.create = jest.fn(function () {
                return {
                    put: jest.fn(() => Promise.resolve({
                        status: 200,
                        data: mockEmpInfo
                    }))
                }
            });

            const { data, updateEmployee } = useEmployee();

            const empId = 1;
            const body =  {
                ...mockEmpInfo
            };
            updateEmployee(true, empId, body);
            expect(data).toEqual(expect.objectContaining(mockEmpInfo));
        });

        it("should return expected value on failure status", () => {

            useStateSpy.mockImplementationOnce(jest.fn(()=>[null, setData]));
            useStateSpy.mockImplementationOnce(jest.fn(()=>[new Error("Something went wrong!"), 
                setError]));
            useStateSpy.mockImplementationOnce(jest.fn(()=>[null, setIsLoading]));
        
            axios.create = jest.fn(function () {
                return {
                    put: jest.fn(() => Promise.resolve({
                        status: 404,
                        data: null
                    }))
                }
            });

            const { error, updateEmployee } = useEmployee();

            const empId = 1;
            const body =  {
                firstName: "mockFirstName",
                lastName: "mockLastName"
            };
            updateEmployee(true, empId, body);
            expect(error.message).toEqual("Something went wrong!");
        });

        it("should return expected value on call rejection", () => {

            useStateSpy.mockImplementationOnce(jest.fn(()=>[null, setData]));
            useStateSpy.mockImplementationOnce(jest.fn(()=>[new Error("Something went wrong!"), 
                setError]));
            useStateSpy.mockImplementationOnce(jest.fn(()=>[null, setIsLoading]));

            axios.create = jest.fn(function () {
                return {
                    put: jest.fn(() => Promise.reject({
                        error: new Error("Something went wrong"),
                    }))
                }
            });

            const { error, updateEmployee } = useEmployee();

            const empId = 1;
            const body =  {
                firstName: "mockFirstName",
                lastName: "mockLastName"
            };
            updateEmployee(true, empId, body);
            expect(error.message).toEqual("Something went wrong!");
        });
    });

    describe("create employee", () => {
        it("should return expected value on success status without empId", () => {

            useStateSpy.mockImplementationOnce(jest.fn(()=>[null, setData]));
            useStateSpy.mockImplementationOnce(jest.fn(()=>[null, setError]));
            useStateSpy.mockImplementationOnce(jest.fn(()=>[null, setIsLoading]));

            const { data, updateEmployee } = useEmployee();

            updateEmployee(false);
            expect(data).toEqual(null);
        });

        it("should return expected value on success status without body", () => {

            useStateSpy.mockImplementationOnce(jest.fn(()=>[null, setData]));
            useStateSpy.mockImplementationOnce(jest.fn(()=>[null, setError]));
            useStateSpy.mockImplementationOnce(jest.fn(()=>[null, setIsLoading]));

            const { data, updateEmployee } = useEmployee();

            const empId = 1;
            updateEmployee(false, empId);
            expect(data).toEqual(null);
        });

        it("should return expected value on success status without empId", () => {

            const mockEmpInfo = {
                firstName: "mockFirstName",
                lastName: "mockLastName",
                emailId: "mockEmailId"
            };

            useStateSpy.mockImplementationOnce(jest.fn(()=>[mockEmpInfo, setData]));
            useStateSpy.mockImplementationOnce(jest.fn(()=>[null, setError]));
            useStateSpy.mockImplementationOnce(jest.fn(()=>[null, setIsLoading]));

            axios.create = jest.fn(function () {
                return {
                    post: jest.fn(() => Promise.resolve({
                        status: 200,
                        data: mockEmpInfo
                    }))
                }
            });

            const { data, updateEmployee } = useEmployee();

            const empId = null;
            const body =  {
                ...mockEmpInfo
            };
            updateEmployee(false, empId, body);
            expect(data).toEqual(expect.objectContaining(mockEmpInfo));
        });

        it("should return expected value on success status with no data without empId", () => {

            const mockEmpInfo = {
                firstName: "mockFirstName",
                lastName: "mockLastName",
                emailId: "mockEmailId"
            };

            useStateSpy.mockImplementationOnce(jest.fn(()=>[mockEmpInfo, setData]));
            useStateSpy.mockImplementationOnce(jest.fn(()=>[null, setError]));
            useStateSpy.mockImplementationOnce(jest.fn(()=>[null, setIsLoading]));

            axios.create = jest.fn(function () {
                return {
                    post: jest.fn(() => Promise.resolve({
                        status: 200,
                        data: null
                    }))
                }
            });

            const { data, updateEmployee } = useEmployee();

            const empId = null;
            const body =  {
                ...mockEmpInfo
            };
            updateEmployee(false, empId, body);
            expect(data).toEqual(expect.objectContaining(mockEmpInfo));
        });


        it("should return expected value on failure status", () => {

            useStateSpy.mockImplementationOnce(jest.fn(()=>[null, setData]));
            useStateSpy.mockImplementationOnce(jest.fn(()=>[new Error("Something went wrong!"), 
                setError]));
            useStateSpy.mockImplementationOnce(jest.fn(()=>[null, setIsLoading]));
        
            axios.create = jest.fn(function () {
                return {
                    post: jest.fn(() => Promise.resolve({
                        status: 404,
                        data: null
                    }))
                }
            });

            const { error, updateEmployee } = useEmployee();

            const empId = null;
            const body =  {
                firstName: "mockFirstName",
                lastName: "mockLastName"
            };
            updateEmployee(false, empId, body);
            expect(error.message).toEqual("Something went wrong!");
        });

        it("should return expected value on call rejection", () => {

            useStateSpy.mockImplementationOnce(jest.fn(()=>[null, setData]));
            useStateSpy.mockImplementationOnce(jest.fn(()=>[new Error("Something went wrong!"), 
                setError]));
            useStateSpy.mockImplementationOnce(jest.fn(()=>[null, setIsLoading]));

            axios.create = jest.fn(function () {
                return {
                    post: jest.fn(() => Promise.reject({
                        error: new Error("Something went wrong"),
                    }))
                }
            });

            const { error, updateEmployee } = useEmployee();

            const empId = null;
            const body =  {
                firstName: "mockFirstName",
                lastName: "mockLastName"
            };
            updateEmployee(false, empId, body);
            expect(error.message).toEqual("Something went wrong!");
        });
    });
});