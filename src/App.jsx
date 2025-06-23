import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Ticket from './Ticket'
import LottryGame from './LottryGame'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <LottryGame n={3} winningSum={15} />
    </>
  )
}

export default App
