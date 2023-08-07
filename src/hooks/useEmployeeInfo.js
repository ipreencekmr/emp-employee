import { useCallback, useState } from "react";

import { useAxios } from "./useAxios";

export const useEmployeeInfo = () => {

    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    const axios = useAxios();

    const fetchEmployeeInfo = useCallback((empId) => {
        if(!empId) return;

        setIsLoading(true);
        axios.get(`employees/${empId}`).then((response) => {
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
        fetchEmployeeInfo
    };
};