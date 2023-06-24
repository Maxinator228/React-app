import { useState } from 'react'
import { MainScreen } from '../main/MainScreen'

export function App() {
  const [count, setCount] = useState(0)

  return (
    < MainScreen/>
  )
}


