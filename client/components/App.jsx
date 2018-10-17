import React from 'react'

class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      input: ''
    }
    this.handleClick = this.handleClick.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.handleClear = this.handleClear.bind(this)
  }

  handleClick (e) {
    this.setState({
      input: this.state.input + e.target.value
    })
  }

  handleChange (e) {
    this.setState({
      input: this.state.input + e.target.value
    })
  }

  handleClear () {
    this.setState({
      input: ''
    })
  }

  render () {
    return (
      <div className='app'>
        <div className="calculator">
          <div className="display">
            <input placeholder="0" onChange={this.handleChange} value={this.state.input}></input>
          </div>
          <div className="keys">
            <p>
              <button value="7" onClick={this.handleClick} className="button gray">7</button>
              <button value="8" onClick={this.handleClick} className="button gray">8</button>
              <button value="9" onClick={this.handleClick} className="button gray">9</button>
              <button value="/" onClick={this.handleClick} className="button pink">/</button>
            </p>
            <p>
              <button value="4" onClick={this.handleClick} className="button gray">4</button>
              <button value="5" onClick={this.handleClick} className="button gray">5</button>
              <button value="6" onClick={this.handleClick} className="button gray">6</button>
              <button value="x" onClick={this.handleClick} className="button pink">x</button>
            </p>
            <p>
              <button value="1" onClick={this.handleClick} className="button gray">1</button>
              <button value="2" onClick={this.handleClick} className="button gray">2</button>
              <button value="3" onClick={this.handleClick} className="button gray">3</button>
              <button value="-" onClick={this.handleClick} className="button pink">-</button>
            </p>
            <p>
              <button value="0" onClick={this.handleClick} className="button gray">0</button>
              <button value="." onClick={this.handleClick} className="button pink">.</button>
              <button value="+" onClick={this.handleClick} className="button pink">+</button>
              <button value="=" onClick={this.handleClick} className="button orange">=</button>
            </p>
            <p>
              <button value="" onClick={this.handleClear} className="button orange">CE</button>
            </p>
          </div>
        </div>
      </div>
    )
  }
}

export default App
