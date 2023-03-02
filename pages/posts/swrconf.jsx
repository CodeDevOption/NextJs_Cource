import React from 'react'
import { SWRConfig } from 'swr';
import useSWR from 'swr';

 const fetcher = (...arg) => fetch(...arg).then((res) => res.json()); 

// const fetcher = async(url) => {
//     const res = await fetch(url);
//     if(!res.ok){
//       const error = new Error("An error occurred while fetching data ");
//       error.info = await res.json();
//       error.status = res.status;
//       throw error
//     }

//     return res.json();
// }

const SwrConf = ({fallback}) => {

  return (
    <SWRConfig value={{fallback}}>
        {getData()}
    </SWRConfig>
  )
}

export const getStaticProps = async () =>{
    const req = await fetch('http://localhost:3000/api/users');
    const {data:users} = await req.json();

    return{
        props:{
            fallback:{
                '/api/users':users
            }
        }
    }
}

const getData = ()=>{
  const {data:user, error} = useSWR('http://localhost:3000/api/users',fetcher);
    if(error) return <div>Error fetching data</div>       
    if(!user) return <div>Loading...</div>    
    {console.log(user)}   
    return (
        <>
        {
            user?.data?.map((u)=>(
                      <div key={u._id}>
                          <h1>{u.name}</h1>
                      </div>
                  ))

        }
        </>
    )
}



export default SwrConf