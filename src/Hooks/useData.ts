import { useEffect, useState } from "react";
import apiClient from "../service/api-client";
import { CanceledError } from "axios";



interface Props<T>{
    count: number;
    results: T[]
}
const useData = <T>(endpoint: string) => {
    const [data, setData] = useState<T[]>([]);
    const [error, setError] = useState("");
    const [isLoading, setLoading] = useState(false);
  
    useEffect(() => {
        const controller = new AbortController();
        setLoading(true);
      apiClient
        .get<Props<T>>(endpoint, {signal: controller.signal})
        .then((res) => {
            setData(res.data.results)
            setLoading(false)})
        .catch((err) => {
            if(err instanceof CanceledError)
            setError(err.message)
            setLoading(false)});



        return () => controller.abort();
    },[]);

    return {data, error, isLoading}

};
export default useData;