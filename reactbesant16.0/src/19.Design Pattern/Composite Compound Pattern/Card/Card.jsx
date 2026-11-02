import React from 'react'
import './Card.css'

export const Card = ({children}) => {
  return (
    <div className='Card'>{children}</div>
  )
}
export const CardImage = ({src})=>{
    return(
        <img src={src}/>
    )
}
export const CardTitle = ({title})=>{
    return(
        <div className='title'>{title}</div>
    )
}

export const CardPrice = ({price})=>{
    return(
        <div className='price'>{price}</div>
    )
}
export const CardDescription = ({description})=>{
    return(
        <div className='description'>{description}</div>
    )
}

export const CardRating = ({rating})=>{
    return(
        <div className='rating'>{rating}</div>
    )
}

