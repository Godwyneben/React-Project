import { useState } from "react"
import useFetch from '../Hooks/useFetch'

// styles 
import './TripLists.css'
export default function TripLists() {
    const [url, setUrl] = useState('http://localhost:3000/trips')
    const { data: trips, isPending, error } = useFetch(url)

    return (
        <div className="trip-list">
            <h2>Trip List</h2>  
            {isPending && <div>Trips are loading ...</div> }
            {error && <div>Could not fetch data ...</div> }
            <ul>
                {trips && trips.map(trip => (
                    <li key={trip.id}>
                        <h3>{trip.title}</h3>
                        <p>{trip.price}</p>
                    </li>
                ))}
            </ul>
            <div className="filters">
                <button onClick={() => setUrl('http://localhost:3000/trips?loc=asia')}> 
                    Asian Trips
                </button>
                <button onClick={() => setUrl('http://localhost:3000/trips?loc=europe')}> 
                    European Trips
                </button>
                <button onClick={() => setUrl('http://localhost:3000/trips')}> 
                    All Trips
                </button>
            </div>
        </div>
    )
}
