import { useEffect, useState } from "react"
const useFetch = (url) => {
    const [data,setData] = useState(null) 
    const [isPending,setIsPending] = useState(true) 
    const [error,setError] = useState(null) 
    
    useEffect(() => {
        fetch(url)
        .then(res => {
            if(!res.ok){
                throw Error("response not OK.");
            }
            return res.json()
        })
        .then(data => {
            console.log(data);
            setData(data)
            setIsPending(false)
            setError(null)
        })
        .catch(err => {
            console.log(err.message);
            setError(err.message)
            setIsPending(false)
        })
    }, [url])  //url needs to be in the dependency array
    //fetch returns a promise. After promise is resolved, it fires the first then.
    //res.json() also causes to return a promise. That's why the second then. 


    return {data, isPending, error}
}

export default useFetch;