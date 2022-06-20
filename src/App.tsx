import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from './store/store';
import { incrementByAmount } from './store/features/counter/counterSlice';

const App:React.FC = () => {
  const count = useSelector((state:RootState) => state.counter.value);
  const dispatch = useDispatch();
  return (
    <div>
      <p>{count}</p>
      <button onClick={()=>dispatch(incrementByAmount(23))}>Increase by amount</button>
    </div>
  )
}

export default App;

