import './App.css'
import { ButtonAddOne } from './component/Button/ButtonAddOne'
import { Result } from './component/Result/Result'
import { ButtonDecOne } from './component/Button/ButtonDecOne'
import { IncrementByAmount } from './component/IncrementByAmount/IncrementByAmount'

function App() {

  return (
    <div className="App">

      <h1>Redux Counter</h1>
      <Result/>
      <div className="card">
        <ButtonAddOne/>
        <ButtonDecOne/>
        <IncrementByAmount/>
      </div>

    </div>
  )
}

export default App
