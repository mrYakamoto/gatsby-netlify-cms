import React from 'react'

import './index.scss'

class MainLayout extends React.Component {
  render() {
    return (
      <div>
        <h1>LAYOUT2</h1>
        {this.props.children()}
      </div>
    )
  }
}

export default MainLayout
