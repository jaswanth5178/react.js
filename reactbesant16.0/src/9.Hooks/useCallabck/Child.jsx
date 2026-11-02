import React from 'react'

const Child = ({dark}) => {
    console.log("Now can u see me")
  return (
    <div>
        <h1>I am Child Component</h1>
    </div>
  )
}

export default React.memo(Child)