import { useState } from 'react';
import './App.css';
import TripLists from './Components/TripLists';

export default function App() {
  const [showTrips, setShowTrips] = useState(true)

  return (
    <div className='App'>
      <button onClick={() => setShowTrips(false)}>Hide trips</button>
      {showTrips && <TripLists />}
    </div>
  )
}
