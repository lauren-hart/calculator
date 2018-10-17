import React from 'react'

class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      display: '',
      lastNum: [],
      isOperator: false,
      operator: null,
      isEquals: false,
      answer: ''
    }
    this.handleClick = this.handleClick.bind(this)
    this.handleOperator = this.handleOperator.bind(this)
    this.handleDigit = this.handleDigit.bind(this)
    this.handleEquals = this.handleEquals.bind(this)
    this.handleClear = this.handleClear.bind(this)
  }

  handleClick (e) {
    const type = e.target.name
    const key = e.target.value
    if (type === 'operator') {
      this.handleOperator(key)
    } else if (type === 'equals') {
      this.handleEquals()
    } else {
      this.handleDigit(key)
    }
  }

  handleDigit (key) {
    this.setState({
      lastNum: this.state.lastNum + key,
      display: this.state.lastNum + key
    })
  }

  handleOperator (key) {
    this.setState({
      isOperator: true,
      operator: key,
      display: key,
      answer: Number(this.state.answer) +
      ((Number)(this.state.lastNum))
    })
    if (this.state.answer !== []) {
      this.setState({
        lastNum: []
      })
    }
  }

  handleEquals () {
    if (this.state.operator === '+') {
      this.setState({
        answer: Number(this.state.answer) + Number(this.state.lastNum),
        display: Number(this.state.answer) + Number(this.state.lastNum)
      })
    }
  }

  handleClear () {
    this.setState({
      lastNum: '',
      display: '',
      isOperator: false,
      answer: ''
    })
  }

  render () {
    // console.log(this.state.display, 'display')
    console.log(this.state.lastNum, 'last number')
    console.log(this.state.isOperator, 'is operator?')
    console.log(this.state.operator, 'operator')
    console.log(this.state.answer, 'answer')

    return (
      <div className='app'>
        <div className='calculator'>
          <div className="display">
            <input
              placeholder="0"
              value={this.state.display}
              readOnly>
            </input>
          </div>
          <div className="keys">
            <p>
              <button value="7" name="digit" onClick={this.handleClick} className="button gray">7</button>
              <button value="8" name="digit" onClick={this.handleClick} className="button gray">8</button>
              <button value="9" name="digit" onClick={this.handleClick} className="button gray">9</button>
              {/* <button value="/" name="digit" onClick={this.handleOperator} className="button pink">/</button> */}
            </p>
            <p>
              <button value="4" name="digit" onClick={this.handleClick} className="button gray">4</button>
              <button value="5" name="digit" onClick={this.handleClick} className="button gray">5</button>
              <button value="6" name="digit" onClick={this.handleClick} className="button gray">6</button>
              {/* <button value="x" name="digit" onClick={this.handleOperator} className="button pink">x</button> */}
            </p>
            <p>
              <button value="1" name="digit" onClick={this.handleClick} className="button gray">1</button>
              <button value="2" name="digit" onClick={this.handleClick} className="button gray">2</button>
              <button value="3" name="digit" onClick={this.handleClick} className="button gray">3</button>
              {/* <button value="-" name="digit" onClick={this.handleOperator} className="button pink">-</button> */}
            </p>
            <p>
              <button value="0" name="digit" onClick={this.handleClick} className="button gray">0</button>
              {/* <button value="." name="digit" onClick={this.handleDecimal} className="button pink">.</button> */}
              <button value="+" name="operator" onClick={this.handleClick} className="button pink">+</button>
              <button value="=" name="equals" onClick={this.handleClick} className="button orange">=</button>
            </p>
            <p>
              <button value="" name="digit" onClick={this.handleClear} className="button orange">AC</button>
            </p>
          </div>
        </div>
      </div>
    )
  }
}

export default App
