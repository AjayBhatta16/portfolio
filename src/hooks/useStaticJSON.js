import { useEffect, useState } from "react";

export function useStaticJSON(path, onError = () => {}) {
    var [data, setData] = useState([]);

    useEffect(() => {
        fetch(path)
            .then((response) => response.json())
            .then((jsonData) => setData(jsonData))
            .catch((error) => onError(error));
    }, []);
        
    return data;
}