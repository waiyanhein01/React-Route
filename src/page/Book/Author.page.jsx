import React from 'react'
import { useParams } from 'react-router-dom'

const AuthorPage = () => {
    const data = useParams()
  return (
    <div>
      AuthorPage id is {data.id}
    </div>
  )
}

export default AuthorPage
