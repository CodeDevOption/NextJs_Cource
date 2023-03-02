import React from 'react'
import { SWRConfig } from 'swr';
import useSWR from 'swr';

// const fetcher = (...arg) => fetch(...arg).then((res) => res.json()); 

const fetcher = async(url) => {
    const res = await fetch(url);
    if(!res.ok){
      const error = new Error("An error occurred while fetching data ");
      error.info = await res.json();
      error.status = res.status;
      throw error
    }

    return res.json();
}

const Swr = () => {
  const {user,isLoading} = getData();
    if(isLoading) return <div>Loading...</div>
  return (
    <div>
         {
            user?.data?.map((u)=>(
                <div key={u._id}>
                    <h1>{u.name}</h1>
                </div>
            ))
        }
    </div>
  )
}

const getData = ()=>{
  const {data, error} = useSWR('http://localhost:3000/api/users',fetcher,{
    onErrorRetry:(error,key,config,revalidate,{retryCount})=>{
      if(error.status === 404) return
      if(key === '/api/users') return
      if(retryCount >= 10 ) return
      
      setTimeout(()=>revalidate(),5000);
    }
  });

  return{
    user:data,
    isLoading:!error && !data,
  }
}

<SWRConfig value={{
  refreshInterval:3000,
  fetcher:(resource,init)=> fetch(resource,init).then((res)=> res.json())
  }}>

</SWRConfig>

export default Swr