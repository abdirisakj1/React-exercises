import React from 'react'
import { useRouteError } from 'react-router'

export const NotFound = () => {
  const error = useRouteError();
  console.log(error);
  return (
    <div> 
      <h2>Error</h2>
      <p>{error.statusText}</p>
      <p>{error.status}</p>
    </div>
  )
}
