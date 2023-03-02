import React, { useEffect, useState } from 'react'
import Layout from '../layout/layout';

const delay = (ms)=>{
    return new Promise((resolve) => setTimeout(resolve,ms));
}

const ClientSideFetching = () => {
    const [posts, setPosts] = useState('');
    const [isLoading,setIsLoading] = useState(false);
    useEffect(()=>{
        setIsLoading(true);
        delay(1000).then(()=>{
            setPosts({name:'Lahiru Sadaruwan',description:'This is the New Post'});
            setIsLoading(false);
        });
    },[]);

    if(isLoading) return <h1>Loading....</h1>

    if(!posts) return <h1>No Data Found</h1>

    return (
    <Layout>
        <h1>Client Side Fetching</h1>
        <h3>{posts.name}</h3>
        <p>{posts.description}</p>
    </Layout>
  )
}

export default ClientSideFetching