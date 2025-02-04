import React from 'react'

export const UseFetch = () => {

    const getDataUsingFetch = () => {
        const api = 'https://fakestoreapi.com/products/1';
        fetch(api)
        .then(raw => raw.json())
        .then(result => {
            console.log(result);
        })
    }

    getDataUsingFetch();


  return (
    <div>UseFetch</div>
  )
}