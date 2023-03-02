import React from 'react'
import Layout from '../layout/layout';

const Home = ({posts}) => {
  return (
    <Layout>
        Home
        Name: {posts.name} &nbsp;
        Description: {posts.description}
    </Layout>
  )
}

export const getStaticProps = async ()=>{
    const posts = {name:'CodeDevOption',description:"this is the My description"};
    return {
        props:{
            posts
        }
    }
}

export default Home