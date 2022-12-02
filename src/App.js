import './App.css';
import {useState} from "react";


function App() {
  const [tank, setTank] = useState(0);
  const [mpg, setMpg] = useState(0);
  const [distance, setDistance] = useState(0);
  const [result, setResult] = useState('');

  const onTank = (e) => {
    const n1 = e.target.value
    setTank(n1);
    calculate(n1, mpg, distance)
  }
  const onMpg = (e) => {
    const n2 = e.target.value
    setMpg(n2);
    calculate(tank, n2, distance)
  }
  const onDistance = (e) => {
    const n3 = e.target.value
    setDistance(n3);
    calculate(tank, mpg, n3)
  }

  const calculate = (n1, n2, n3) => {
    const res = n1 * n2;
    if (res >= n3) setResult('Мы доехали')
    else setResult('Мы не доехали')
  }

  return (
      <div className="App">
        <div>
          <label for="tank">Tank, Gal</label>
          <input name="tank" value={tank} onChange={onTank} type='number'/>
        </div>

        <div>
          <label for="mpg">MPG</label>
          <input name="mpg" value={mpg} onChange={onMpg} type='number'/>
        </div>

        <div>
          <label for="distance">Distance</label>
          <input name="distance" value={distance} onChange={onDistance} type='number'/>
        </div>

        <hr/>
        {result}

      </div>
  );
}

export default App;
