import React from 'react'

const Child = ({name,place,dark}) => {
  return (
    <div>
        <h>My name is {name} and my place is {place}</h>
        <button onClick={dark}>Dark</button>
    </div>
  )
}

export default Child