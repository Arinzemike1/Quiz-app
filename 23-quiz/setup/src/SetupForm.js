import React from 'react'
import { useGlobalContext } from './context'

const SetupForm = () => {
  const {quiz, handleChange, handleSubmit, error} = useGlobalContext();
  return (
    <section className="quiz quiz-small">
      <form className="setup-form">
        <h2>Setup Quiz</h2>
        <div className="form-control">
          <label htmlFor="amount">Number of questions</label>
          <input className="form-input" type="number" name="amount" id="amount" value={quiz.amount} onChange={handleChange} min={1} max={50} />
        </div>

        <div className="form-control">
          <label htmlFor="category">Category</label>
          <select name="category" id="category" className="form-input" value={quiz.category} onChange={handleChange}>
            <option value="sports">Sports</option>
            <option value="history">History</option>
            <option value="politics">Politics</option>
          </select>
        </div>

        <div className="form-control">
          <label htmlFor="difficulty">Select difficulty</label>
          <select name="difficulty" id="difficulty" className="form-input" value={quiz.difficulty} onChange={handleChange}>
            <option value="easy">Easy</option>
            <option value="medium">Medium</option>
            <option value="hard">Hard</option>
          </select>
        </div>
        {error && <p className="error">Can't generate questions. Please try different options.</p>}
        <button className="submit-btn" type="submit" onClick={handleSubmit}>Start</button>
      </form>
    </section>
  )
}

export default SetupForm
