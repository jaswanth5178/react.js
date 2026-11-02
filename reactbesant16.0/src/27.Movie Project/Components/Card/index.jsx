import React from 'react'
import './index.css'

export const MovieCard = ({children}) => {
  return (
    <div className='Movie'>{children}</div>
  )
}

export const MovieImage = ({ src, alt }) => {
  return <img className='m-img' src={src} alt={alt || "Movie poster"} />;
};


export const MovieTitle = ({title})=>{
    return <div className='m-title'>{title}</div>
}

export const MovieOverView = ({overview})=>{
    return <div className='m-overview'>{overview}</div>
}

export const MovieRating = ({rating})=>{
    return <div className='m-rating'>{rating}</div>
}