import {useEffect, useState} from 'react';

function useCurrencyInfo(currency){
    const [currInfo, setCurrInfo] = useState({});
    useEffect(()=>{
        const fetchData = async () => {
            try {
                const response = await fetch(
                    `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`
                );
                const data = await response.json();
                setCurrInfo(data[currency]);
                console.log(data[currency]); // Ensure correct logging
            } catch (error) {
                console.error("Error fetching currency data:", error);
            }
        }
        fetchData();
    },[currency])
    return currInfo;
}
export default useCurrencyInfo;