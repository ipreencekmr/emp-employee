import { useCallback, useState } from "react";
import { useAxios } from "./useAxios";

export const useEmployee = () => {

    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    const axios = useAxios();

    const updateEmployee = useCallback((isUpdate, empId, body) => {

        if(!body || Object.keys(body).length === 0) return;

        if(isUpdate && !empId) return;

        const apiUrl = isUpdate ? `employees/${empId}` : "employees";

        setIsLoading(true);

        let axiosInstance;

        if(isUpdate) {
            axiosInstance = axios.put(apiUrl, body);
        }else {
            axiosInstance = axios.post(apiUrl, body);
        }

        axiosInstance.then((response) => {
            if(response.status === 200) {
                setError(null);
                setData(response.data);
            }else {
                setError(new Error("Something went wrong!"));
                setData(null);
            }
        }).catch(err => {
            setData(null);
            setError(err);
        }).finally(()=>{
            setIsLoading(false);
        });
    }, []);

    return {
        isLoading, 
        data, 
        error,
        updateEmployee,
    };
};