import React from "react";
import { useEmployeeInfo } from "../../src/hooks/useEmployeeInfo";
import axios from "axios";

jest.mock("axios");

describe("useEmployeeInfo", () => {

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

    it("should return expected value on success status without empId", () => {

        useStateSpy.mockImplementationOnce(jest.fn(()=>[null, setData]));
        useStateSpy.mockImplementationOnce(jest.fn(()=>[null, setError]));
        useStateSpy.mockImplementationOnce(jest.fn(()=>[null, setIsLoading]));

        const { data, fetchEmployeeInfo } = useEmployeeInfo();

        fetchEmployeeInfo();
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
                get: jest.fn(() => Promise.resolve({
                    status: 200,
                    data: mockEmpInfo
                }))
            }
        });

        const { data, fetchEmployeeInfo } = useEmployeeInfo();

        const empId = 1;
        fetchEmployeeInfo(empId);
        expect(data).toEqual(expect.objectContaining(mockEmpInfo));
    });

    it("should return expected value on failure status", () => {

        useStateSpy.mockImplementationOnce(jest.fn(()=>[null, setData]));
        useStateSpy.mockImplementationOnce(jest.fn(()=>[new Error("Something went wrong!"), 
            setError]));
        useStateSpy.mockImplementationOnce(jest.fn(()=>[null, setIsLoading]));
        
        axios.create = jest.fn(function () {
            return {
                get: jest.fn(() => Promise.resolve({
                    status: 404,
                    data: null
                }))
            }
        });

        const { error, fetchEmployeeInfo } = useEmployeeInfo();
        const empId = 1;
        fetchEmployeeInfo(empId);
        expect(error.message).toEqual("Something went wrong!");
    });

    it("should return expected value on call rejection", () => {

        useStateSpy.mockImplementationOnce(jest.fn(()=>[null, setData]));
        useStateSpy.mockImplementationOnce(jest.fn(()=>[new Error("Something went wrong!"), 
            setError]));
        useStateSpy.mockImplementationOnce(jest.fn(()=>[null, setIsLoading]));

        axios.create = jest.fn(function () {
            return {
                get: jest.fn(() => Promise.reject({
                    error: new Error("Something went wrong"),
                }))
            }
        });

        const { error, fetchEmployeeInfo } = useEmployeeInfo();
        const empId = 1;
        fetchEmployeeInfo(empId);
        expect(error.message).toEqual("Something went wrong!");
    });
});