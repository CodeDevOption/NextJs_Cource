import React from 'react'

const page = ({posts}) => {
  return (
    <div>
        <h1>{posts?.name}</h1>
        <h1>{posts?.email}</h1>
    </div>
  )
}

export const getServerSideProps = async ()=> {
    const data = {name:"lahiru",email:"hlsadaruwan@gmail.com"};

    return{
        props:{
            posts:data,
        }
    }
}

export default page