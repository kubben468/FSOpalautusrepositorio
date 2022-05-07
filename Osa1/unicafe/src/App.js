import { useState } from 'react'

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>
    {text}
  </button>
)

const Statistics = ({good, neutral, bad, allClicks, allClicksAve, posClicks}) => {
  if ((allClicks) === 0) {
    // jos palautetta ei ole vielä annettu niin näytölle tulostuu seuraava tuloste
    return (
      <div>no feedback given</div>
    )
  }
  return (
    <div>  
      <h1>statistics</h1>
        <table>
          <tbody>
            <StatisticsLine text="good" value={good} />  
            <StatisticsLine text="neutral" value={neutral} />
            <StatisticsLine text="bad" value={bad} />
            <StatisticsLine text="all" value={allClicks}/>
            <StatisticsLine text="average" value={allClicksAve/allClicks} />
            <StatisticsLine text="positive" value={posClicks/(allClicks) * 100} />
          </tbody>
        </table> 
    </div>
  
  )
}

const StatisticsLine = (props) => {
  // muodostetaan miten const StatisticsLine muodostetaan
  return(
    <tr>
      <td>
        {props.text}
      </td>
      <td>
        {props.value}
      </td>
    </tr>
  )
}

const App = () => {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [allClicks, setAll] = useState(0)
  const [allClicksAve, setAllAve] = useState(0)
  const [posClicks, setPos] = useState(0)

  const handleGoodClick = () => {
    // hyvät palautteet kirjataan seuraavasti
    setGood(good + 1)
    setAll(allClicks + 1)
    setAllAve(allClicksAve + 1)
    setPos(posClicks + 1)
  }

  const handleNeutralClick = () => {
    // neutraalit palautteet kirjataan seuraavasti
    setNeutral(neutral + 1)
    setAll(allClicks + 1)
    setAllAve(allClicksAve)
    setPos(posClicks)
  }

  const handleBadClick = () => {
    // huonot palautteet kirjataan seuraavasti
    setBad(bad + 1)
    setAll(allClicks + 1)
    setAllAve(allClicksAve - 1)
    setPos(posClicks)
  }

  return (
    <div>
      <h1>give feedback</h1>
      <Button handleClick={handleGoodClick} text='good'/>
      <Button handleClick={handleNeutralClick} text='neutral'/>
      <Button handleClick={handleBadClick} text='bad' />
      <Statistics good={good} neutral={neutral} bad={bad} allClicks={allClicks}
       allClicksAve={allClicksAve} posClicks={posClicks}/>
    </div>
  )
}

export default App
