import React from 'react'

import {getFruits} from '../apiClient'

class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      fruits: []
    }
  }

  componentDidMount () {
    getFruits()
      .then(fruits => {
        this.setState({fruits})
      })
  }

  render () {
    return (
      <div className='app'>
        <h1>Calculator</h1>
        <div className="container">
          <input></input>
          <div className="row">
            <button>7</button>
            <button>8</button>
            <button>9</button>
            <button>/</button>
          </div>
          <div className="row">
            <button>4</button>
            <button>5</button>
            <button>6</button>
            <button>x</button>
          </div>
          <div className="row">
            <button>1</button>
            <button>2</button>
            <button>3</button>
            <button>-</button>
          </div>
          <div className="row">
            <button>0</button>
            <button>.</button>
            <button>+</button>
            <button>=</button>
          </div>
        </div>
      </div>
    )
  }
}

export default App
