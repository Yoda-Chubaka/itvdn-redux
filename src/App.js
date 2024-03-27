import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';

import {
  increment,
  decrement,
  reload,
  addValue
} from './store/counterSlice';

function App() {
  const count = useSelector((state) => state.counterValue.count);
  const dispatch = useDispatch();

  const [value, setValue] = useState(0);

  function inc() {
    dispatch(increment());
  }

  function dec() {
    dispatch(decrement());
  }

  function rel() {
    dispatch(reload());
  }

  function add() {
    const val = Number(value);
    dispatch(addValue(isNaN(val)?0:val));
  }

  return (
    <div className="container">
      <div>
        <h3>{count}</h3>
        <button onClick={inc}>Increment +</button>
        <button onClick={dec}>Decrement -</button>
      </div>
      <div>
        <button onClick={rel}>Reset</button>
      </div>
      <div>
        <input type="text" value={value} onChange={ el => setValue(el.target.value)} />
        <button onClick={add}>Plus value</button>
      </div>

    </div>
  )
}

export default App;