import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Navbar from './components/Navbar'
import Card from './components/Card'
import data from './data'


const cards = data.map((card) => {
  return (
    <Card 
      key = {card.id}
      {...card}
    />
  )
})

function App() {

  return (
    <div className="App">
      <Navbar />
      <section>
        {cards}        
      </section>
    </div>
  )
}

export default App
