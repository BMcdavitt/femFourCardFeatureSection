import './App.css'
import Card from './Card.js'
import Attribution from './Attribution.js'

function App() {
  return (
    <div className="App">
      <h1>Reliable, efficient delivery</h1>
      <h2>Powered by Technology</h2>
      <p>
        Our Artificial Intelligence powered tools use millions of project data
        points to ensure that your project is successful
      </p>
      <div className="cardHolder">
        <div id="card1">
          <Card
            title="Supervisor"
            descrip="Monitors activity to identify project roadblocks"
            color="hsl(180, 62%, 55%)"
            icon="./images/icon-supervisor.svg"
          />
        </div>
        <div id="card2">
          <Card
            title="Team Builder"
            descrip="Scans our talent network to create the optimal team for your project"
            color="hsl(0, 78%, 62%)"
            icon="./images/icon-team-builder.svg"
          />
        </div>
        <div id="card3">
          <Card
            title="Karma"
            descrip="Regularly evaluates our talent to ensure quality"
            color="hsl(34, 97%, 64%)"
            icon="./images/icon-karma.svg"
          />
        </div>
        <div id="card4">
          <Card
            title="Calculator"
            descrip="Uses data from past projects to provide better delivery estimates"
            color="hsl(212, 86%, 64%)"
            icon="./images/icon-calculator.svg"
          />
        </div>
      </div>
      <footer>
        <Attribution />
      </footer>
    </div>
  )
}

export default App
