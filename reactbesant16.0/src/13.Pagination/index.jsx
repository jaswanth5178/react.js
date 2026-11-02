import React, { useState } from 'react'
import Data from './13.Pagination/data.json'

const App = () => {

  const RecordsPerPage = 10;
  const[currentPage,setCurrentPage] = useState(1)
  const totalPages = Math.ceil(Data.length/RecordsPerPage)

  function getRecords(){
    const startIndex = (currentPage -1) * RecordsPerPage
    const EndIndex = startIndex + RecordsPerPage
    return Data.slice(startIndex,EndIndex)
  }

  function handlePrev(){
    setCurrentPage((prev)=>prev - 1)
  }

  function handleNext(){
    setCurrentPage((prev)=>prev+1)
  }


  return (
    <div>
      <table border={'1'} width={'80%'}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Age</th>
          </tr>
        </thead>
        <tbody>
          {
        getRecords().map((value,index)=>{
          return(
            <tr>
              <td>{value.name}</td>
              <td>{value.email}</td>
              <td>{value.age}</td>
            </tr>
          )
        })
      }
        </tbody>
        <tfoot></tfoot>
      </table>
      <button disabled={currentPage === 1} onClick={handlePrev}>Prev</button>
      <span>{currentPage}</span>
      <button disabled={currentPage === totalPages} onClick={handleNext}>Next</button>
    </div>
  )
}

export default App