import { useEffect, useState } from 'react';

const useFetch = (url) => {

    const [newData, setData]=useState(null);
    const [loading, setLoading]=useState(true);

    useEffect(()=>{
        (async ()=>{
            try {
                const resp=await fetch(url);
                const res=await resp.json();
                setData(res);
                setLoading(false);
                
            } catch (error) {
                console.log(error);
            }
        })();
    }, [url]);

  return {newData, loading};
};

export default useFetch;