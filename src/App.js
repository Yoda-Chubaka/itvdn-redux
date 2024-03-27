import { useSelector, useDispatch } from 'react-redux';

import {
  increment,
  decrement
} from './store/counterSlice';

function App() {
  const count = useSelector((state) => state.counerValue.count);
  const dispatch = useDispatch();

  function inc() {
    dispatch(increment);
  }

  function dec() {
    dispatch(decrement);
  }

  return (
    <div className="container">
      <h3>{count}</h3>
      <button onClick={inc}>Increment +</button>
      <button onClick={dec}>Decrement -</button>

    </div>
  )
}

export default App;