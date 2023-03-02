import React from 'react'
import { fetchData } from '../lib/helper';

const Post = ({posts}) => {
  return (
    <>
        {posts.map((post)=>(
            <div key={post.id}>
                <h1>ID: {post.id}</h1>
                <h1>Name: {post.name}</h1>
                <h1>Description: {post.description}</h1>
            </div>
            ))
        }
    </>
  )
}

export const getStaticProps = async ({params})=>{
    const {id} = params;
    const posts = fetchData(id);

    return{
        props:{
            posts
        }
    }
}

export const getStaticPaths = async() =>{
    const posts = fetchData();
    const paths = posts.map(post => ({
        params:{id:post.id.toString()}
    }));

    return {
       paths,
       fallback:false
    }
}

export default Post