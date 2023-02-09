import {Component} from 'react'
import './index.css'

class LettersCalculator extends Component {
  state = {phrase: ''}

  onPhraseChange = event => {
    this.setState({phrase: event.target.value})
  }

  render() {
    const {phrase} = this.state
    const value = phrase.length
    return (
      <div className="app-container">
        <div className="text-container">
          <h1 className="heading">Calculate the Letters you enter</h1>
          <label htmlFor="phraseText" className="label">
            Enter the phrase
          </label>
          <br />
          <input
            type="text"
            className="text-bar"
            placeholder="Enter the phrase"
            id="phraseText"
            onChange={this.onPhraseChange}
            value={phrase}
          />
          <p className="result">No.of letters: {value}</p>
        </div>
        <img
          src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
          alt="letters calculator"
          className="image"
        />
      </div>
    )
  }
}

export default LettersCalculator
