import { useEffect, useState } from "react"
const useFetch = (url) => {
    const [data,setData] = useState(null) 
    const [isPending,setIsPending] = useState(true) 
    const [error,setError] = useState(null) 
    
    useEffect(() => {
        const abortCont = new AbortController();

        setTimeout(() => {
            {
                fetch(url, {signal: abortCont.signal})
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
                    console.log(err.message, err.name);
                    if(err.name === 'AbortError'){
                        console.log('fetch aborted');
                    }
                    else{
                        setError(err.message)
                        setIsPending(false)
                    }
                    
                })
            }
        }, 1000);

        return () => abortCont.abort();
    }, [url])  //url needs to be in the dependency array
    //fetch returns a promise. After promise is resolved, it fires the first then.
    //res.json() also causes to return a promise. That's why the second then. 


    return {data, isPending, error}
}

export default useFetch;