import React from 'react'
import './index.scss'

const MainLayout = (props) => {

  return (
    <div>
      <h1>LAYOUT</h1>
      {props.children()}
    </div>
  )
}

export default MainLayout
