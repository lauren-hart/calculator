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
      answer: '',
      isDecimal: false
    }
    this.handleClick = this.handleClick.bind(this)
    this.handleOperator = this.handleOperator.bind(this)
    this.handleDigit = this.handleDigit.bind(this)
    this.handleEquals = this.handleEquals.bind(this)
    this.handleClear = this.handleClear.bind(this)
    this.handleClearLast = this.handleClearLast.bind(this)
  }

  handleClick (e) {
    const type = e.target.name
    const key = e.target.value
    if (type === 'operator') {
      this.handleOperator(key)
    } else if (type === 'equals') {
      this.handleEquals()
    } else {
      this.handleDigit(key, type)
    }
  }

  handleDigit (key, type) {
    const lastNum = this.state.lastNum
    if (type === 'decimal') {
      if (!this.state.isDecimal) {
        this.setState({
          lastNum: lastNum + key,
          display: lastNum + key,
          isDecimal: true
        })
      }
    } else {
      this.setState({
        lastNum: lastNum + key,
        display: lastNum + key,
        isDecimal: false
      })
    }
  }

  handleOperator (key) {
    const answer = this.state.answer
    const lastNum = Number(this.state.lastNum)
    this.setState({
      isOperator: true,
      operator: key,
      display: key,
      answer: Number(answer) + lastNum
    })
    if (answer !== []) {
      this.setState({
        lastNum: []
      })
    }
  }

  // need a function to determine how many digits are after the
  // decimal point

  handleEquals () {
    const operator = this.state.operator
    const answer = Number(this.state.answer)
    const lastNum = Number(this.state.lastNum)
    if (operator === '+') {
      this.setState({
        answer: (answer + lastNum),
        display: (answer + lastNum)
      })
    } else if (operator === '-') {
      this.setState({
        answer: answer - lastNum,
        display: (answer - lastNum)
      })
    } else if (operator === '/') {
      this.setState({
        answer: answer / lastNum,
        display: (answer / lastNum)
      })
    } else if (operator === 'x') {
      this.setState({
        answer: answer * lastNum,
        display: (answer * lastNum)
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

  handleClearLast () {
    this.setState({
      lastNum: '',
      display: ''
    })
  }

  render () {
    // console.log(this.state.display, 'display')
    // console.log(this.state.lastNum, 'last number')
    // console.log(this.state.isOperator, 'is operator?')
    // console.log(this.state.operator, 'operator')
    // console.log(this.state.answer, 'answer')
    // console.log(this.state.isDecimal, 'decimal')

    return (
      <div className='app'>
        <div className="bg"></div>
        <h1>You do the math...</h1>
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
              <button value="7" name="digit" onClick={this.handleClick} className="button blue">7</button>
              <button value="8" name="digit" onClick={this.handleClick} className="button blue">8</button>
              <button value="9" name="digit" onClick={this.handleClick} className="button blue">9</button>
              <button value="/" name="operator" onClick={this.handleClick} className="button white">/</button>
            </p>
            <p>
              <button value="4" name="digit" onClick={this.handleClick} className="button blue">4</button>
              <button value="5" name="digit" onClick={this.handleClick} className="button blue">5</button>
              <button value="6" name="digit" onClick={this.handleClick} className="button blue">6</button>
              <button value="x" name="operator" onClick={this.handleClick} className="button white">x</button>
            </p>
            <p>
              <button value="1" name="digit" onClick={this.handleClick} className="button blue">1</button>
              <button value="2" name="digit" onClick={this.handleClick} className="button blue">2</button>
              <button value="3" name="digit" onClick={this.handleClick} className="button blue">3</button>
              <button value="-" name="operator" onClick={this.handleClick} className="button white">-</button>
            </p>
            <p>
              <button value="0" name="digit" onClick={this.handleClick} className="button blue">0</button>
              <button value="." name="decimal" onClick={this.handleClick} className="button blue">.</button>
              <button value="=" name="equals" onClick={this.handleClick} className="button orange">=</button>
              <button value="+" name="operator" onClick={this.handleClick} className="button white long">+</button>
            </p>
            <p>
              <button value="" name="digit" onClick={this.handleClear} className="button orange">AC</button>
              <button value="" name="digit" onClick={this.handleClearLast} className="button orange">CE</button>
            </p>
          </div>
        </div>
      </div>
    )
  }
}

export default App
