// /pages/users.js

import React from 'react'

const Users = ({ users }) => {
  return (
    <div>
      <h1>All Users</h1>
      {users.map(user => (
        <div key={user.id}>
          <span>
            <h3>{user.name}</h3>
          </span>
        </div>
      ))}
    </div>
  )
}

export default Users

export const getStaticProps = async () => {
  try {
    const res = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await res.json()

    return {
      props: { users: data }
    }
  } catch (error) {
    console.error('Error fetching data:', error)
    return {
      props: { users: [] }
    }
  }
}
