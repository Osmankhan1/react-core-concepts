import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from './counter'
import Team from './team'
import Users from './users'
import Friends from './friends'

function App() {
  const [count, setCount] = useState(0)

 const handle1 = () => {
  alert('ami onclick one')
 }

 function handle2() {
  alert('ami onclick two');
 }

  return (
    <>
      <h2>React Explere part 2</h2>

      <Friends></Friends>

      <Users></Users>

      <Team></Team>

    <Counter></Counter>

      <button style={{background:'red', color:'white', marginRight:'5px' }} onClick={handle1}>click me</button>
      <button style={{background:'red', color:'white', }} onClick={handle2}> click me2</button>

      
    </>
  )
}

export default App
