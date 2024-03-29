// Write your code here
import {Component} from 'react'
import './index.css'

class EvenOddApp extends Component {
  state = {count: 0}

  getRandomNumber = () => Math.ceil(Math.random() * 100)

  onIncrement = () => {
    const randomNumber = this.getRandomNumber()
    this.setState(prevState => ({
      count: prevState.count + randomNumber,
    }))
  }

  render() {
    const {count} = this.state
    const displayText = count % 2 === 0 ? 'Even' : 'Odd'
    return (
      <div className="bg-container">
        <h1 className="heading">Count {count}</h1>
        <p className="even-odd-para">Count is {displayText}</p>
        <button className="button" type="button" onClick={this.onIncrement}>
          increment
        </button>
        <p className="increase-para">
          *increase By Random Number Between 0 to 100
        </p>
      </div>
    )
  }
}
export default EvenOddApp
