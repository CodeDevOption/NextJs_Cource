import Head from 'next/head'
import { useRouter } from 'next/router';
import React from 'react'
import styles from '../../styles/sass/style.module.scss'; 
import Layout from '../layout/layout';

const FirstPost = () => {
  const router = useRouter();
  return (
    <>
      <Head>
        <title>My First Post</title>
      </Head>

      <Layout>
        <h1 className='title'>FirstPost</h1>
        <button onClick={() => router.push('/posts/users') }>Got to Users</button>
        <style JSX>
          {
          `
            .title{
              color:red;
            }
          `
          }
        </style>  
      </Layout>
    </>
  )
}

export default FirstPost