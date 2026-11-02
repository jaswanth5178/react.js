import React from 'react'
import Button from '../Button'
import './index.scss'

const index = ({currentPage,handleNext,handlePrev}) => {
  return (
    <div className='Pagination'>
        <Button disabled={currentPage===1} onClick={handlePrev}>Prev</Button>
        <span>{currentPage}</span>
        <Button onClick={handleNext}>Next</Button>
      </div>
  )
}

export default index