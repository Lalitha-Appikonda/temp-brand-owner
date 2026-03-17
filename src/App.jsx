import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Styleguide from './Styleguide/Styleguide'
import Card from './components/card/Card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Styleguide />
      {/* <Card /> */}
    </>
  )
}

export default App
