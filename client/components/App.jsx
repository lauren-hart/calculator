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
        <div className="calculator">
          <div className="display">
            <input></input>
          </div>
          <div className="keys">
            <p>
              <button className="button gray">7</button>
              <button className="button gray">8</button>
              <button className="button gray">9</button>
              <button className="button pink">/</button>
            </p>
            <p>
              <button className="button gray">4</button>
              <button className="button gray">5</button>
              <button className="button gray">6</button>
              <button className="button pink">x</button>
            </p>
            <p>
              <button className="button gray">1</button>
              <button className="button gray">2</button>
              <button className="button gray">3</button>
              <button className="button pink">-</button>
            </p>
            <p>
              <button className="button gray">0</button>
              <button className="button pink">.</button>
              <button className="button pink">+</button>
              <button className="button orange">=</button>
            </p>
          </div>
        </div>
      </div>
    )
  }
}

export default App
