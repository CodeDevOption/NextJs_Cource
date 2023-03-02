import React from 'react'

const  Users = ({users}) => {
  return (
    <div> 
        {
            users.map((u)=>(
                <div key={u.id}>
                    <h1>{u.name}</h1>
                </div>
            ))
        }
    </div>
  )
}

export const getStaticProps = async () =>{
    const req = await fetch('http://localhost:3000/api/users');
    const users = await req.json();

    return{
        props:{
            users
        }
    }
}

export default  Users